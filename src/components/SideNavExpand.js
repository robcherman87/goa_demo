import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

import { Link } from 'react-router';

class SideNavExpand extends Component {
  render() {
    return (
        <span>
            <nav class="main-menu">
            <ul>
                <i class="fa fa-angle-right fa-2x"></i>
                <div class="side-container">
                    <div class="side-text">m</div>
                    <div class="side-text">e</div>
                    <div class="side-text">n</div>
                    <div class="side-text">u</div>
                    <br />
                    <div class="side-text-side">u</div>
                    <div class="side-text-side">n</div>
                    <div class="side-text-side">e</div>
                    <div class="side-text-side">m</div>
                </div>
                <li>
                <span class="nav-text">
                    RF EQ
                </span>
                </li>
                <li>
                <span class="nav-text">
                    Wave Status
                </span>
                </li>
                <li>
                <span class="nav-text">
                    Stock Percent
                </span>
                </li>
                <li>
                <span class="nav-text">
                    On Demand Alerts
                </span>
                </li>
            </ul>
            </nav>    
        </span>
    );
  }
}

export default SideNavExpand;
