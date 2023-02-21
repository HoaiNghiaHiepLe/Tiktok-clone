import { Routes, Route, useLocation } from "react-router-dom";

import PublicLayout from "./layouts/Public";
import PrivateLayout from "./layouts/Private";

import { publicPages, privatePages } from "./pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PublicLayout />}>
          {publicPages.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              ></Route>
            );
          })}
        </Route>
        <Route element={<PrivateLayout />}>
          {privatePages.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              ></Route>
            );
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
