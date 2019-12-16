import IMatchedRoute from '@/interfaces/IMatchedRoute';

export default interface IRoutingMode {
  listenToPushState(): Boolean;
  push(route: IMatchedRoute): void;
  subscribe(cb: Function): void;
}
