import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import routes from './routes';
import {Provider} from 'react-redux';
import { Action, createStore } from 'redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const reducer = (state: unknown, action: Action<any>): unknown => {
  return '';
}
const store = createStore(reducer);
const router = createBrowserRouter(routes);
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>);


reportWebVitals();


