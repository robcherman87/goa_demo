import React, { Component } from 'react';

import '../../App.css';
// import '../../Login.css';

import { Link } from 'react-router';

class SignUpPage5 extends Component {
  render() {
    return (
        <div className="col-md-12 signup-form">
            <div className="container">
                <div className="row">
                    <h2 className="wow fadeIn" data-wow-delay=".1s">Welcome to GOA, New User</h2>
                </div>  
                <div className="row">
                    <span className="text-gray wow fadeIn" data-wow-delay=".2s">
                        There are just a few steps you need to complete to get started. Hit 'next' to get started.
                    </span>
                </div><br />
                    <ul className="signup-checklist">
                        <li className="wow fadeInUp" data-wow-delay=".1s"><i className="fa fa-check checklist-icon success"></i>Initial account setup</li>
                        <li className="wow fadeInUp" data-wow-delay=".2s"><i className="fa fa-check checklist-icon success"></i>Tailor your content</li>
                        <li className="wow fadeInUp" data-wow-delay=".3s"><i className="fa fa-check checklist-icon success"></i>Select a GOLFTEC game plan/lesson pack</li>
                        <li className="wow fadeInUp" data-wow-delay=".4s"><i className="fa fa-check checklist-icon text-gray"></i>Schedule a lesson</li>
                    </ul>
                <div className="col-md-12">
                    <Link to="SignUpPage4">
                        <button className="btn btn-primary">Back</button>
                    </Link>
                    <Link to="SignUpPage6">
                        <button className="btn btn-primary float-right">Next</button>
                    </Link>
                </div> 
            </div>
        </div>
    );
  }
}

export default SignUpPage5;
