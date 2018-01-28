import React from 'react';
import ReactDOM from 'react-dom';
import Main from './index';

const content = {
  me: '',
  tagline: '',
  summary: '',
  company: {
    link: '',
    name: '',
  },
};

it('hero renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main { ...content } />, div);
  ReactDOM.unmountComponentAtNode(div);
});
