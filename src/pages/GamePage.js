import React, { PureComponent } from "react";
import qs from "qs";
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
const cID = "81e488290580a291f526433741c171bf66d173f367ef06be45c65de482a3e1c0";
const CS = "5e6309f766985e8edbb41d6b451e29a0a6c2e8dbdddafe9232c58740985adbc1";
export default class Game extends PureComponent {
  render() {
    let id = qs.parse(this.props.location.search)["?code"];
    console.log(qs.parse(this.props.location.search));
    console.log(id);
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
