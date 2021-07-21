import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import GamePage from "../pages/GamePage";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar } from "shards-react";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

function Navigator(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const size = useWindowSize();
  const classes = useStyles();
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
