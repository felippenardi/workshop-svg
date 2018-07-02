import React from 'react'

const styles = {
  dot: {
    height: '0.8rem',
    width: '0.8rem',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '50%',
    display: 'inline-block',
    margin: '0.3rem'
  },
  dotActive: {
    backgroundColor: '#fff',
  },
}

const getDotStyle = (dotIndex, currentIndex) => {
  if (dotIndex === currentIndex)  {
    return { ...styles.dot, ...styles.dotActive }
  }
  return { ...styles.dot }
}

export default function Pagination ({
  index,
  onChangeIndex,
}) {
  return (
    <div className="absolute bottom-2 left-0 right-0 tc z-999">
      <a href="#" style={getDotStyle(0, index)} onClick={() => onChangeIndex(0)}></a>
      <a href="#" style={getDotStyle(1, index)} onClick={() => onChangeIndex(1)}></a>
      <a href="#" style={getDotStyle(2, index)} onClick={() => onChangeIndex(2)}></a>
    </div>
  )
}

