import IRoutingMode from '@/interfaces/IRoutingMode';
import IMatchedRoute from '@/interfaces/IMatchedRoute';

export default class HashRoutingMode implements IRoutingMode {
  public listenToPushState(): Boolean {
    return true;
  }

  public push(matchedRoute: IMatchedRoute): void {
    window.location.hash = matchedRoute.path;
  }

  public subscribe(cb: Function): void {}
}
