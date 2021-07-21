import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import GamePage from "../pages/GamePage";
import { isMobile } from "react-device-detect";

function Navigator(props) {
  return (
    <Router>
      <div
        style={{
          width: "100%",
          height: "1000px",
          background: "#E2F2F0",
        }}
      ></div>
      <Route
        exact
        path="/"
        render={(props) => <Home {...props} isMobile={isMobile} />}
      />
      <Route
        exact
        path="/test"
        render={(props) => <GamePage {...props} isMobile={isMobile} />}
      />
    </Router>
  );
}

export default Navigator;
