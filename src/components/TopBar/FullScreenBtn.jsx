import React from 'react'
import { FaExpand } from 'react-icons/fa';
const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

export default function FullScreenBtn() {
  return (
<button onClick={toggleFullscreen}>
  <FaExpand />
</button>
  )
}
