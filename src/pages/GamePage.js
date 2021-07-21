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
      ></Container>
    );
  }
}
