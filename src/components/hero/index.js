import React from 'react'

export default ({ nm }) => (
  <div className='hero'>
    <div id='avatar' />
    <h1>Shawn Petros</h1>
    <h3 className='tagline'>philomath; father, husband, engineer</h3>
    <p className='summary'>javascript and cloud guy...currently being awesome at <a href={nm} className='nm'>Northwestern Mutual</a></p>
  </div>
)
