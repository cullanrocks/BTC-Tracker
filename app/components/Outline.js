import React, { Component } from "react";
import {browserHistory} from "react-router";
import Navbar from "./children/Navbar";
// import Chart from "./children/Chart";

// Here we include the sub-components


// This is the main component, Outline
class Outline extends Component {
  constructor(props) {
    super(props);
    // If we are assigning an object property to an existing variable with the same name,
    // we can use this shorthand assignment syntax

    // Any state data we need
    this.state = {
      currentPage: '',
    };
    // Bind any functions to constructor
  }

  componentDidMount(){
  	browserHistory.push('/')
  }

  componentWillReceiveProps(nextProps){
  		// this.setState({currentPage: nextProps.location.pathname})
  }

  render() {
  	// let partial;
  	// (this.state.currentPage === "/") ? partial = <AboutMe/> : partial = this.props.children;

    return (
    <div>
      	<header>
      		<Navbar/>
      	</header>
        <main className="container">
            {/*partial*/}
            {this.props.children}
        </main>
        {/*<footer className="page-footer">
                  <div className="container">
                    <div className="row">
                      <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                      </div>
                      <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                          <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                          <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                          <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                          <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-copyright">
                    <div className="container">
                    © 2014 Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                  </div>
                </footer>*/}
    </div>
    );
  }
}

export default Outline;
