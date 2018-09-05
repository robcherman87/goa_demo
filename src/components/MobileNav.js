import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

import { Link } from 'react-router';

class MobileNav extends Component {
  render() {
    return (
      <div>
        <nav id="sidebar">
            <div id="dismiss">
                <i class="fas fa-arrow-left"></i>
            </div>

            <div class="sidebar-header">
                <Link to="/">
                    <img src="http://www.robcherman.com/gt_ovalG_green7488.png" className="img-responsive img-logo" alt="Golftec Logo" />
                </Link>
            </div>

            <ul class="list-unstyled components">
                <li>
                    <a href="#"><i className="nav-icon fa fa-home"></i>&nbsp;&nbsp;&nbsp;Home</a>
                </li>
                <li>
                    <a href="#"><i className="nav-icon fa fa-golf-ball"></i>&nbsp;&nbsp;&nbsp;My Game</a>
                </li>
                <Link to="Schedule_1">
                    <li>
                        <a href="#"> <i className="nav-icon fa fa-calendar"></i>&nbsp;&nbsp;&nbsp;Schedule</a>
                    </li>
                </Link>
                <li>
                    <a href="#"><i className="nav-icon fa fa-newspaper"></i>&nbsp;&nbsp;&nbsp;TECNews</a>
                </li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default MobileNav;



