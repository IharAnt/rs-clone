import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './routes';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

//const router = createBrowserRouter(ROUTES);
const router = createHashRouter(ROUTES);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

reportWebVitals();
