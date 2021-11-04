import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import WritePage from "./Pages/WritePage";
import AdminPage from "./Pages/AdminPage";
import PostViewPage from "./Pages/PostViewPage";

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={WritePage} path={["/write/:postId", "/write"]} />
      <Route component={AdminPage} path="/admin" />
      <Route component={PostViewPage} path="/postView/:postId" />
    </>
  );
}

export default App;
