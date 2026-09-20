export function localizedPath(path: string, language: string) {
  if (language === "sk") {
    return path;
  }

  if (path === "/") {
    return `/${language}`;
  }

  return `/${language}${path}`;
}