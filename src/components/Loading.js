import React from 'react'

function Loading() {
  return (
    <div className="text-center flex justify-center">
      <p className="text-[#777] ">Loading...&nbsp;</p>
      <p className='spin-animation'>&#128565;</p>
    </div>
  )
}

export default Loading