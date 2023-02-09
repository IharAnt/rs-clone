import React from 'react';
import { Link } from 'react-router-dom';
import MainPage from '../pages/main';
import MotivatorsPage from '../pages/motivators';

const routes = [
  {
    path: '/',
    element: <MainPage />,
    name: 'Home',
  },
  {
    path: '/motivators',
    element: <MotivatorsPage />,
    name: 'motivators',
  },
];

export default routes;
