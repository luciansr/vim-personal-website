import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatusCell } from './';

storiesOf('Atoms/StatusCell', module)
  .add('Blank', () => (
    <StatusCell>NORMAL</StatusCell>
  ));
  // .add('with emoji', () => (
  //   // <StatusCell><span role="img" aria-label="so cool">😀 😎 👍 💯</span></StatusCell>
  // ));   