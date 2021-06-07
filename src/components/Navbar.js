import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img alt="logo"></img>
        </Link>
        <Link to="/tripsmiths">The Tripsmiths</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/visuals">Our Dreamcatchers</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact-us">Contact</Link>
      </div>
    );
  }
}
