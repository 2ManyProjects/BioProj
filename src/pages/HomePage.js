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
export default class Home extends PureComponent {
  render() {
    return (
      <Container
        style={{
          position: "absolute",
          top: 0,
          left: -20,
          maxWidth: this.props.isMobile ? "100%" : "200%",
          width: this.props.isMobile ? "100%" : "100%",
          justifyContent: "center",
          alignSelf: "center",
        }}
        className="dr-example-container"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        ></div>
      </Container>
    );
  }
}
