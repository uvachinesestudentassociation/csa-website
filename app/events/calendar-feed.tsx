"use client"

import { useId, useRef } from "react"

type CalendarFeedProps = {
  url: string
  buttonLabel: string
  title: string
  instructions: string
  viewLabel: string
  closeLabel: string
}

export function CalendarFeed({
  url,
  buttonLabel,
  title,
  instructions,
  viewLabel,
  closeLabel,
}: CalendarFeedProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const titleId = useId()

  function open() {
    dialogRef.current?.showModal()
    // Select after paint so the value is ready to copy
    requestAnimationFrame(() => inputRef.current?.select())
  }

  function close() {
    dialogRef.current?.close()
  }

  return (
    <>
      <button
        type="button"
        className="events-page__feed-trigger"
        onClick={open}
      >
        {buttonLabel}
      </button>

      <dialog
        ref={dialogRef}
        className="events-page__feed-dialog"
        aria-labelledby={titleId}
        onClick={(e) => {
          if (e.target === dialogRef.current) close()
        }}
      >
        <div className="events-page__feed-panel">
          <header className="events-page__feed-header">
            <h2 id={titleId} className="events-page__feed-title">
              {title}
            </h2>
            <button
              type="button"
              className="events-page__feed-close"
              onClick={close}
              aria-label={closeLabel}
            >
              ×
            </button>
          </header>

          <p className="events-page__feed-instructions">{instructions}</p>

          <input
            ref={inputRef}
            className="events-page__feed-input"
            type="text"
            readOnly
            value={url}
            onFocus={(e) => e.currentTarget.select()}
            aria-label={title}
          />

          <a
            className="events-page__feed-view"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {viewLabel}
          </a>
        </div>
      </dialog>
    </>
  )
}
