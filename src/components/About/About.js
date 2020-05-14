import React from 'react'
import './About.css'
import backgroundImage from './treelight.jpg'

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
}

function About() {
  return (
    <div className="about" style={ styles }>
      <div className="overlay"></div>
        <div className="about-text">
          <h1>About Song Circle Acoustic</h1>
          <p>The power of music is undeniable. Songs are used to motivate action, calm sorrows and inspire deep emotion. The modern day use of music is ubiquitous but music has had a place in the human experience since time immemorial. For centuries the chanting of sacred sanskrit tones, or mantras, has been practiced in the Eastern traditions to bring spiritual practitioners into states of spiritual bliss. The sound of "om" reflects the peaceful hum of all creation in the universe. Indigenous peoples throughout the globe have utilized the power of music to evoke transcendant states of communion with nature from within their people. This ancient way of showing reverence to sacred music is still practiced today. One such tradition that honors the application of sacred music for spiritual purposes is the music-based religion of the Santo Daime. Founded in Brazil by Mestre Raimundo Irineu da Serra, the Santo Daime tradition transmits its esoteric spiritual teachings through the music that its practitioners receive from transcendant states of spiritual communion with Divine energy. Here is a resource for the study of some of that music for the acoustic guitar. Enjoy!</p>
        </div>
    </div>
  )
}

export default About