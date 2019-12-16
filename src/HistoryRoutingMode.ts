import IRoutingMode from '@/interfaces/IRoutingMode';
import IMatchedRoute from './interfaces/IMatchedRoute';

export default class HistoryRoutingMode implements IRoutingMode {
  public constructor(
    protected _cbs: Array<Function> = [],
    protected _isListeningToPushState: Boolean = false,
    protected _state: Array<any> = [{}, {}]
  ) {}

  public listenToPushState(): Boolean {
    this._isListeningToPushState = true;

    return this._isListeningToPushState;
  }

  public push(matchedRoute: IMatchedRoute): void {
    window.history.pushState('', '', matchedRoute.path);

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
