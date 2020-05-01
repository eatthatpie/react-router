import IRouteConfig from '@/interfaces/IRouteConfig';

export default interface IMatchedRoute extends IRouteConfig {
  matchedPath: string;
  meta: any;
  path: string;
  params?: any;
}
