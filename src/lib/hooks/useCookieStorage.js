import Cookies from 'js-cookie';

/**
 * Hook for managing cookies
 * @returns {Object} Cookie management methods
 */
const useCookieStorage = () => {
  /**
   * Get cookie value by key
   * @param {string} key Cookie key
   * @returns {any} Cookie value
   */
  const getCookie = (key) => {
    const value = Cookies.get(key);
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  };

  /**
   * Check if cookie exists
   * @param {string} key Cookie key
   * @returns {boolean}
   */
  const checkCookie = (key) => {
    return Cookies.get(key) !== undefined;
  };

  /**
   * Set cookie value
   * @param {string} key Cookie key
   * @param {any} value Cookie value
   */
  const setCookie = (key, value) => {
    Cookies.set(
      key,
      typeof value === 'string' || typeof value === 'number'
        ? String(value)
        : JSON.stringify(value)
    );
  };

  /**
   * Remove cookie by key
   * @param {string} key Cookie key
   */
  const removeCookie = (key) => {
    Cookies.remove(key);
  };

  // /**
  //  * Remove shared cookie by key
  //  * @param {string} key Cookie key
  //  */
  // const removeCookieShared = (key) => {
  //   Cookies.remove(key, {
  //     path: '/',
  //     domain: CONFIG.S
  //   });
  // };

  // /**
  //  * Set shared cookie with expiration
  //  * @param {string} key Cookie key
  //  * @param {any} value Cookie value
  //  * @param {number} [numberOfDayExpired] Days until expiration
  //  */
  // const setCookieShared = (key, value, numberOfDayExpired) => {
  //   const expires = moment()
  //     .add(
  //       numberOfDayExpired || CookieStorageKey.REMEMBER_SHARED_TOKEN,
  //       'days'
  //     )
  //     .toDate();

  //   Cookies.set(
  //     key,
  //     typeof value === 'string' || typeof value === 'number'
  //       ? value
  //       : JSON.stringify(value),
  //     {
  //       expires,
  //       path: '/',
  //       domain: CookieStorageKey.SUB_DOMAIN
  //     }
  //   );
  // };

  // /**
  //  * Clear all shared cookies
  //  */
  // const clearCookiesShare = () => {
  //   const cookies = document.cookie.split('; ');
  //   cookies.forEach(cookie => {
  //     const cookieName = cookie.split('=')[0];
  //     removeCookieShared(cookieName);
  //   });
  // };

  return {
    getCookie,
    setCookie,
    removeCookie,
    checkCookie,
    // setCookieShared,
    // removeCookieShared,
    // clearCookiesShare,
  };
};

export default useCookieStorage;