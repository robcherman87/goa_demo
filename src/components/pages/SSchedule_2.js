import React, { Component } from 'react';
import '../../App.css';

import { Link } from 'react-router';

class SSchedule_2 extends Component {
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
                                    <div className="timeline-badge active-timeline">
                                    </div>
                                    <span>Pick Days</span>
                                </Link>
                            </div>

                            <div className="col-md-2 timeline-box">
                                <Link to="">
                                    <div className="timeline-badge">
                                    </div>
                                    <span>Pick Time Of Day</span>
                                </Link>
                            </div>

                            <div className="col-md-2 timeline-box">
                                <Link to="">
                                    <div className="timeline-badge">
                                    </div>
                                    <span>Pick Your Schedule</span>
                                </Link>
                            </div>

                            <div className="col-md-2 timeline-box">
                                <Link to="">
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
                    <div className="col-md-12">
                        <div className="text-center">
                            <h1 className="instruction-header">Pick your days</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <div className="col-md-12 offset-md-3">
                            <div className="row">
                            
                                <div className="col-md-2 wow fadeInUp" data-wow-delay="0.01s">
                                    <Link to="SSchedule_3">
                                        <div className="tile" id="tile-alt">
                                            <i class="fas fa-calendar"></i>
                                            <h3>Monday</h3>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-md-2 wow fadeInUp" data-wow-delay="0.03s">
                                    <Link to="">
                                        <div className="tile" id="tile-alt">
                                            <i class="fas fa-calendar"></i>
                                            <h3>Tuesday</h3>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-md-2 wow fadeInUp" data-wow-delay="0.05s">
                                    <div className="tile" id="tile-alt">
                                        <i class="fas fa-calendar"></i>
                                        <h3>Wednesday</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-2 wow fadeInUp" data-wow-delay="0.07s">
                                    <div className="tile" id="tile-alt">
                                        <i class="fas fa-calendar"></i>    
                                        <h3>Thursday</h3>
                                    </div>
                                </div>

                                <div className="col-md-2 wow fadeInUp" data-wow-delay="0.09s">
                                    <div className="tile" id="tile-alt">
                                        <i class="fas fa-calendar"></i>
                                        <h3>Friday</h3>
                                    </div>
                                </div>

                                <div className="col-md-2 wow fadeInUp" data-wow-delay=".10s">
                                    <div className="tile" id="tile-alt">
                                        <i class="fas fa-calendar"></i>    
                                        <h3>Saturday</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-2 wow fadeInUp" data-wow-delay=".10s">
                                    <div className="tile" id="tile-alt">
                                        <i class="fas fa-calendar"></i>    
                                        <h3>Sunday</h3>
                                    </div>
                                </div>
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

export default SSchedule_2;
