import { configure } from '@storybook/react';
import 'typeface-roboto-mono';

// function loadStories() {
//   require('../stories/index.js');
//   // You can require as many stories as you need.
// }

const req = require.context('../src', true, /.story.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);