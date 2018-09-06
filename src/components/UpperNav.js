import React, { Component } from 'react';
import '../App.css';

import { Link } from 'react-router';

class UpperNav extends Component {
  render() {
    return (
      <div>
         <div className="top-nav">
            <div className="container">
                <div className="float-right">
                    <i className="fa fa-calendar top-nav-icon"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="Profile">
                      <i className="fa fa-user top-nav-icon"></i>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default UpperNav;
