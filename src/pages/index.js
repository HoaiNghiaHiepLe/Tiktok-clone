import HomePage from "./HomePage";
import DashBoard from "./DashBoard";

import { ROUTES } from "~/constants/routes";

export const publicPages = [
  {
    path: ROUTES.PUBLIC.HOME,
    element: HomePage,
  },
];

export const privatePages = [
  {
    path: ROUTES.PRIVATE.DASHBOARD,
    element: DashBoard,
  },
];
