import React, { Component } from 'react';
import '../App.css';

import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div>
         <header>
            <div className="container">
                <div className="alert alert-primary wow pulse dash-alert" role="alert">
                    <i className="fa fa-calendar"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>You have four lessons to schedule</span>
                    <span className="float-right"><i className="fa fa-times-circle"></i></span>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <h3 className="wow slideInLeft mt-4"><span className="text-thin">Welcome Back,</span> <span className="">User</span></h3>
                    </div>
                    <div className="col-md-3">
                        <Link to="Schedule_1">
                            <button className="btn btn-primary wow pulse mt-4 btn-block"><i className="fa fa-plus-circle"></i>&nbsp;&nbsp;Schedule New Lesson</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;
