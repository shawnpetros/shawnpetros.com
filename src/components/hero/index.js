import React from 'react'

export default ({ amfam }) => (
  <div className='hero'>
    <div id='avatar' />
    <h1>Shawn Petros</h1>
    <h3 className='tagline'>philomath; father, husband, engineer</h3>
    <section className='summary'><p>javascript and cloud guy...</p><p>currently code wrangling at <a href={amfam} className='amfam'>American Family Insurance</a></p></section>
  </div>
)
