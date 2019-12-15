import ILocation from '@/interfaces/ILocation';
import IMatchedRoute from '@/interfaces/IMatchedRoute';
import IRouteConfig from '@/interfaces/IRouteConfig';
import { match, Path } from 'path-to-regexp';
import { ensureOpeningSlash } from '@/helpers';
import { createMatchedRoute } from '@/factories';

export default function matchRoute(
  routes: Array<IRouteConfig>,
  location: ILocation
): IMatchedRoute {
  if (location.path && location.name) {
    throw new Error(
      `[matchRoute] Properties 'path' and 'name' cannot be given at the same time.`
    );
  }

  if (!location.path) {
    return (
      <IRouteConfig> routes.find(item => item.name === location.name) || false
    );
  }

  const matcher = match(<Path> ensureOpeningSlash(location.path));

  const matchedRouteConfig = <IRouteConfig> routes.find(
    item => matcher(ensureOpeningSlash(item.path))
  ) || false;

  return createMatchedRoute(matchedRouteConfig) || false;
}
