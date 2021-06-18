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

import { SocialIcon } from "react-social-icons";
import bottomBanner from "../res/landing-page/call-to-action-bg.jpg";

function BottomHeader(props) {
  let homePage = false;
  let width = "111%";

  if (props.homePage && props.homePage === "HOMEPAGE") {
    homePage = true;
    if (props.isMobile) width = "130%";
  }

  return (
    <Container>
      <div
        style={{
          position: "absolute",
          display: "block",
          left: 0,
          backgroundColor: "#2c3f58",
          maxWidth: props.isMobile ? "112%" : "220%",
          width: homePage ? width : "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: props.isMobile ? "15vw" : "20vw",
            background: "#2c3f58",
            zIndex: -1,
          }}
        ></div>
        <Image
          style={{
            width: "110%",
            alignSelf: "center",
            top: "-300px",
            zIndex: 0,
          }}
          fluid
          src={bottomBanner}
        ></Image>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              // width: props.isMobile ? "100%" : "40vw",
              top: props.isMobile ? "20vw" : "55%",
              // left: props.isMobile ? "20vw" : "35vw",
              alignItems: "center",
            }}
          >
            <h5
              style={{
                alignSelf: "center",
                fontWeight: props.isMobile ? "5vw" : "8vw",
                fontSize: props.isMobile ? "5vw" : "3vw",
                marginBottom: props.isMobile ? "2vw" : "1.5vw",
                color: "#ffffff",
              }}
            >
              Protein Engineering Quiz
            </h5>

            <Button
              style={{
                width: "100%",
                height: props.isMobile ? "9vw" : "6vw",
                fontSize: props.isMobile ? "5vw" : "3vw",
                alignItems: "center",
              }}
              squared
              theme="success"
              onClick={() => {
                window.location =
                  "https://sites.google.com/view/biol-111-protein-quiz/home?authuser=0";
              }}
            >
              Check out our quiz
            </Button>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: props.isMobile ? "25vw" : "30vw",
              background: "#2c3f58",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              //   alignItems: "center",
              //   left: "40%",
            }}
          >
            <h5
              style={{
                position: "absolute",
                top: props.isMobile ? "10vw" : "55%",
                width: "100%",
                justifyContent: "center",
                fontWeight: props.isMobile ? "5vw" : "8vw",
                fontSize: props.isMobile ? "5vw" : "3vw",
                color: "#ffffff",
              }}
            >
              Cardboard Box
            </h5>
            <div
              style={{
                width: "100%",
                display: "flex",
                // flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: props.isMobile ? "15vw" : "65%",
                  // left: props.isMobile ? "20vw" : "35vw",
                  height: props.isMobile ? "5vw" : "3vw",
                  display: "flex",
                  flexDirection: "row",
                  // backgroundColor: "#ffffff",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <SocialIcon
                  style={{
                    width: props.isMobile ? "5vw" : "3vw",
                    height: props.isMobile ? "5vw" : "3vw",
                  }}
                  network="twitter"
                  bgColor="#2c3f58"
                  fgColor="#ffffff"
                  url="http://twitter.com"
                />
                <SocialIcon
                  style={{
                    width: props.isMobile ? "5vw" : "3vw",
                    height: props.isMobile ? "5vw" : "3vw",
                  }}
                  network="facebook"
                  bgColor="#2c3f58"
                  fgColor="#ffffff"
                  url="http://facebook.com"
                />
                <SocialIcon
                  style={{
                    width: props.isMobile ? "5vw" : "3vw",
                    height: props.isMobile ? "5vw" : "3vw",
                  }}
                  network="reddit"
                  bgColor="#2c3f58"
                  fgColor="#ffffff"
                  url="http://reddit.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default BottomHeader;
