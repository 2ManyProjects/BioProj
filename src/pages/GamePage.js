import React, { PureComponent } from "react";
import qs from "qs";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Client } from "@freshbooks/api";
import axios from "axios";
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
import ClientOAuth2 from "client-oauth2";

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
    const client = new Client(id, {
      clientId: cID,
    });
    async function test() {
      // var freshbooksAuth = new ClientOAuth2({
      //   client_id: cID,
      //   client_secret: CS,
      //   accessTokenUri: 'https://github.com/login/oauth/access_token',
      //   authorizationUri: 'https://github.com/login/oauth/authorize',
      //   redirectUri: 'http://example.com/auth/github/callback',
      //   scopes: ['notifications', 'gist']
      // })
      axios
        .post(
          `https://api.freshbooks.com/auth/oauth/token`,
          {
            grant_type: "authorization_code",
            code: id,
            client_id: cID,
            client_secret: CS,
            redirect_uri: "https://peaceful-hodgkin-9c8bb0.netlify.app/test",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(JSON.stringify(res, null, 4));
        })
        .catch((res) => {
          console.log(JSON.stringify(res, null, 4));
        });
      // try {
      //   // Get the current user
      //   const { data } = await client.users.me();

      //   console.log(`Hello, ${data.id}`);
      // } catch ({ code, message }) {
      //   // Handle error if API call failed
      //   console.error(`Error fetching user: ${code} - ${message}`);
      // }
    }

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
        <button onClick={test}> test </button>
      </Container>
    );
  }
}
