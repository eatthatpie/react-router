import ILocation from '@/interfaces/ILocation';
import IMatchedRoute from '@/interfaces/IMatchedRoute';
import IRouteConfig from '@/interfaces/IRouteConfig';
import { match, Path } from 'path-to-regexp';
import { ensureOpeningSlash } from '@/helpers';
import { createMatchedRoute } from '@/factories';

export default function matchRoute(
  routes: Array<IRouteConfig>,
  location: ILocation
): IMatchedRoute | boolean {
  if (location.path && location.name) {
    throw new Error(
      `[matchRoute] Properties 'path' and 'name' cannot be given at the same time.`
    );
  }

  if (!location.path) {
    return (
      <IMatchedRoute> routes.find(item => item.name === location.name) || false
    );
  }

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].path === '*') {
      return createMatchedRoute(routes[i]);
    }
  
    const matcher = match(<Path> ensureOpeningSlash(routes[i].path));

    const result = matcher(ensureOpeningSlash(location.path))

    if (!!result) {
      return createMatchedRoute(routes[i], result.params); 
    }
  }

  return false;
}
