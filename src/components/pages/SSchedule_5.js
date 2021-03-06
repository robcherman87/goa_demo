import React, { Component } from 'react';
import '../../App.css';

import { Link } from 'react-router';

class SSchedule_5 extends Component {
  render() {
    return (
      <div className="wow fadeIn">
        <div className="container"> 

                <div className="custom-timeline">
                    <div className="col-md-12 offset-md-1">
                        <div className="row">
                       
                            <div className="col-md-2 timeline-box">
                                <Link to="">  
                                    <div className="timeline-badge passive-timeline">
                                        <i className="fa fa-check wow bounceInDown"></i>
                                    </div>
                                    <span>Pick your lesson type</span>
                                </Link>
                            </div>

                            <div className="col-md-2 timeline-box">
                                <Link to="">  
                                    <div className="timeline-badge passive-timeline">
                                        <i className="fa fa-check wow bounceInDown"></i>
                                    </div>
                                    <span>Pick Days</span>
                                </Link>
                            </div>

                            <div className="col-md-2 timeline-box">
                                <Link to="">
                                    <div className="timeline-badge passive-timeline">
                                        <i className="fa fa-check wow bounceInDown"></i>
                                    </div>
                                    <span>Pick Time Of Day</span>
                                </Link>
                            </div>

                            <div className="col-md-2 timeline-box">
                                <Link to="">
                                    <div className="timeline-badge passive-timeline">
                                        <i className="fa fa-check wow bounceInDown"></i>
                                    </div>
                                    <span>Pick Your Schedule</span>
                                </Link>
                            </div>

                            <div className="col-md-2 timeline-box">
                                <Link to="">
                                    <div className="timeline-badge active-timeline" id="no_border">
                                    </div>
                                    <span>Finalize</span>
                                </Link>
                            </div>
                        
                        </div>
                    </div>
                </div>

              <div className="row">
                <div className="col-md-8 offset-md-2">
                <h2>Review</h2>
                <hr />
                    <div className="row">
                        <div className="col-md-10">
                            <span className="text-large text-thick text-orange">60-Minute Lesson</span><br />
                            <span className="text-gray text-thin"><i class="fas fa-clock text-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;Thursday August 2nd, 2018</span><br />
                            <span className="text-gray text-thin"><i class="fas fa-building text-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;Nick Clearwater | Headquarters</span>
                        </div>
                        <div className="col-md-2">
                            10:30 AM<br />
                            <i className="fa fa-edit"></i>&nbsp;&nbsp;
                            <i className="fa fa-trash"></i>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-10">
                            <span className="text-large text-thick text-orange">60-Minute Lesson</span><br />
                            <span className="text-gray text-thin"><i class="fas fa-clock text-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;Thursday August 2nd, 2018</span><br />
                            <span className="text-gray text-thin"><i class="fas fa-building text-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;Nick Clearwater | Headquarters</span>
                        </div>
                        <div className="col-md-2">
                            10:30 AM<br />
                            <i className="fa fa-edit"></i>&nbsp;&nbsp;
                            <i className="fa fa-trash"></i>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-10">
                            <span className="text-large text-thick text-orange">60-Minute Lesson</span><br />
                            <span className="text-gray text-thin"><i class="fas fa-clock text-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;Thursday August 2nd, 2018</span><br />
                            <span className="text-gray text-thin"><i class="fas fa-building text-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;Nick Clearwater | Headquarters</span>
                        </div>
                        <div className="col-md-2">
                            10:30 AM<br />
                            <i className="fa fa-edit"></i>&nbsp;&nbsp;
                            <i className="fa fa-trash"></i>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="col-md-8 offset-md-2">
                    <Link to="/">
                        <button className="btn btn-primary float-right schedule-button">Finalize</button><br /><br />
                    </Link>
                    <Link to="Schedule_2">
                        <button className="btn float-right schedule-another">Schedule Another</button>
                    </Link>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default SSchedule_5;
