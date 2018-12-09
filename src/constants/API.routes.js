export default {
  USERS: {
      LIST: query => query ? `/users?${query}` : `users`,
      USER: user => `/users/${user}`
  }
};
