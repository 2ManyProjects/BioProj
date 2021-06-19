import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import GamePage from "../pages/GamePage";
import Citation from "../pages/CitationPage";
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
        path="/game"
        render={(props) => <GamePage {...props} isMobile={isMobile} />}
      />
      <Route
        exact
        path="/citation"
        render={(props) => <Citation {...props} />}
      />

      <Navbar
        style={{
          marginBottom: 75,
          position: "absolute",
          top: "1%",
          width: "100%",
          display: "flex",
          "flex-direction": "row",
          "justify-content": "space-around",
          background: "#96D559",
          // left: "50%",
        }}
        type="dark"
        theme=""
        expand="md"
      >
        <div>
          <Link
            to="/"
            style={{
              justifyContent: "flex-start",
            }}
          >
            {" "}
            <text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Home
            </text>
          </Link>
        </div>
        <div>
          <Link
            to="/game"
            style={{
              justifyContent: "flex-start",
            }}
          >
            <text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              GamePage
            </text>
          </Link>
        </div>
        <div>
          <Link
            to="/citation"
            style={{
              justifyContent: "flex-start",
            }}
          >
            <text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Citations
            </text>
          </Link>
        </div>
      </Navbar>
    </Router>
  );
}

export default Navigator;
