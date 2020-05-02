import ILocation from '@/interfaces/ILocation';
import IMatchedRoute from './interfaces/IMatchedRoute';
import IRouterConfig from '@/interfaces/IRouterConfig';
import IRoutingMode from '@/interfaces/IRoutingMode';
import IRouteConfig from '@/interfaces/IRouteConfig';
import { createRoutingMode } from '@/factories';
import { MiddlewareContainer, createMiddlewareContainer } from '@/middleware';

export default class Router {
  protected _cbs: Array<Function>;
  protected _matches: Array<any>;
  protected _middlewareContainer: MiddlewareContainer;
  protected _mode: IRoutingMode;
  public routes: Array<IRouteConfig>;

  public constructor(config?: IRouterConfig) {
    this._cbs = [];
    this._matches = [{}, {}];
    this._middlewareContainer = createMiddlewareContainer()
    this.routes = config && config.routes ? config.routes : [];
    this._mode = config && config.mode
      ? createRoutingMode(config.mode)
      : createRoutingMode('history')

    this._mode.listenToPushState();
    this._mode.listenToPopState();

    this.middleware().registerMiddlewareAfter(({ from, to, type }) => {
      this._matches[0] = to;
      this._matches[1] = from;

      this._cbs.forEach(cb => { cb(from, to); });

      if (type === 'push') {
        window.history.pushState('', '', to.matchedPath);
      }
    });

    // Pop event is triggered by history API...
    window.addEventListener('popstate', this.pop.bind(this));

    // ...but push event is triggered programmatically.
    this._mode.setSubscriber((matchedRoute, type) => {
      if (this._matches.length && matchedRoute.path === this._matches[0].path) {
        return;
      }

      this.middleware().run({
        from: this._matches.length ? this._matches[0] : null,
        to: matchedRoute,
        type
      });
    });

    this.push({ path: window.location.pathname });
  }

  public getCurrentRoute(): IMatchedRoute {
    return this._matches ? this._matches[0] : null;
  }

  public middleware(): MiddlewareContainer {
    return this._middlewareContainer;
  }

  public pop(e: PopStateEvent): Boolean {
    const location = { path: window.location.pathname };
  
    return this._mode.pop(this.routes, location);
  }

  public push(location: ILocation): Boolean {
    return this._mode.push(this.routes, location);
  }

  public subscribe(cb: Function): void {
    this._cbs.push(cb);
  }
}
