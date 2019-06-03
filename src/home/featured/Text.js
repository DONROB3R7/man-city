import React, { Component } from "react";
import { easyPolyOut } from "d3-ease";
import Animate from "react-move/Animate";

class Text extends Component {
  animateNumber = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        rotate: 0
      }}
      enter={{
        opacity: [1],
        rotate: [360],
        timing: { duration: 1000, delay: 500 },
        transitionTimingFunction: { easyPolyOut }
      }}
    >
      {({ opacity, rotate }) => {
        return (
          <div
            className="featured_number"
            style={{
              opacity,
              transform: `translate(260px,170px) rotateY(${rotate}deg)`
            }}
          >
            3
          </div>
        );
      }}
    </Animate>
  );
  render() {
    return <div className="featured_text">{this.animateNumber()}</div>;
  }
}

export default Text;
