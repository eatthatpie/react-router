import IRoutingMode from '@/interfaces/IRoutingMode';

export default class HistoryRoutingMode implements IRoutingMode {
  public push(path: string): void {
    window.history.pushState('', '', path);
  }
}
