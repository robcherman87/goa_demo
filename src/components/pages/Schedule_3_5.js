import React, { Component } from 'react';
import '../../App.css';

import Calendar from '../Calendar';

import { Link } from 'react-router';

class Schedule_3_5 extends Component {
  render() {
    return (
      <div className="wow fadeIn"> 
        <div className="container"> 
            
            <div className="timeline">
                <div className="col-md-12 offset-md-2">
                    <div className="row">

                    <div className="col-md-2 timeline-box">
                            <Link to="Schedule_1">
                                <div className="timeline-badge passive-timeline">
                                <i className="fa fa-check wow bounceInDown"></i>
                                </div>
                                <span>How do you want to schedule?</span>
                            </Link>
                        </div>

                        <div className="col-md-2 timeline-box">
                            <Link to="Schedule_2">
                                <div className="timeline-badge passive-timeline">
                                <i className="fa fa-check wow bounceInDown"></i>
                                </div>
                                <span>Pick your lesson type</span>
                            </Link>
                        </div>

                        <div className="col-md-2 timeline-box">
                            <Link to="Schedule_3">
                                <div className="timeline-badge active-timeline">
                                </div>
                                <span className="active-timeline-text">Find a time</span>
                            </Link>
                        </div>

                        <div className="col-md-2 timeline-box">
                            <Link to="Schedule_4">
                                <div className="timeline-badge" id="no_border">
                                </div>
                                <span>Finalize</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

              <div className="row">
                <div className="container">
                    <div className="col-md-6 offset-md-3">
                        <Calendar />
                    </div>
                </div>
              </div><br />
              <div className="row schedule-times">
                <div className="col-md-12 offset-md-2">
                    <div className="row wow fadeInUp" data-wow-delay=".1s">
                        <div className="col-md-5 offset-md-1">
                            <i className="fa fa-clock text-gray text-large"></i>&nbsp;&nbsp;&nbsp;
                            <span className="text-large text-green">10:30AM</span>&nbsp;&nbsp;&nbsp;
                            <span className="text-medium">January 1st, 0000</span>&nbsp;&nbsp;&nbsp;
                            <span className="text-gray">30-minute Practice</span> 
                        </div>
                        <div className="col-md-2">
                            <Link to="Schedule_4">
                                <button className="btn btn-primary btn-block">
                                Book Now
                                </button>
                            </Link>
                        </div>
                    </div><br />
                    <div className="row wow fadeInUp" data-wow-delay=".2s">
                    <div className="col-md-5 offset-md-1">
                            <i className="fa fa-clock text-gray text-large"></i>&nbsp;&nbsp;&nbsp;
                            <span className="text-large text-green">10:30AM</span>&nbsp;&nbsp;&nbsp;
                            <span className="text-medium">January 1st, 0000</span>&nbsp;&nbsp;&nbsp;
                            <span className="text-gray">30-minute Practice</span> 
                        </div>
                        <div className="col-md-2">
                            <Link to="Schedule_4_5">
                                <button className="btn btn-primary btn-block">
                                Book Now
                                </button>
                            </Link>
                        </div>
                    </div><br />
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Schedule_3_5;
