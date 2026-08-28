"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { familiesContent } from "@/content/families";
import type { FamiliesClientPayload } from "./get-families-payload";

const isDev = process.env.NODE_ENV === "development";
const UNFURL_MS = 1000;
const STAGGER_MS = 120;

function getDisplayList(payload: FamiliesClientPayload) {
  if (isDev && payload.devPreviewFamilies.length > 0) {
    return payload.devPreviewFamilies;
  }
  return payload.families;
}

function isScrollBlurred(
  index: number,
  contentRevealed: boolean,
  devBlurEnabled: boolean,
  revealFromIndex: number,
) {
  if (contentRevealed) return false;
  if (isDev) return devBlurEnabled;
  return index < revealFromIndex;
}

export function FamiliesView({ payload }: { payload: FamiliesClientPayload }) {
  const { intro, sealed, scrollAssets, revealFromIndex } = familiesContent;
  const contentRevealed = payload.contentRevealed;
  const [devBlurEnabled, setDevBlurEnabled] = useState(!contentRevealed);

  const [photosMounted, setPhotosMounted] = useState(false);
  const [unfurled, setUnfurled] = useState(false);
  const [shown, setShown] = useState(false);

  const list = getDisplayList(payload);

  useEffect(() => {
    setShown(false);
    setUnfurled(false);
    setPhotosMounted(false);

    let innerFrame = 0;
    const outerFrame = window.requestAnimationFrame(() => {
      innerFrame = window.requestAnimationFrame(() => setUnfurled(true));
    });
    const unfurlComplete =
      UNFURL_MS + Math.max(0, payload.gateCount - 1) * STAGGER_MS;
    const showTimer = window.setTimeout(() => {
      setPhotosMounted(true);
      window.requestAnimationFrame(() => setShown(true));
    }, unfurlComplete);

    return () => {
      window.cancelAnimationFrame(outerFrame);
      window.cancelAnimationFrame(innerFrame);
      window.clearTimeout(showTimer);
    };
  }, [payload.gateCount]);

  const galleryClass = [
    "scroll-gallery",
    unfurled ? "is-unfurled" : "",
    shown ? "is-shown" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const anyBlurred =
    !contentRevealed &&
    list.some((_, index) =>
      isScrollBlurred(index, contentRevealed, devBlurEnabled, revealFromIndex),
    );

  return (
    <div className="palace-families">
      {isDev && !contentRevealed && (
        <div className="palace-dev-toggle">
          <button
            type="button"
            className="palace-dev-toggle__button"
            aria-pressed={devBlurEnabled}
            onClick={() => setDevBlurEnabled((value) => !value)}
          >
            Dev: {devBlurEnabled ? "Blur on" : "Blur off"}
          </button>
          <p className="palace-dev-toggle__note">
            Production uses revealFromIndex = {revealFromIndex} (scrolls before
            this index stay blurred)
          </p>
        </div>
      )}

      <section className="palace-proclamation container-custom">
        <h1 className="palace-proclamation__title">{intro.title}</h1>
      </section>

      <section
        className="scroll-scene"
        aria-label={
          anyBlurred ? "Sealed family scrolls" : "This year's families"
        }
      >
        <figure className="scroll-scene__frame">
          <div
            className="scroll-scene__backdrop"
            role="img"
            aria-label={sealed.sceneBackdropAlt}
            style={
              scrollAssets.backdrop
                ? ({
                    "--scroll-backdrop-url": `url(${scrollAssets.backdrop})`,
                  } as React.CSSProperties)
                : undefined
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
                const bannerSrc = scrollAssets.banners[index];
                const blurred = isScrollBlurred(
                  index,
                  contentRevealed,
                  devBlurEnabled,
                  revealFromIndex,
                );

                return (
                  <li
                    key={`scroll-${index}`}
                    className="scroll"
                    style={
                      {
                        "--scroll-stagger": `${index * STAGGER_MS}ms`,
                        "--scroll-url": `url(${scrollAssets.scroll})`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="scroll__sway">
                      <div className="scroll__stage">
                        <div className="scroll__viewport">
                          <div className="scroll__skin" aria-hidden="true" />
                          <div className="scroll__body">
                            {showFamily && family ? (
                              <div
                                className={`scroll__content${blurred ? " is-blurred" : ""}`}
                                aria-hidden={blurred}
                              >
                                {bannerSrc ? (
                                  <div className="scroll__banner-frame">
                                    <Image
                                      src={bannerSrc}
                                      alt={`${family.name} banner`}
                                      fill
                                      sizes="(max-width: 768px) 32vw, 30vw"
                                      className="scroll__banner"
                                    />
                                  </div>
                                ) : null}
                                <div className="scroll__copy">
                                  <h2>{family.name}</h2>
                                  <p>{family.description}</p>
                                </div>
                              </div>
                            ) : (
                              <span className="sr-only">
                                {sealed.a11yLabel}
                              </span>
                            )}
                          </div>
                        </div>
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