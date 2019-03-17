import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatusCell, StatusCellModifiers } from './';

storiesOf('Atoms/StatusCell', module)
  .add('Default', () => (
    <StatusCell>NORMAL</StatusCell>
  ))
  .add('Black', () => (
    <StatusCell modifiers={StatusCellModifiers.Black}>NORMAL</StatusCell>
  ))
  .add('Gray', () => (
    <StatusCell modifiers={StatusCellModifiers.Gray}>NORMAL</StatusCell>
  ))
  .add('Neon Green', () => (
    <StatusCell modifiers={StatusCellModifiers.NeonGreen}>NORMAL</StatusCell>
  ))
  .add('Yellow', () => (
    <StatusCell modifiers={StatusCellModifiers.Yellow}>INSERT</StatusCell>
  ))
  .add('Orange', () => (
    <StatusCell modifiers={StatusCellModifiers.Orange}>REPLACE</StatusCell>
  ))
  .add('Blue', () => (
    <StatusCell modifiers={StatusCellModifiers.Blue}>VISUAL</StatusCell>
  ))
