"use client"

import { useEffect, useRef, ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ScrollAnimation({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible")
            }, delay)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) {
      const element = ref.current
      
      switch (direction) {
        case "up":
          element.style.transform = "translateY(30px)"
          break
        case "down":
          element.style.transform = "translateY(-30px)"
          break
        case "left":
          element.style.transform = "translateX(30px)"
          break
        case "right":
          element.style.transform = "translateX(-30px)"
          break
      }
      
      observer.observe(element)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, direction])

  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  )
}

