import HomePage from "./HomePage";
import Following from "./Following";
import Profile from "./Profile";
import DashBoard from "./DashBoard";
import Live from "./Live";

import { ROUTES } from "~/constants";

export const defaultPages = [
  {
    path: ROUTES.PUBLIC.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.PUBLIC.FOLLOWING,
    element: <Following />,
  },
];

export const fluidPages = [
  {
    path: ROUTES.PRIVATE.DASHBOARD,
    element: <DashBoard />,
  },
  {
    path: ROUTES.PRIVATE.PROFILE,
    element: <Profile />,
  },
  {
    path: ROUTES.PRIVATE.LIVE,
    element: <Live />,
  },
];
