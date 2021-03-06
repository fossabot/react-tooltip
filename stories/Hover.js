import React from 'react';
import '../src/styles.css';
import Tooltip from '../src';

export default {
  title: 'Hover',
};

const content = 'Hello, World!';

export const Bottom = () => (
  <Tooltip bottom trigger="hover" content={content}>
    <span>hover me</span>
  </Tooltip>
);

export const Left = () => (
  <Tooltip left trigger="hover" content={content}>
    <span>hover me</span>
  </Tooltip>
);

export const Right = () => (
  <Tooltip right trigger="hover" content={content}>
    <span>hover me</span>
  </Tooltip>
);

export const Top = () => (
  <Tooltip top trigger="hover" content={content}>
    <span>hover me</span>
  </Tooltip>
);
