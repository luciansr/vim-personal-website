import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatusBar } from './';

storiesOf('Molecules/StatusBar', module)
  .add('Default', () => (
    <StatusBar></StatusBar>
  ))
