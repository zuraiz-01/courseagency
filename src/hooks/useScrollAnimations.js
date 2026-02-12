import { useEffect } from 'react'

const SCROLL_ANIMATED_SELECTOR =
  '.reveal-up, .scroll-pop, .scroll-slide-left, .scroll-slide-right'

function useScrollAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const targets = document.querySelectorAll(SCROLL_ANIMATED_SELECTOR)

    if (prefersReducedMotion) {
      targets.forEach((element) => element.classList.add('in-view'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    targets.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}

export default useScrollAnimations
