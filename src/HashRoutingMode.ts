import IRoutingMode from '@/interfaces/IRoutingMode';
import IMatchedRoute from '@/interfaces/IMatchedRoute';

export default class HashRoutingMode implements IRoutingMode {
  public push(matchedRoute: IMatchedRoute): void {
    window.location.hash = matchedRoute.path;
  }
}
