import React, { Component } from 'react';
import '../App.css';

class UpperNav extends Component {
  render() {
    return (
      <div>
         <div className="top-nav">
            <div className="container">
                <div className="float-right">
                    <i className="fa fa-calendar top-nav-icon"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa fa-user top-nav-icon"></i>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default UpperNav;
