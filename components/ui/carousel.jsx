"use client"

import * as React from "react"
import { RxChevronLeft, RxChevronRight } from "react-icons/rx"
import { cn } from "@/lib/utils"

const Carousel = ({ className, children, ...props }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const items = React.Children.toArray(children)
  const totalItems = items.length

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1))
  }

  return (
    <div className={cn("relative w-full", className)} {...props}>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-full">
              {item}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md transition-colors hover:bg-background"
        aria-label="Previous slide"
      >
        <RxChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md transition-colors hover:bg-background"
        aria-label="Next slide"
      >
        <RxChevronRight className="h-4 w-4" />
      </button>
      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              index === currentIndex ? "bg-primary" : "bg-muted"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const CarouselContent = ({ className, ...props }) => (
  <div className={cn("flex", className)} {...props} />
)

const CarouselItem = ({ className, ...props }) => (
  <div className={cn("min-w-0 shrink-0 grow-0 basis-full", className)} {...props} />
)

const CarouselPrevious = ({ className, ...props }) => (
  <button
    className={cn(
      "absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md transition-colors hover:bg-background",
      className
    )}
    {...props}
  >
    <RxChevronLeft className="h-4 w-4" />
  </button>
)

const CarouselNext = ({ className, ...props }) => (
  <button
    className={cn(
      "absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md transition-colors hover:bg-background",
      className
    )}
    {...props}
  >
    <RxChevronRight className="h-4 w-4" />
  </button>
)

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}


