import React from 'react'
import Resume from '../files/Internship Resume.pdf'

function ResumeButton() {
  return (
    <div>
        <button className='resumeBtn'><a href={Resume} target='_blank' rel="noopener noreferrer">Resume</a></button>
    </div>
  )
}

export default ResumeButton