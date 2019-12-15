import ILocation from '@/interfaces/ILocation';
import IRouterConfig from '@/interfaces/IRouterConfig';
import IRoutingMode from '@/interfaces/IRoutingMode';
import IRouteConfig from '@/interfaces/IRouteConfig';
import matchRoute from '@/matchRoute';
import { createRoutingMode } from '@/factories';

export default class Router {
  protected _mode: IRoutingMode;
  protected _routes: Array<IRouteConfig>;

  public constructor(config?: IRouterConfig) {
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
  
    // @TODO: should only push matchedRoute
    this._mode.push(matchedRoute.path);

    return true;
  }

  public modeState(): any {
    return {
      get() {
        return this._mode.state;
      }
    };
  }
}
