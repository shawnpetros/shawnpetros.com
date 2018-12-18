import React from 'react'
import ScrollspyNav from 'react-scrollspy-nav'
import './index.css'

export default ({ nm }) => (
  <div className='container'>
    <div className='header'>
      <ScrollspyNav
        scrollTargetIds={['skills', 'projects', 'experience']}
        activeNavClass='is-active'
        scrollDuration='1000'
        headerBackground='true'
      >
        <ul>
          <li><a href='#skills'>SKILLS</a></li>
          <li><a href='#projects'>PROJECTS</a></li>
          <li><a href='#experience'>EXPERIENCE</a></li>
        </ul>
      </ScrollspyNav>
    </div>
    <div className='wrapper'>
      <div>
        <div className='section static hero'>
          <div className='text-wrap'>
            <svg viewBox='0 0 500 80'>
              <pattern
                id='p-img'
                viewBox='0 0 300 100'
                patternUnits='userSpaceOnUse'
                width='200%' height='200%'
                x='-50%' y='-70%'>
                <image href='https://media.giphy.com/media/3orif4tsbdtVDGxR72/giphy.gif' width='300' height='150' />
              </pattern>
              <text textAnchor='middle'
                x='50%'
                y='50%'
                dy='.35em'
                className='img-layer'>
          Shawn
              </text>
              <linearGradient id='gr-overlay' x1='0' y1='0' x2='100%' y2='100%'>
                <stop stopColor='hsla(180, 50%, 55%, 0.3)' offset='10%' />
                <stop stopColor='hsla(220, 80%, 50%, 0.3)' offset='40%' />
                <stop stopColor='hsla(0, 65%, 50%, 0.3)' offset='60%' />
              </linearGradient>
              <text textAnchor='middle'
                x='50%'
                y='50%'
                dy='.35em'
                className='gradient-layer'>
          Shawn
              </text>
            </svg>
          </div>
        </div>
        <div className='section parallax bg1' id='skills'>
          <h1>Petros</h1>
        </div>
        <div className='section static' id='projects'>
          <h1>Petros</h1>
        </div>
        <div className='section static' id='experience'>
          <h1>Petros</h1>
        </div>
      </div>
    </div>
  </div>
)
