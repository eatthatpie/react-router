import ILocation from '@/interfaces/ILocation';
import IRouterConfig from '@/interfaces/IRouterConfig';
import IRoutingMode from '@/interfaces/IRoutingMode';
import IRouteConfig from '@/interfaces/IRouteConfig';
import matchRoute from '@/matchRoute';
import { createRoutingMode } from '@/factories';

export default class Router {
  protected _mode: IRoutingMode;
  public _routes: Array<IRouteConfig>;

  public constructor(config?: IRouterConfig) {
    this._routes = config && config.routes ? config.routes : [];
    this._mode = config && config.mode
      ? createRoutingMode(config.mode)
      : createRoutingMode('history')

    this._mode.listenToPushState();
    this._mode.listenToPopState();

    window.addEventListener('popstate', this.pop.bind(this));
  }

  public pop(e: PopStateEvent): Boolean {
    const location = { path: window.location.pathname };

    const matchedRoute = matchRoute(this._routes, location);

    if (!matchedRoute) {
      throw new Error(
        `[Router] The given route is not defined in router config.`
      );
    }
  
    this._mode.pop(matchedRoute);

    return true;
  }

  public push(location: ILocation): Boolean {
    const matchedRoute = matchRoute(this._routes, location);

    if (!matchedRoute) {
      throw new Error(
        `[Router] The given route is not defined in router config.`
      );
    }
  
    this._mode.push(matchedRoute);

    return true;
  }

  public subscribe(cb: Function) {
    this._mode.subscribe(cb);
  }
}
