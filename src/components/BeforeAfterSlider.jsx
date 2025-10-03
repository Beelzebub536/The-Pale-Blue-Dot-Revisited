import React, { useState, useRef } from 'react'

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeLabel, afterLabel }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef(null)

  const handleMove = (event) => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const x = event.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden cursor-col-resize"
      onMouseDown={handleMouseDown}
      onTouchMove={(e) => handleMove(e.touches[0])}
      onTouchStart={(e) => handleMove(e.touches[0])}
    >
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt="After" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-gray-400"></div>
            <div className="w-1 h-3 bg-gray-400"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-2 rounded text-sm">
        {beforeLabel}
      </div>
      <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-2 rounded text-sm">
        {afterLabel}
      </div>
    </div>
  )
}

export default BeforeAfterSlider