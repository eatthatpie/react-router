import ILocation from '@/interfaces/ILocation';
import IRouterConfig from '@/interfaces/IRouterConfig';
import IRoutingMode from '@/interfaces/IRoutingMode';
import IRouteConfig from '@/interfaces/IRouteConfig';
import { createRoutingMode } from '@/factories';
import IMatchedRoute from './interfaces/IMatchedRoute';

export default class Router {
  protected _mode: IRoutingMode;
  public routes: Array<IRouteConfig>;

  public constructor(config?: IRouterConfig) {
    this.routes = config && config.routes ? config.routes : [];
    this._mode = config && config.mode
      ? createRoutingMode(config.mode)
      : createRoutingMode('history')

    this.push({ path: window.location.pathname });

    this._mode.listenToPushState();
    this._mode.listenToPopState();

    // Pop event is triggered by history API...
    window.addEventListener('popstate', this.pop.bind(this));

    // ...but push event is triggered programmatically.
    this.subscribe((matchedRoutes, type) => {
      if (type === 'push') {
        window.history.pushState('', '', matchedRoutes[0].matchedPath);
      }
    });
  }

  public getCurrentRoute(): IMatchedRoute {
    return this._mode.getCurrentRoute();
  }

  public pop(e: PopStateEvent): Boolean {
    const location = { path: window.location.pathname };
  
    return this._mode.pop(this.routes, location);
  }

  public push(location: ILocation): Boolean {
    return this._mode.push(this.routes, location);
  }

  public subscribe(cb: Function): void {
    this._mode.subscribe(cb);
  }
}
