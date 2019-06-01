import React, { Component } from "react";
import { easyPolyOut } from "d3-ease";
import Animate from "react-move/Animate";

class Stripes extends Component {
  showStripes = () => <div />;
  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}

export default Stripes;
