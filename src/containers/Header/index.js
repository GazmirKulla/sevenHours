import React, { Component } from "react";
import { connect } from "react-redux";

class ConnectedHeader extends Component {
  render() {
    //const { appTitle } = this.props;
    const appTitle = "React Redux Task";
    return (
      <header>
        	<div id="nav-bar" className="animated fadeIn">
            	<div id="logo">
                	<a href="/#">{appTitle}</a>
                </div>
            </div>
        </header> 
    );
  }
}

const mapStateToProps = ({ appSettings }) => {
  return { appSettings };
};

export default connect(
  mapStateToProps,
  {}
)(ConnectedHeader);
