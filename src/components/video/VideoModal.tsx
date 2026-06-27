import { useEffect, useRef } from 'react'
import type { Video } from '../../data/types'

type VideoModalProps = {
  video: Video | null
  onClose: () => void
}

/**
 * Accessible lightbox. The YouTube iframe is only mounted while open, with
 * autoplay, so no players load until a guest actually picks a recipe.
 * Focus is trapped inside the dialog and restored to the trigger on close.
 */
export function VideoModal({ video, onClose }: VideoModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!video) return

    // remember what had focus so we can restore it on close
    openerRef.current = document.activeElement as HTMLElement | null

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      // trap focus among the dialog's focusable elements
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'button, iframe, [href], [tabindex]:not([tabindex="-1"])'
      )
      if (!focusables || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement
      if (e.shiftKey && (active === first || !panelRef.current?.contains(active))) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      // restore focus to the card that opened the modal
      openerRef.current?.focus?.()
    }
  }, [video, onClose])

  if (!video) return null

  return (
    <div className="vmodal" role="dialog" aria-modal="true" aria-label={`${video.title} recipe video`}>
      <button className="vmodal__backdrop" aria-label="Close video" onClick={onClose} />
      <div className="vmodal__panel" role="document" ref={panelRef}>
        <div className="vmodal__bar">
          <div className="vmodal__title">
            <span className="vmodal__dot" data-cat={video.category} />
            <strong>{video.title}</strong>
            {video.category && <span className="vmodal__cat" data-cat={video.category}>{video.category}</span>}
          </div>
          <button ref={closeRef} className="vmodal__close" onClick={onClose} aria-label="Close video">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="vmodal__frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {video.description && <p className="vmodal__desc">{video.description}</p>}
      </div>
    </div>
  )
}
