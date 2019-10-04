import React, { Component } from "react";
import loadingImage from '../../loading.gif';

class Loading extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <img style={{width: 240}} alt="Loading..." src={loadingImage}/>
      </div>
    );
  }
}

export default Loading; 
