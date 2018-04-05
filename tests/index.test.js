import React from 'react';
import ReactDOM from 'react-dom';
import Hero from '../src/components/hero';
import Links from '../src/components/links';
import Main from '../src/components/main';

const components = [ Hero, Links, Main ];

it('renders without crashing', () => {
  components.forEach((Comp) => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
