import IMatchedRoute from '@/interfaces/IMatchedRoute';

export default interface IRoutingMode {
  listenToPopState(): Boolean;
  listenToPushState(): Boolean;
  pop(matchedRoute: IMatchedRoute): void;
  push(matchedRoute: IMatchedRoute): void;
  subscribe(cb: Function): void;
}
