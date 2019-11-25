import React from 'react'

export default ({ gmr }) => (
  <div className='hero'>
    <div id='avatar' />
    <h1>Shawn Petros</h1>
    <h3 className='tagline'>philomath; father, husband, engineer</h3>
    <p className='summary'>javascript and cloud guy...currently leading frontend at <a href={gmr} className='gmr'>GMR Marketing</a></p>
  </div>
)