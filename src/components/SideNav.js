import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

import { Link } from 'react-router';

class SideNav extends Component {
  render() {
    return (
        <nav className="sidebar">
            <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="row">
                <nav className="col-md-1 sidebar sidebar-nav">
                    <Link to="/">
                        <img src="http://www.robcherman.com/gt_ovalG_green7488.png" className="img-responsive img-logo" alt="Golftec Logo" />
                    </Link>
                    <ul className="nav nav-pills flex-column">
                        
                        <li className="navbar-link wow slideInLeft" data-wow-delay=".7s">
                            <Link to="/">
                            <span className="row">
                                    <span className="col-md-12">
                                        <i className="nav-icon fa fa-home"></i>
                                    </span>
                                </span>
                                <span className="row">
                                    <span className="col-md-12 nav-text">
                                        Home
                                    </span>
                                </span>
                            </Link>
                        </li>

                        <li className="navbar-link wow slideInLeft" data-wow-delay=".8s">
                            <Link to="/">
                            <span className="row">
                                    <span className="col-md-12">
                                        <i className="nav-icon fa fa-golf-ball"></i>
                                    </span>
                                </span>
                                <span className="row">
                                    <span className="col-md-12 nav-text">
                                        My Game
                                    </span>
                                </span>
                            </Link>
                        </li>

                        <li className="navbar-link wow slideInLeft" data-wow-delay=".9s">
                            <Link to="Schedule_1">
                            <span className="row">
                                    <span className="col-md-12">
                                        <i className="nav-icon fa fa-calendar"></i>
                                    </span>
                                </span>
                                <span className="row">
                                    <span className="col-md-12 nav-text">
                                        Schedule
                                    </span>
                                </span>
                            </Link>
                        </li>

                        <li className="navbar-link wow slideInLeft" data-wow-delay="1s">
                            <Link to="/">
                            <span className="row">
                                    <span className="col-md-12">
                                        <i className="nav-icon fa fa-newspaper"></i>
                                    </span>
                                </span>
                                <span className="row">
                                    <span className="col-md-12 nav-text">
                                        TECNews
                                    </span>
                                </span>
                            </Link>
                        </li>

                        {/* <li className="navbar-link wow slideInLeft" data-wow-delay="1s">
                            <Link to="/">
                            <span className="row">
                                    <span className="col-md-12">
                                        <i className="nav-icon fa fa-user"></i>
                                    </span>
                                </span>
                                <span className="row">
                                    <span className="col-md-12 nav-text">
                                        My Profile
                                    </span>
                                </span>
                            </Link>
                        </li> */}
                      
                        <li className="navbar-link wow slideInLeft" data-wow-delay="1.1s">
                            <Link to="LoginPage">
                            <span className="row">
                                    <span className="col-md-12">
                                        <i className="nav-icon fa fa-sign-out-alt"></i>
                                    </span>
                                </span>
                                <span className="row">
                                    <span className="col-md-12 nav-text">
                                        Sign Out
                                    </span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
              </div>
            </div>
        </nav>
    );
  }
}

export default SideNav;
