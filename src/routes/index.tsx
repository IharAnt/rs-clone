import React from 'react';
import MainPage from '../pages/main';

export const NAVIGATION_ROUTES = [
  {
    path: '/achievements',
    element: <MainPage />,
    name: 'Достижения',
  },
  {
    path: '/motivators',
    element: <MainPage />,
    name: 'Мотиваторы',
  },
  {
    path: '/store',
    element: <MainPage />,
    name: 'Магазин',
  },
  {
    path: '/rating',
    element: <MainPage />,
    name: 'Рейтинг',
  },
]

export const ROUTES = [
  {
    path: '/',
    element: <MainPage />,
    name: 'Home',
  },
  ...NAVIGATION_ROUTES,
];
