import React, { Component } from "react";
import {browserHistory} from "react-router";
// import GraphHelper from "../utils/GraphHelper";

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
    <div>
    	<div className="graph" id="chart_div"></div>
    </div>
    );
  }
}

export default Chart;