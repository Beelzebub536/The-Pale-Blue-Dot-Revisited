import React, { useState, useRef } from 'react'

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = (clientX) => {
    const container = containerRef.current
    if (!container) return
    
    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseMove = (event) => {
    if (isDragging) {
      handleMove(event.clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (event) => {
    event.preventDefault()
    handleMove(event.touches[0].clientX)
  }

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden cursor-col-resize select-none"
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchStart={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* After Image (bottom layer) */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt="After" 
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      
      {/* Before Image (top layer with clip) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>
      
      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex space-x-0.5">
            <div className="w-0.5 h-4 bg-gray-600"></div>
            <div className="w-0.5 h-4 bg-gray-600"></div>
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded text-sm font-medium pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded text-sm font-medium pointer-events-none">
        {afterLabel}
      </div>
    </div>
  )
}

export default BeforeAfterSlider;