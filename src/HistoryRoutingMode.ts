import IRoutingMode from '@/interfaces/IRoutingMode';
import IMatchedRoute from './interfaces/IMatchedRoute';

export default class HistoryRoutingMode implements IRoutingMode {
  public push(matchedRoute: IMatchedRoute): void {
    window.history.pushState('', '', matchedRoute.path);
  }
}
