import ILocation from './ILocation';
import IMatchedRoute from '@/interfaces/IMatchedRoute';
import IRouteConfig from '@/interfaces/IRouteConfig';

export default interface IRoutingMode {
  getCurrentRoute(): IMatchedRoute;
  listenToPopState(): Boolean;
  listenToPushState(): Boolean;
  pop(routes: Array<IRouteConfig>, location: ILocation): Boolean;
  push(routes: Array<IRouteConfig>, location: ILocation): Boolean;
  subscribe(cb: Function): void;
}
