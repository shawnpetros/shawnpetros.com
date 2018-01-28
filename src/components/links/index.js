import React from 'react';
import './index.css';

export default ({ linkedin, twitter, github, email }) => (
  <div className="links">
    <a href={ linkedin.link } className="fa fa-linkedin"><span className="hide">{ linkedin.aria }</span></a>
    <a href={ twitter.link } className="fa fa-twitter"><span className="hide">{ twitter.aria }</span></a>
    <a href={ github.link } className="fa fa-github"><span className="hide">{ github.aria }</span></a>
    <a href={ email.link } className="fa fa-envelope"><span className="hide">{ email.aria }</span></a>
  </div>
);
