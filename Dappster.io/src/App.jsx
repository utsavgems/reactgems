import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./constants/routesConstants";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Appstore from "./pages/Appstore/appstore";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path={routes.Home} element={<Home />} exact />
          <Route path="/appstore" element={<Appstore />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
