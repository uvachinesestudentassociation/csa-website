"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { familiesContent } from "@/content/families";
import type { FamiliesClientPayload } from "./get-families-payload";

const isDev = process.env.NODE_ENV === "development";
const UNFURL_MS = 1000;
const STAGGER_MS = 120;

export function FamiliesView({ payload }: { payload: FamiliesClientPayload }) {
  const { intro, sealed, card, scrollAssets } = familiesContent;
  const contentRevealed = payload.contentRevealed;
  // In dev the toggle fully controls sealed ↔ revealed so the unfurl can be replayed
  const [devPreviewRevealed, setDevPreviewRevealed] = useState(contentRevealed);
  const revealed = isDev ? devPreviewRevealed : contentRevealed;

  const [photosMounted, setPhotosMounted] = useState(false);
  const [unfurled, setUnfurled] = useState(false);
  const [shown, setShown] = useState(false);

  const list =
    isDev && !contentRevealed
      ? revealed
        ? payload.devPreviewFamilies
        : payload.families
      : payload.families;

  useEffect(() => {
    if (!revealed) {
      setUnfurled(false);
      setShown(false);
      const hide = window.setTimeout(
        () => setPhotosMounted(false),
        UNFURL_MS + 100,
      );
      return () => window.clearTimeout(hide);
    }

    // Mount photo DOM while still rolled, then unfurl, then fade content in
    setPhotosMounted(true);
    setShown(false);
    setUnfurled(false);

    let innerFrame = 0;
    const outerFrame = window.requestAnimationFrame(() => {
      innerFrame = window.requestAnimationFrame(() => setUnfurled(true));
    });
    const showDelay =
      UNFURL_MS + Math.max(0, payload.gateCount - 1) * STAGGER_MS;
    const showTimer = window.setTimeout(() => setShown(true), showDelay);

    return () => {
      window.cancelAnimationFrame(outerFrame);
      window.cancelAnimationFrame(innerFrame);
      window.clearTimeout(showTimer);
    };
  }, [revealed, payload.gateCount]);

  const galleryClass = [
    "scroll-gallery",
    unfurled ? "is-unfurled" : "",
    shown ? "is-shown" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="palace-families">
      {isDev && (
        <div className="palace-dev-toggle">
          <button
            type="button"
            className="palace-dev-toggle__button"
            aria-pressed={devPreviewRevealed}
            onClick={() => setDevPreviewRevealed((value) => !value)}
          >
            Dev: {devPreviewRevealed ? "Showing revealed" : "Showing sealed"}
          </button>
          {contentRevealed && (
            <p className="palace-dev-toggle__note">
              content.revealed is true — toggle still overrides in dev
            </p>
          )}
        </div>
      )}

      <section className="palace-proclamation container-custom">
        <h1 className="palace-proclamation__title">{intro.title}</h1>
        <p className="palace-proclamation__body">{intro.body}</p>
      </section>

      <section
        className="scroll-scene"
        aria-label={revealed ? "This year's families" : "Sealed family scrolls"}
      >
        <figure className="scroll-scene__frame">
          <div
            className="scroll-scene__backdrop"
            role="img"
            aria-label={sealed.sceneBackdropAlt}
            style={
              {
                "--scroll-backdrop-url": `url(${scrollAssets.backdrop})`,
              } as React.CSSProperties
            }
          />

          <div className="scroll-scene__hang">
            <div className="scroll-beam" aria-hidden="true">
              <span className="scroll-beam__finial scroll-beam__finial--left" />
              <span className="scroll-beam__rail" />
              <span className="scroll-beam__finial scroll-beam__finial--right" />
            </div>

            <ul className={galleryClass}>
            {Array.from({ length: payload.gateCount }, (_, index) => {
              const family = photosMounted ? list[index] : undefined;
              const showFamily = Boolean(family?.name);

              return (
                <li
                  key={`scroll-${index}`}
                  className="scroll"
                  style={
                    {
                      "--scroll-stagger": `${index * STAGGER_MS}ms`,
                      "--scroll-parchment-url": `url(${scrollAssets.parchment})`,
                      "--scroll-rod-top-url": `url(${scrollAssets.rodTop})`,
                      "--scroll-rod-bottom-url": `url(${scrollAssets.rodBottom})`,
                    } as React.CSSProperties
                  }
                >
                  <div className="scroll__string" aria-hidden="true" />

                  <div className="scroll__sway">
                    <div
                      className="scroll__rod scroll__rod--top"
                      aria-hidden="true"
                    />

                    <div className="scroll__stage">
                    <div className="scroll__body">
                      <div className="scroll__parchment" aria-hidden="true" />

                      {showFamily && family ? (
                        <div className="scroll__content">
                          <div className="scroll__photo-frame">
                            <Image
                              src={family.image || "/placeholder.svg"}
                              alt={`${family.name} family photo`}
                              width={800}
                              height={800}
                              sizes="(max-width: 768px) 32vw, 30vw"
                              className="scroll__photo"
                            />
                          </div>
                          <div className="scroll__copy">
                            <h2>{family.name}</h2>
                            <p>{family.description}</p>
                            <a
                              href={family.instagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Instagram
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                              <span>{card.instagramLabel}</span>
                            </a>
                          </div>
                        </div>
                      ) : (
                        <span className="sr-only">{sealed.a11yLabel}</span>
                      )}
                    </div>

                    <div
                      className="scroll__rod scroll__rod--bottom"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </li>
              );
            })}
            </ul>
          </div>

          <figcaption className="sr-only">{sealed.sceneSealedAlt}</figcaption>
        </figure>
      </section>
    </div>
  );
}
