'use client'

import { useRef, useEffect, ReactNode } from 'react'

interface DraggableProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Draggable({ children, className = '', style = {} }: DraggableProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startY = useRef(0)
  const currentX = useRef(0)
  const currentY = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      startX.current = e.clientX - currentX.current
      startY.current = e.clientY - currentY.current
      el.style.transition = 'none'
      el.style.zIndex = '50'
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      currentX.current = e.clientX - startX.current
      currentY.current = e.clientY - startY.current
      el.style.transform = `translate(${currentX.current}px, ${currentY.current}px)`
    }

    const onMouseUp = () => {
      if (!isDragging.current) return
      isDragging.current = false
      el.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      el.style.zIndex = ''
      // Spring back
      currentX.current = 0
      currentY.current = 0
      el.style.transform = `translate(0px, 0px)`
    }

    el.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)

    // Touch support
    const onTouchStart = (e: TouchEvent) => {
      isDragging.current = true
      startX.current = e.touches[0].clientX - currentX.current
      startY.current = e.touches[0].clientY - currentY.current
      el.style.transition = 'none'
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return
      currentX.current = e.touches[0].clientX - startX.current
      currentY.current = e.touches[0].clientY - startY.current
      el.style.transform = `translate(${currentX.current}px, ${currentY.current}px)`
    }

    const onTouchEnd = () => {
      isDragging.current = false
      el.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      currentX.current = 0
      currentY.current = 0
      el.style.transform = `translate(0px, 0px)`
    }

    el.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)

    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`draggable ${className}`}
      style={{
        position: 'absolute',
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
