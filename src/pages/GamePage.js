import React, { PureComponent } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "shards-react";
import legend from "../res/Legend.png";
import { GameEngine } from "react-game-engine";
import { Box, Macrophage, Site, Menu, Prog } from "../components/renderers";
import { addEnbrel, UpdateEntities, menuCheck } from "../components/systems";

const window = {
  width: 800,
  height: 600,
};
export default class Game extends PureComponent {
  render() {
    return (
      <Container
        style={{
          position: "absolute",
          top: 0,
          left: 300,
          maxWidth: this.props.isMobile ? "100%" : "200%",
          width: this.props.isMobile ? "100%" : "100%",
          paddingTop: "150px",
        }}
        className="dr-example-container"
      >
        {/* *****************************************ENGINE **************************************** */}
        <GameEngine
          style={{ ...window, backgroundColor: "#710C04" }}
          systems={[addEnbrel, UpdateEntities, menuCheck]}
          entities={{
            gameTable: { m: 1, t: 0, e: 0, window: window },
            menu: {
              stage: 0,
              title: [
                "Enbrel Simulation",
                "R.I.P your aneurysm ruptured",
                "Congrats! You lived a minute!",
              ],
              subtitle: ["Start Game", "Another Go?", "Another Go?"],
              renderer: <Menu />,
            },
            prog: {
              stage: 0,
              count: 0,
              maxCount: 6000,
              renderer: <Prog />,
            },
          }}
        ></GameEngine>
        <img src={legend} />
        <p
          style={{
            width: "800px",
            color: "black",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          In this little Enbrel Simulation, you are attempting to surpress an
          overactive immune response. Enbrel does this by binding to and
          blocking the macrophages TNF protiens which alert them to immune
          situations. The amount and severity of the macrophages response is
          proportional to the amount of TNF that has bound to the inflammation
          sites. To keep them away you need to deploy Enbrel both to prevent the
          macrophages from targeting the inflammation site as well as to keep
          their response as slow/low as possible. The goal is to survive till
          you hit 100%, If the macrophages reach the inflammation site, the site
          will inflamme faster and faster until . . .
        </p>
        {/* *****************************************ENGINE **************************************** */}
      </Container>
    );
  }
}
