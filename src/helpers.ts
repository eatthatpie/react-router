export function ensureOpeningSlash(str: string) {
  return str[0] !== '/' ? '/' + str : str;
}
