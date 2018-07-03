import React from 'react'

export default function AnimationPlaceholder ({
  children
}) {
  return (
    <div
      className="absolute z-999 left-0 right-0"
      style={ { pointerEvents: 'none', top: '8rem' } }
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        { children }
      </div>
    </div>
  )
}

