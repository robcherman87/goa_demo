import React, { Component } from 'react';
import '../../App.css';

import Calendar from '../Calendar';

import { Link } from 'react-router';

class Schedule_3 extends Component {
  render() {
    return (
      <div className="wow fadeIn"> 
        <div className="container"> 

            <div className="mobile-timeline">
                <div className="col-md-12">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-md-4 timeline-box mobile-timeline-item">
                                <Link to="Schedule_1">  
                                    <div className="timeline-badge passive-timeline">
                                        <i className="fa fa-check wow bounceInDown"></i>
                                    </div>
                                    {/* <span className="active-timeline-text">How do you want to schedule?</span> */}
                                </Link>
                            </div>
                            
                            <div className="col-md-4 timeline-box mobile-timeline-item">
                                <Link to="Schedule_2">  
                                    <div className="timeline-badge passive-timeline">
                                        <i className="fa fa-check wow bounceInDown"></i>
                                    </div>
                                    {/* <span className="active-timeline-text">Pick your lesson type</span> */}
                                </Link>
                            </div>
                            
                            <div className="col-md-4 timeline-box mobile-timeline-item">
                                <Link to="Schedule_3">  
                                    <div className="timeline-badge active-timeline">
                                    </div>
                                    {/* <span className="active-timeline-text">Find a time</span> */}
                                </Link>
                            </div>

                            <div className="col-md-4 timeline-box mobile-timeline-item">
                                <Link to="Schedule_4">
                                    <div className="timeline-badge">
                                    </div>
                                    {/* <span className="active-timeline-text">Finalize</span> */}
                                </Link>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

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
                    <div className="row">
                        <div className="col-md-3 offset-md-1 wow fadeInUp" data-wow-delay=".1s">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>10:30 am</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h5 className="text-gray text-thin">January 1st, 0000</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h5 className="text-gray text-thin text-medium">30-Minute Lesson</h5>
                                </div>
                            </div>
                            <div className="row"> 
                                <div className="col-md-12">
                                    <Link to="Schedule_4">
                                        <button className="btn-primary btn">Book Now</button>
                                    </Link>
                                </div>
                            </div><br />
                        </div>
                        <div className="col-md-3 wow fadeInUp" data-wow-delay=".2s">
                            <div className="row">
                                    <div className="col-md-12">
                                        <h3>11:00 am</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h5 className="text-gray text-thin">January 1st, 0000</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h5 className="text-gray text-thin text-medium">30-Minute Lesson</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="btn-primary btn">Book Now</button>
                                    </div>
                            </div>
                        </div>
                    </div>   
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Schedule_3;
