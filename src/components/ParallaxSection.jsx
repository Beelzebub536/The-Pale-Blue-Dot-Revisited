import React from 'react'

const ParallaxSection = ({ children, backgroundImage, speed = 0.5 }) => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transform: `scale(${1 + speed * 0.1})`
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default ParallaxSection