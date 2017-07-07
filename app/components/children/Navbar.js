import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router";
import NavbarTicker from "../utils/NavbarTicker.js";

// This is the Navbar Sub-Component:
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        BTCprice: 0,
        placeholderPrice: 0,
        percentageChange: 0,
        upOrDown: '',
    }
    this.getPrice = this.getPrice.bind(this);
  }

  componentDidMount(){
    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
    });

    this.getPrice()
    setInterval( () => this.getPrice(), 10000);
  }

  getPrice(){
        NavbarTicker.priceBTC().then((response)=> {
        console.log(response.data);
        this.setState({BTCprice: response.data.USD});
        this.upOrDown();
    })
  }

  upOrDown() {
      if (this.state.BTCprice > this.state.placeholderPrice) {
          return <trendingUp />;
      }
          return <trendingDown />;
  }

  trendingUp(){
      return <div><i className='material-icons' style={style.up}>trending_up</i><div id='placeholderprice' style={style.up}>${this.state.placeholderprice}</div></div>;
  }

  trendingDown(){
      return <div><i className='material-icons' style={style.down}>trending_down</i><div id='placeholderprice' style={style.down}>${this.state.placeholderprice}</div></div>;
  }

  render() {

      return (

        <div>
	  	    <nav>
	    	    <div className="nav-wrapper">
		      	    <Link to="/" className="brand-logo">${this.state.BTCprice}
                </Link>
		      	    <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li className="ticker" id="btc-price">
                      | ${this.state.BTCprice} | 
                  </li>
                  <li className="ticker" id="changing-price" style={style.list}> | {(this.state.BTCprice > this.state.placeholderPrice) ? <div><i className='material-icons' style={style.up}>trending_up</i><div id='placeholderprice' style={style.up}>${this.state.BTCprice}</div></div>
                      : <div><i className='material-icons' style={style.down}>trending_down</i><div id='placeholderprice' style={style.down}>${this.state.placeholderPrice}</div></div>
                        } |
                  </li>
                  <li>| BitCoin Tracker |</li>
		      	    </ul>
  				      <a href="#" data-activates="slide-out" className="right button-collapse hide-on-lg"><i className="material-icons">menu</i></a>
	    	    </div>
	  	    </nav>

	  	<ul id="slide-out" className="side-nav">
    		<li>
    			<div className="user-view">
		      	<div className="background">
      			</div>
    			</div>
			  </li>
        <li><Link to="/">Home</Link></li>
		    <li><div className="divider"></div></li>
		    <li><Link className="subheader">Other Projects</Link></li>
		  </ul>
    </div>
    );
  }
}

ReactDOM.render(<upOrDown/>, document.getElementById("app"))

const style = {
  list: {
    display: 'inline',
  },
  down: {
    color: 'red',
  },
  up: {
    color: 'green',
  }
}

export default Navbar;
