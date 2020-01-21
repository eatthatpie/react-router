import IMatchedRoute from '@/interfaces/IMatchedRoute';
import IRouteConfig from '@/interfaces/IRouteConfig';
import IRoutingMode from '@/interfaces/IRoutingMode';
import HashRoutingMode from '@/HashRoutingMode';
import HistoryRoutingMode from '@/HistoryRoutingMode';

export function createMatchedRoute(
  routeConfig: IRouteConfig,
  matchedPath: string,
  params?: any
): IMatchedRoute {
  if (!params) {
    return <IMatchedRoute> routeConfig;
  }

  return <IMatchedRoute> Object.assign({}, routeConfig, { matchedPath, params });
}

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
