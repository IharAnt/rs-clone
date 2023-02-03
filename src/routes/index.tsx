import React from 'react';
import { Link } from 'react-router-dom';
import MainPage from '../pages/main';

const routes = [
  {
    path: '/',
    element: <MainPage />,
    name: 'Home',
  },
  {
    path: '/example',
    element: (
      <div>
        <h1>HelloWord</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
    name: 'Example',
  },
];

export default routes;
