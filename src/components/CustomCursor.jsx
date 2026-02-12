import { useEffect, useRef, useState } from 'react'

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, label, summary, [role="button"], [data-cursor="interactive"]'

function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(0)

  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!supportsFinePointer || prefersReducedMotion) {
      return undefined
    }

    setEnabled(true)
    document.body.classList.add('has-custom-cursor')

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.18
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.18

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetRef.current.x}px, ${targetRef.current.y}px, 0)`
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0)`
      }

      rafRef.current = window.requestAnimationFrame(animate)
    }

    const handleMove = (event) => {
      targetRef.current.x = event.clientX
      targetRef.current.y = event.clientY

      setVisible((prev) => (prev ? prev : true))

      const isInteractive =
        event.target instanceof Element && Boolean(event.target.closest(INTERACTIVE_SELECTOR))
      setActive((prev) => (prev === isInteractive ? prev : isInteractive))
    }

    const handleMouseDown = () => setPressed(true)
    const handleMouseUp = () => setPressed(false)
    const handleMouseLeaveWindow = () => {
      setVisible(false)
      setPressed(false)
    }

    rafRef.current = window.requestAnimationFrame(animate)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseleave', handleMouseLeaveWindow)
    window.addEventListener('blur', handleMouseLeaveWindow)

    return () => {
      window.cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseleave', handleMouseLeaveWindow)
      window.removeEventListener('blur', handleMouseLeaveWindow)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <div
      className={`custom-cursor-layer ${visible ? 'is-visible' : ''} ${active ? 'is-active' : ''} ${pressed ? 'is-pressed' : ''}`}
      aria-hidden="true"
    >
      <span ref={ringRef} className="custom-cursor-ring" />
      <span ref={dotRef} className="custom-cursor-dot" />
    </div>
  )
}

export default CustomCursor
