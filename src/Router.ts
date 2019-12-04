import HashRoutingMode from '@/HashRoutingMode';
import HistoryRoutingMode from '@/HistoryRoutingMode';
import ILocation from '@/interfaces/ILocation';
import IRouterConfig from '@/interfaces/IRouterConfig';
import IRoutingMode from '@/interfaces/IRoutingMode';
import IRouteConfig from '@/interfaces/IRouteConfig';
import matchRoute from '@/matchRoute';

export default class Router {
  protected _mode: IRoutingMode;
  protected _routes: Array<IRouteConfig>;

  public constructor(config?: IRouterConfig) {
    this._routes = config && config.routes ? config.routes : [];
    this._mode = config && config.mode
      ? this._createRoutingMode(config.mode)
      : this._createRoutingMode('hash')
  }

  public push(location: ILocation): Boolean {
    const matchedRoute = matchRoute(this._routes, location);
  
    this._mode.push(matchedRoute.path);

    return true;
  }

  protected _createRoutingMode(modeName: string): IRoutingMode {
    if (modeName === 'hash') {
      return new HashRoutingMode();
    } else if (modeName === 'history') {
      return new HistoryRoutingMode();
    }

    throw new Error(
      `[Router] Unknown routing mode given: ${modeName}. Available options are 'hash' and 'history' mode.`
    );
  }
}
