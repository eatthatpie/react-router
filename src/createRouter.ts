import Router from '@/Router';
import IRouterConfig from './interfaces/IRouterConfig';

export default function createRouter(config: IRouterConfig) {
  return new Router(config);
}
