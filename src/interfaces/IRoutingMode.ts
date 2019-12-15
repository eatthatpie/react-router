import IMatchedRoute from '@/interfaces/IMatchedRoute';

export default interface IRoutingMode {
  push(route: IMatchedRoute): void;
}
