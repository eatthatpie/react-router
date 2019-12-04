import IRouteConfig from '@/interfaces/IRouteConfig';

export default interface IRouterConfig {
  mode?: string;
  routes?: Array<IRouteConfig>;
}
