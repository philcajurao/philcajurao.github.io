import React from 'react'
import Resume from '../files/Internship Resume.pdf'

function ResumeButton() {
  return (
    <div>
        <a href={Resume} target='_blank' rel="noopener noreferrer"><button className='resumeBtn'>Resume</button></a>
    </div>
  )
}

export default ResumeButton