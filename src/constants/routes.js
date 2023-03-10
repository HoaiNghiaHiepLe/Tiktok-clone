const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  PUBLIC: {
    HOME: "/",
    FOLLOWING: "/following",
  },
  PRIVATE: {
    DASHBOARD: "/dashboard",
    PROFILE: "/:nickname",
    LIVE: "/live",
  },
};
export default ROUTES;
