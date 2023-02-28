import HomePage from "./HomePage";
import DashBoard from "./DashBoard";

import { ROUTES } from "~/constants/routes";

export const defaultPages = [
  {
    path: ROUTES.PUBLIC.HOME,
    element: HomePage,
  },
];

export const fluidPages = [
  {
    path: ROUTES.PRIVATE.DASHBOARD,
    element: DashBoard,
  },
];
