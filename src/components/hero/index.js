import React from 'react';
import './index.css';

export default ({ me, tagline, summary, company }) => (
  <div className="hero">
    <div id="avatar"></div>
    <h1>{ me }</h1>
    <p className="lato tagline">{ tagline }</p>
    <p className="summary">{ summary }<a href={ company.link } className="nm">{ company.name }</a></p>
  </div>
);
