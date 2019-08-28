import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../src/client/components/', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);