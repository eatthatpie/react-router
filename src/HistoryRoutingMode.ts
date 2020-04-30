import IRoutingMode from '@/interfaces/IRoutingMode';
import IMatchedRoute from './interfaces/IMatchedRoute';

export default class HistoryRoutingMode implements IRoutingMode {
  public constructor(
    protected _cbs: Array<Function> = [],
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

  public pop(matchedRoute: IMatchedRoute): void {
    this._state[1] = Object.assign({}, this._state[0]);
    this._state[0] = Object.assign({}, matchedRoute);

    if (this._isListeningToPopState) {
      this._cbs.forEach(cb => { cb(this._state); });
    }
  }

  public push(matchedRoute: IMatchedRoute): void {
    if (this._state && matchedRoute.path === this._state[0].path) {
      return;
    }

    window.history.pushState('', '', matchedRoute.matchedPath);

    this._state[1] = Object.assign({}, this._state[0]);
    this._state[0] = Object.assign({}, matchedRoute);

    if (this._isListeningToPushState) {
      this._cbs.forEach(cb => { cb(this._state); });
    }
  }

  public subscribe(cb: Function): void {
    this._cbs.push(cb);
  }
}
