import React, { Component } from 'react';

import '../../App.css';
// import '../../Login.css';

import { Link } from 'react-router';

class SignUpPage4 extends Component {
  render() {
    return (
        <div className="col-md-12 choose-lesson-form">
            <div className="container">
                <div className="row">
                    <h2>Select your...</h2>
                    <span className="text-gray">
                        Random lessons aren’t the answer to a better golf game. It takes practice and diligence to improve, which our comprehensive Game Plans deliver. Every Game Plan includes a Swing Evaluation, sequential lessons, video-based practice, and a TECFIT club fitting.
                    </span>
                    <h2>Game Plan</h2>
                </div> 
                <div className="row">
                    <div className="col-md-3 offset-md-1">
                        <Link to="">
                            <div className="tile">
                                <h3>Game Plan</h3>
                                <h2>3 - 10</h2>
                                <span>3 months to take up to 10 lessons, 3 months video practive, 1 TECFIT</span>     
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="">
                            <div className="tile">
                                <h3>Game Plan</h3>
                                <h2>6 - 15</h2>
                                <span>6 months to take up to 15 lessons, 6 months video practive, 1 TECFIT</span>     
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="">
                            <div className="tile">
                                <h3>Game Plan</h3>
                                <h2>12 - 25</h2>
                                <span>12 months to take up to 25 lessons, 12 months video practive, 1 TECFIT</span>     
                            </div>
                        </Link>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-md-3 offset-md-1">
                            <Link to="">
                                <div className="tile">
                                    <h3>Game Plan</h3>
                                    <h2>12 - 40</h2>
                                    <span>12 months to take up to 40 lessons, 12 months video practive, 1 TECFIT</span>     
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="">
                                <div className="tile">
                                    <h3>Game Plan</h3>
                                    <h2>12 - 52</h2>
                                    <span>12 months to take up to 52 lessons, 12 months video practive, 1 TECFIT</span>     
                                </div>
                            </Link>
                        </div> 
                </div>
                <h2>Lesson Packs</h2>
                    <div className="row">
                        <div className="col-md-3 offset-md-1">
                            <Link to="">
                                <div className="tile">
                                    <h3>Lesson Pack</h3>
                                    <h2>5-Lesson Pack</h2>
                                    <span>3 months to take up to 5 lessons</span>     
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="">
                                <div className="tile">
                                    <h3>Lesson Pack</h3>
                                    <h2>10-Lesson Pack</h2>
                                    <span>6 months to take up to 10 lessons</span>     
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="">
                                <div className="tile">
                                    <h3>Lesson Pack</h3>
                                    <h2>15-Lesson Pack</h2>
                                    <span>6 months to take up to 15 lessons</span>     
                                </div>
                            </Link>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-md-3 offset-md-1">
                                <Link to="">
                                    <div className="tile">
                                        <h3>Lesson Pack</h3>
                                        <h2>40-Lesson Pack</h2>
                                        <span>12 months to take up to 40 lessons</span>     
                                    </div>
                                </Link>
                            </div>
                        <div className="col-md-3">
                            <Link to="">
                                <div className="tile">
                                    <h3>Lesson Pack</h3>
                                    <h2>52-Lesson Pack</h2>
                                    <span>12 months to take up to 52 lessons</span>     
                                </div>
                            </Link>
                        </div>
                    </div>
                <div className="col-md-12">
                    <Link to="SignUpPage3">
                        <button className="btn btn-primary">Back</button>
                    </Link>
                    <Link to="SignUpPage5">
                        <button className="btn btn-primary float-right">Next</button>
                    </Link>
                </div> 
            </div>
        </div>
    );
  }
}

export default SignUpPage4;
