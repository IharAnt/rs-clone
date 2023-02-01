import { IRoute } from '../../types/router/IRoute';
import { Main } from '../pages/main/Main';
import { Motivators } from '../pages/Motivators/Motivators';

export const Routes: IRoute[] = [
  {
    path: '#/',
    getPageComponent: (path?: string) => new Main(path),
  },
  {
    path: '#/main',
    getPageComponent: (path?: string) => new Main(path),
  },
  {
    path: '#/motivators',
    getPageComponent: (path?: string) => new Motivators(path),
  },
];
