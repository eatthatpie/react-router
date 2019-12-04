import IRoutingMode from '@/interfaces/IRoutingMode';
import HashRoutingMode from '@/HashRoutingMode';
import HistoryRoutingMode from '@/HistoryRoutingMode';

export function createRoutingMode(modeName: string): IRoutingMode {
  if (modeName === 'hash') {
    return new HashRoutingMode();
  } else if (modeName === 'history') {
    return new HistoryRoutingMode();
  }

  throw new Error(
    `[Router] Unknown routing mode given: ${modeName}. Available options are 'hash' and 'history' mode.`
  );
}
