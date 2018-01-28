import React from 'react';
import ReactDOM from 'react-dom';
import Main from './index';

const content = {
  linkedin: { link: '', aria: '' },
  twitter: { link: '', aria: '' },
  github: { link: '', aria: '' },
  email: { link: '', aria: '' },
};

it('links component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main { ...content } />, div);
  ReactDOM.unmountComponentAtNode(div);
});
