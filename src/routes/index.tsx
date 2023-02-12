import React from 'react';
import MainPage from '../pages/main';
import RatingPage from '../pages/rating';


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
    element: <RatingPage />,
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
