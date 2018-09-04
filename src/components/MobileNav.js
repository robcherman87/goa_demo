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
                <img src="http://www.robcherman.com/gt_ovalG_green7488.png" className="img-responsive img-logo" alt="Golftec Logo" />
            </div>

            <ul class="list-unstyled components">
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                </li>
                <li>
                    <a href="#">My Game</a>
                </li>
                <li>
                    <a href="#">Schedule</a>
                </li>
                <li>
                    <a href="#">TECNews</a>
                </li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default MobileNav;



