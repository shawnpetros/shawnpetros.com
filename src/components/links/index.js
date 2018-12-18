import React from 'react'
import './index.css'

export default ({ linkedin, twitter, github, email }) => (
  <div className='links'>
    <a href={linkedin} className='fa fa-linkedin'><span className='hide'>LinkedIn</span></a>
    <a href={twitter} className='fa fa-twitter'><span className='hide'>Twitter</span></a>
    <a href={github} className='fa fa-github'><span className='hide'>GitHub</span></a>
    <a href={email} className='fa fa-envelope'><span className='hide'>Email</span></a>
  </div>
)
