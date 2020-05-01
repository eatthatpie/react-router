import ILocation from './interfaces/ILocation';
import IMatchedRoute from './interfaces/IMatchedRoute';
import IRouteConfig from './interfaces/IRouteConfig';
import IRoutingMode from '@/interfaces/IRoutingMode';
import matchRoute from '@/matchRoute';

export default class HistoryRoutingMode implements IRoutingMode {
  public constructor(
    protected _subscriber: Function = () => {},
    protected _isListeningToPopState: Boolean = true,
    protected _isListeningToPushState: Boolean = false,
    protected _state: Array<any> = [{}, {}]
  ) {}

  public getCurrentRoute(): IMatchedRoute {
    return this._state ? this._state[0] : null;
  }

  public listenToPopState(): Boolean {
    this._isListeningToPopState = true;

    return this._isListeningToPopState;
  }

  public listenToPushState(): Boolean {
    this._isListeningToPushState = true;

    return this._isListeningToPushState;
  }

  public pop(routes: Array<IRouteConfig>, location: ILocation): Boolean {
    const matchedRoute = matchRoute(routes, location);

    if (!matchedRoute) {
      throw new Error(
        `[Router] The given route is not defined in router config.`
      );
    }

    this._state[1] = Object.assign({}, this._state[0]);
    this._state[0] = Object.assign({}, matchedRoute);

    if (this._isListeningToPopState) {
      this._subscriber(this._state, 'pop');
    }

    return true;
  }

  public push(routes: Array<IRouteConfig>, location: ILocation): Boolean {
    const matchedRoute = matchRoute(routes, location);

    if (!matchedRoute) {
      throw new Error(
        `[Router] The given route is not defined in router config.`
      );
    }
  
    if (this._state && matchedRoute.path === this._state[0].path) {
      return false;
    }

    this._state[1] = Object.assign({}, this._state[0]);
    this._state[0] = Object.assign({}, matchedRoute);

    if (this._isListeningToPushState) {
      this._subscriber(this._state, 'push');
    }

    return true;
  }

  public setSubscriber(fn: Function): void {
    this._subscriber = fn;
  }
}
