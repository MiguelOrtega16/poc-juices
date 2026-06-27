import { useEffect } from 'react'

/**
 * Reveal-on-scroll. Adds `.is-visible` to every `.reveal` element when it
 * enters the viewport. Re-scans on each route change via the `key` dep.
 */
export function useReveal(key?: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'))
    if (els.length === 0) return

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [key])
}
