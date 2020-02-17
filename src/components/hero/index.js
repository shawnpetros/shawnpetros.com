import React from 'react'

export default ({ tg }) => (
  <div className='hero'>
    <div id='avatar' />
    <h1>Shawn Petros</h1>
    <h3 className='tagline'>philomath; father, husband, engineer</h3>
    <section className='summary'><p>javascript and cloud guy...</p><p>currently architecting and solutioning at <a href={tg} className='tg'>TESCHGlobal</a></p></section>
  </div>
)
