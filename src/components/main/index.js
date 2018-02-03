import React from 'react';
import Hero from '../hero';
import Background from '../background';
import Work from '../work';
import Links from '../links';
import './index.css';
import Constants from '../../constants';

const { hero } = Constants;

export default () => (
  <main>
    <Hero { ...hero } />
    <Background />
    <Work />
  </main>
);
