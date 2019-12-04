import ILocation from '@/interfaces/ILocation';
import IRouteConfig from '@/interfaces/IRouteConfig';
import { match, Path } from 'path-to-regexp';
import { ensureOpeningSlash } from '@/helpers';

export default function matchRoute(
  routes: Array<IRouteConfig>,
  location: ILocation
): IRouteConfig {
  if (location.path && location.name) {
    throw new Error(
      `[matchRoute] Properties 'path' and 'name' cannot be given at the same time.`
    );
  }

  if (location.path) {
    const matcher = match(<Path> ensureOpeningSlash(location.path));

    return (
      <IRouteConfig> routes.find(
        item => matcher(ensureOpeningSlash(item.path))
      ) || false
    );
  }

  return (
    <IRouteConfig> routes.find(item => item.name === location.name) || false
  );
}
