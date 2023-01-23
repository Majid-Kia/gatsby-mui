import React from 'react';
import TopLayout from './TopLayout';
import './global.css';
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

export const wrapRootElement = ({ element }) => {
  return (
    <TopLayout>
      <HelmetProvider context={helmetContext}>{element}</HelmetProvider>
    </TopLayout>
  );
};
