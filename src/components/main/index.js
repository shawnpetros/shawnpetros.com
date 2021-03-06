import React from 'react'
import Hero from '../hero'
import Links from '../links'
import Constants from '../../constants'

const { links } = Constants

export default () => (
  <main>
    <Hero {...links} />
    <Links {...links} />
  </main>
)
