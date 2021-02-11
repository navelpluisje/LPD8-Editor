export const getCookies = (): Record<string, string> => {
  let cookies = {};

  if (typeof document !== 'undefined') {
    cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');

      return {
        ...acc,
        [key.trim()]: value.trim(),
      }
    }, {});
  }
  return cookies;
}