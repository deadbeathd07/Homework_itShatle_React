import { Component } from "react";
import { useState } from "react";
import "./CoordMouseMove.css";

export function CoordMouseMoveFunc() {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  function handleMouseMove(event) {
    setClientX(event.clientX);
    setClientY(event.clientY);
  }
  return (
    <div className="ariaFunc" onMouseMove={handleMouseMove}>
      X: {clientX}, Y: {clientY}
    </div>
  );
};


export class CoordMouseMoveClass extends Component {
    state = {
        clientX: 0,
        clientY: 0
    };
    handleMouseMove = (event) => {
        this.setState({
            clientX: event.clientX,
            clientY: event.clientY
        });
    }
    render() {
      const {clientX, clientY} = this.state;
      return (
          <div className="ariaClass" onMouseMove={this.handleMouseMove}>
              X: {clientX}, Y: {clientY}
          </div>
      );
    }
}