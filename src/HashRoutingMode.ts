import ILocation from '@/interfaces/ILocation';
import IMatchedRoute from '@/interfaces/IMatchedRoute';
import IRouteConfig from '@/interfaces/IRouteConfig';
import IRoutingMode from '@/interfaces/IRoutingMode';

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

  public pop(routes: Array<IRouteConfig>, location: ILocation): Boolean {
    throw new Error("Method not implemented.");
  }

  public push(routes: Array<IRouteConfig>, location: ILocation): Boolean {
    throw new Error("Method not implemented.");
  }

  public setSubscriber(fn: Function): void {}
}
