"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { familiesContent } from "@/content/families";
import type { FamiliesClientPayload } from "./get-families-payload";

const UNFURL_MS = 1000;
const STAGGER_MS = 120;

export function FamiliesView({ payload }: { payload: FamiliesClientPayload }) {
  const { intro, sealed, scrollAssets } = familiesContent;
  const contentRevealed = payload.contentRevealed;
  const showDevToggle = payload.showDevToggle;
  const [devBlurEnabled, setDevBlurEnabled] = useState(true);

  const [unfurled, setUnfurled] = useState(false);
  const [shown, setShown] = useState(false);

  const list = payload.families;
  const blurred = contentRevealed
    ? false
    : showDevToggle
      ? devBlurEnabled
      : true;

  useEffect(() => {
    let cancelled = false;

    setShown(false);
    setUnfurled(false);

    let innerFrame = 0;
    const outerFrame = window.requestAnimationFrame(() => {
      innerFrame = window.requestAnimationFrame(() => {
        if (!cancelled) setUnfurled(true);
      });
    });

    const unfurlComplete =
      UNFURL_MS + Math.max(0, payload.gateCount - 1) * STAGGER_MS;
    const showTimer = window.setTimeout(() => {
      if (!cancelled) {
        window.requestAnimationFrame(() => setShown(true));
      }
    }, unfurlComplete);

    return () => {
      cancelled = true;
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

  return (
    <>
      {showDevToggle ? (
        <button
          type="button"
          className="palace-dev-toggle__button fixed bottom-4 right-4 z-[60]"
          aria-pressed={devBlurEnabled}
          aria-label={
            devBlurEnabled
              ? "Dev preview: blurred (default)"
              : "Dev preview: unblurred"
          }
          onClick={() => setDevBlurEnabled((value) => !value)}
        >
          Dev: {devBlurEnabled ? "Blurred" : "Unblurred"}
        </button>
      ) : null}

      <div className="palace-families">
        <section className="palace-proclamation container-custom">
          <h1 className="palace-proclamation__title">{intro.title}</h1>
        </section>

        <section
          className="scroll-scene"
          aria-label={
            blurred ? "Sealed family scrolls" : "This year's families"
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
                  const family = list[index];
                  const imageSrc = family?.image;
                  const showCopy = Boolean(family?.name);

                  return (
                    <li
                      key={family?.id ?? `scroll-${index}`}
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
                              {imageSrc || showCopy ? (
                                <div
                                  className={`scroll__content${blurred ? " is-blurred" : ""}`}
                                  aria-hidden={blurred}
                                >
                                  {imageSrc ? (
                                    <div className="scroll__banner-frame">
                                      <Image
                                        src={imageSrc}
                                        alt={
                                          blurred || !family?.name
                                            ? "Family photo"
                                            : `${family.name} photo`
                                        }
                                        fill
                                        sizes="(max-width: 768px) 32vw, 30vw"
                                        className="scroll__banner"
                                      />
                                    </div>
                                  ) : null}
                                  {showCopy && family ? (
                                    <div className="scroll__copy">
                                      <h2>{family.name}</h2>
                                      <p>{family.description}</p>
                                    </div>
                                  ) : null}
                                </div>
                              ) : null}
                              {blurred || !showCopy ? (
                                <span className="sr-only">
                                  {sealed.a11yLabel}
                                </span>
                              ) : null}
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
    </>
  );
}