import { Routes, Route, useLocation } from "react-router-dom";
import DefaultLayout from "./layouts/Default";
import FluidLayout from "./layouts/Fluid";

import { defaultPages, fluidPages } from "./pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<DefaultLayout />}>
          {defaultPages.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Route>
        <Route element={<FluidLayout />}>
          {fluidPages.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
