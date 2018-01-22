import React from 'react';
import './index.css';

export default ({ nm }) => (
  <div className="hero">
    <div id="avatar"></div>
    <h1>Shawn Petros</h1>
    <h3 className="lato tagline">philomath; father, husband, engineer</h3>
    <p className="summary">javascript and cloud guy...currently being awesome at <a href={ nm } className="nm">Northwestern Mutual</a></p>
  </div>
);
