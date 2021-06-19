import React, { PureComponent } from "react";
import Cell from "../res/white-blood-cell.png";
import CellAngry from "../res/white-blood-cell-angry.png";
import Pill from "../res/pill.png";
import TNFDeactive from "../res/TNF-deactive.png";
import TNFpic from "../res/TNF.png";
import { Fireworks } from "fireworks/lib/react";

class Menu extends PureComponent {
  render() {
    let fxProps = {
      count: 3,
      interval: 500,
      colors: ["#cc3333", "#cb3333", "#cc6666"],
      calc: (props, i) => ({
        ...props,
        position: "absolute",
        particleTimeout: 2000,
        x: Math.random(window.innerWidth / 2) + window.innerWidth / 4,
        y: Math.random(window.innerWidth / 2) + window.innerWidth / 4,
        colors: ["#cc3333", "#4CAF50", "#81C784"],
      }),
    };
    return (
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "pink",
        }}
      >
        <div>
          {" "}
          <h1 style={{ color: "pink" }}>
            {" "}
            {this.props.title[this.props.stage]}
          </h1>
        </div>
        <div>
          {" "}
          <h3 style={{ color: "yellow" }}>
            {" "}
            {this.props.subtitle[this.props.stage]}
          </h3>
        </div>
        {this.props.stage === 2 && <Fireworks {...fxProps} />}
      </div>
    );
  }
}

class Prog extends PureComponent {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          display: this.props.stage === 1.5 ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          color: "pink",
        }}
      >
        <div>
          {" "}
          <h1 style={{ color: "pink" }}>
            {" "}
            {Number(
              ((this.props.count / this.props.maxCount) * 100).toFixed(1)
            )}
            %
          </h1>
        </div>
      </div>
    );
  }
}

class Box extends PureComponent {
  render() {
    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    return (
      <div
        style={{
          position: "absolute",
          width: size,
          height: size,
          backgroundColor: "red",
          left: x,
          top: y,
        }}
      />
    );
  }
}

class Macrophage extends PureComponent {
  render() {
    const x = this.props.x - this.props.size / 2;
    const y = this.props.y - this.props.size / 2;
    return (
      <div
        style={{
          position: "absolute",
          width: this.props.size,
          height: this.props.size,
          backgroundColor: this.props.goal.targetLocked ? "pink" : "white",
          borderRadius: "50%",
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          left: x,
          top: y,
        }}
      >
        <img
          src={this.props.goal.targetLocked ? CellAngry : Cell}
          style={{
            width: this.props.size,
            height: this.props.size,
          }}
        />
      </div>
    );
  }
}
class Enbrel extends PureComponent {
  render() {
    const x = this.props.x - this.props.size / 2;
    const y = this.props.y - this.props.size / 2;
    return (
      <div
        style={{
          position: "absolute",
          width: this.props.size,
          height: this.props.size,
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          left: x,
          top: y,
        }}
      >
        <img
          src={Pill}
          style={{
            width: this.props.size,
            height: this.props.size,
          }}
        />
      </div>
    );
  }
}

class TNF extends PureComponent {
  render() {
    const x = this.props.x - this.props.size / 2;
    const y = this.props.y - this.props.size / 2;
    return (
      <div
        style={{
          position: "absolute",
          width: this.props.size,
          height: this.props.size,
          borderRadius: "50%",
          color: "white",
          fontSize: 20,
          left: x,
          top: y,
        }}
      >
        <img
          src={this.props.isBlocked ? TNFDeactive : TNFpic}
          style={{
            width: this.props.size,
            height: this.props.size,
          }}
        />
      </div>
    );
  }
}

class Site extends PureComponent {
  render() {
    const x = this.props.x - this.props.size / 2;
    const y = this.props.y - this.props.size / 2;
    let fxProps = {
      count: 3,
      interval: 500,
      colors: ["#cc3333", "#cb3333", "#cc6666"],
      calc: (props, i) => ({
        ...props,
        position: "absolute",
        canvasLeftOffset: x + 100,
        canvasTopOffset: y + 100,
        particleTimeout: 2000,
        x: x,
        y: y,
      }),
    };
    return (
      <div
        style={{
          position: "absolute",
          width: this.props.size,
          height: this.props.size,
          display: this.props.popped && this.props.hasPopped ? "none" : "",
          backgroundColor: this.props.colour,
          borderRadius: "50%",
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          left: x,
          top: y,
        }}
      >
        {this.props.size > this.props.sizeBound[0] ? "Aneurysm" : " "}

        {this.props.popped && !this.props.hasPopped && (
          <Fireworks {...fxProps} />
        )}
      </div>
    );
  }
}

export { Box, Macrophage, TNF, Site, Enbrel, Menu, Prog };
