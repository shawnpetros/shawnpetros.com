import React from 'react';
import './index.css';

export default ({ linkedin, twitter, github, email }) => (
  <div className="links">
    <a href={ linkedin } className="fa fa-linkedin"></a>
    <a href={ twitter } className="fa fa-twitter"></a>
    <a href={ github } className="fa fa-github"></a>
    <a href={ email } className="fa fa-envelope"></a>
  </div>
);
