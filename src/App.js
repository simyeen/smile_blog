import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import WritePage from "./Pages/WritePage";
import AdminPage from "./Pages/AdminPage";

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={WritePage} path="/write" />
      <Route component={AdminPage} path="/admin" />
    </>
  );
}

export default App;
