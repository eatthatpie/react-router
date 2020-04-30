import IRoutingMode from '@/interfaces/IRoutingMode';
import IMatchedRoute from '@/interfaces/IMatchedRoute';

export default class HashRoutingMode implements IRoutingMode {
  public getCurrentRoute(): IMatchedRoute {
    throw new Error("Method not implemented.");
  }

  public listenToPopState(): Boolean {
    throw new Error("Method not implemented.");
  }

  public listenToPushState(): Boolean {
    return true;
  }

  public pop(matchedRoute: IMatchedRoute): void {
    throw new Error("Method not implemented.");
  }

  public push(matchedRoute: IMatchedRoute): void {
    window.location.hash = matchedRoute.path;
  }

  public subscribe(cb: Function): void {}
}
