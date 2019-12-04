import IRoutingMode from '@/interfaces/IRoutingMode';

export default class HashRoutingMode implements IRoutingMode {
  public push(path: string): void {
    window.location.hash = path;
  }
}
