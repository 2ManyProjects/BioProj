import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {
  Alert,
  Form,
  FormInput,
  FormGroup,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "shards-react";
import { Image } from "react-bootstrap";

function ImageText(props) {
  let btn = true;
  if (props.btn && props.btn === "none") btn = false;
  return (
    <Container className="dr-example-container">
      <div
        style={{
          display: "flex",
          flexDirection: props.isMobile ? "column" : "row",
          width: "90%",
        }}
      >
        {props.flip && props.isMobile && (
          <Image
            style={{
              // position: "absolute",
              // top: "55px",
              // left: "200px",
              // width: "800px",
              // height: "2px",
              // background: "#2c3f58",
              marginBottom: "20px",
              width: props.isMobile ? "90%" : "100%",
            }}
            fluid
            src={props.imageSrc}
          />
        )}
        {props.flip && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: props.isMobile ? "-15vw" : "100px",
              width: props.isMobile ? "140%" : "150%",
              paddingBottom: props.isMobile ? "5em" : "2em",
              //   marginRight: "200px",
              //   marginRight: "500px",
              //   width: "100%",
            }}
          >
            <div
              style={{
                background: "rgb(216,232,230)",
                paddingLeft: "2em",
                paddingBottom: "2em",
                paddingTop: "1em",
              }}
            >
              <h3
                style={{
                  display: "block",
                  flexDirection: "row",
                  //   justifyContent: "flex-start",
                  color: "#2c4058",
                  fontWeight: "600",
                  fontSize: "30px",
                  paddingBottom: "1em",
                }}
              >
                {props.title}
              </h3>

              <div
                style={{
                  display: "block",
                  justifyContent: "flex-start",
                  left: "400px",
                  width: props.isMobile ? "90%" : "170%",
                  paddingRight: props.isMobile ? "0%" : "300px",
                  paddingBottom: "2em",
                }}
              >
                {props.text}
              </div>

              {btn && (
                <Link to={props.link}>
                  <Button outline theme="secondary">
                    {props.btnText}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
        {(!props.flip || !props.isMobile) && (
          <Image
            style={{
              // position: "absolute",
              // top: "55px",
              // left: "200px",
              // width: "800px",
              // height: "2px",
              // background: "#2c3f58",
              marginBottom: "20px",
              width: props.isMobile ? (props.text2 ? "150%" : "100%") : "100%",
            }}
            fluid
            src={props.imageSrc}
          />
        )}

        {!props.flip && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: props.isMobile ? "0vw" : "50px",
              paddingBottom: props.isMobile ? "5em" : "2em",
              width: props.isMobile ? (props.text2 ? "145%" : "140%") : "150%",
            }}
          >
            <div
              style={{
                background: "rgb(216,232,230)",
                paddingLeft: "2em",
                paddingBottom: "2em",
                width: props.isMobile ? "90%" : props.text2 ? "350%" : "250%",
                paddingTop: "1em",
              }}
            >
              <h3
                style={{
                  display: "block",
                  flexDirection: "row",
                  //   justifyContent: "flex-start",
                  color: "#2c4058",
                  fontWeight: "600",
                  fontSize: "30px",
                  paddingBottom: "1em",
                }}
              >
                {props.title}
              </h3>

              <p
                style={{
                  flexWrap: "wrap",
                  wordWrap: "break-word",
                  justifyContent: "flex-start",
                  width: "90%",
                  paddingBottom: "2em",
                }}
              >
                {props.text}
              </p>

              {btn && (
                <Link to={props.link}>
                  <Button outline theme="secondary">
                    {props.btnText}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default ImageText;

/*

function ImageText(props) {
  return (
    <Container className="dr-example-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            // position: "absolute",
            // top: "55px",
            // left: "200px",
            // width: "800px",
            // height: "2px",
            // background: "#2c3f58",
            marginBottom: "60px",
            width: "100%",
          }}
          fluid
          src={props.imageSrc}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "50px",
          }}
        >
          <h3
            style={{
              display: "block",
              flexDirection: "row",
              //   justifyContent: "flex-start",
              color: "#2c4058",
              fontWeight: "600",
              fontSize: "30px",
            }}
          >
            {props.title}
          </h3>

          <div
            style={{
              display: "block",
              justifyContent: "flex-start",
            }}
          >
            {props.text}
          </div>

          <Button outline theme="secondary">
            {props.btnText}
          </Button>
        </div>
      </div>
    </Container>
  );
}
*/
