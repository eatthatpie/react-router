import ILocation from '@/interfaces/ILocation';
import IRouterConfig from '@/interfaces/IRouterConfig';
import IRoutingMode from '@/interfaces/IRoutingMode';
import IRouteConfig from '@/interfaces/IRouteConfig';
import matchRoute from '@/matchRoute';
import { createRoutingMode } from '@/factories';

export default class Router {
  protected _mode: IRoutingMode;
  public _routes: Array<IRouteConfig>;
  protected _cbs: Array<Function>;

  public constructor(config?: IRouterConfig) {
    this._cbs = [];
    this._routes = config && config.routes ? config.routes : [];
    this._mode = config && config.mode
      ? createRoutingMode(config.mode)
      : createRoutingMode('hash')

    // this._mode.listenToPushState();
    // this._mode.listenToPopState();
  }

  public push(location: ILocation): Boolean {
    const matchedRoute = matchRoute(this._routes, location);

    if (!matchedRoute) {
      throw new Error(
        `[Router] The given route is not defined in router config.`
      );
    }
  
    this._mode.push(matchedRoute);

    this._cbs.forEach(cb => { cb(matchedRoute.component); });

    return true;
  }

  public subscribe(cb: Function) {
    this._cbs.push(cb);
  }
}
