import IRouteConfig from '@/interfaces/IRouteConfig';

export default interface IMatchedRoute extends IRouteConfig {
  path: string;
  params?: any;
}
