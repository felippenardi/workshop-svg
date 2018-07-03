import React from 'react'

const styles = {
  slide: {
    padding: 15,
    height: '100vh',
    color: '#fff',
  },
  slide0: {
    background: '#6AC0FF',
  },
  slide1: {
    background: '#B3DC4A',
  },
  slide2: {
    background: '#FEA900',
  },
}

export default function Step ({
  index,
  children,
}) {
  return (
    <div style={Object.assign({}, styles.slide, styles[`slide${index}`])}>
      <div
        className="tc top-2 relative w-100"
        style={{ top: '25rem'}}>
        { children }
      </div>
    </div>
  )
}

