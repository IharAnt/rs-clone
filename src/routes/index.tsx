import React from 'react';
import AchievementsPage from '../pages/achievements';
import MainPage from '../pages/main';
import MotivatorsPage from '../pages/motivators';
import RatingPage from '../pages/rating';
import StorePage from '../pages/store';


export const NAVIGATION_ROUTES = [
  {
    path: '/achievements',
    element: <AchievementsPage />,
    name: 'Достижения',
  },
  {
    path: '/motivators',
    element: <MotivatorsPage />,
    name: 'Мотиваторы',
   },
   {
    path: '/store',
    element: <StorePage />,
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
