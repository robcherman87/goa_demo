import React, { Component } from 'react';
import '../../App.css';

import { Link } from 'react-router';

class SSchedule_1 extends Component {
  render() {
    return (
      <div className="wow fadeIn">
          <div className="container"> 

                <div className="custom-timeline">
                    <div className="col-md-12 offset-md-1">
                        <div className="row">
                       
                            <div className="col-md-2 timeline-box">
                                <Link to="">  
                                    <div className="timeline-badge active-timeline">
                                    </div>
                                    <span>Pick your lesson type</span>
                                </Link>
                            </div>

                            <div className="col-md-2 timeline-box">
                                <Link to="">  
                                    <div className="timeline-badge">
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
                            <h1 className="instruction-header">Pick your lesson type</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <div className="col-md-12 offset-md-3">
                            <div className="row">
                                <div className="col-md-2 wow fadeInUp" data-wow-delay="0.01s">
                                    <Link to="SSchedule_2">
                                        <div className="tile" id="tile-alt">
                                            <i class="fas fa-golf-ball"></i>
                                            <h3>30-Minute Lesson</h3>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-2 wow fadeInUp" data-wow-delay="0.03s">
                                    <Link to="">
                                        <div className="tile" id="tile-alt">
                                            <i class="fas fa-golf-ball"></i>
                                            <h3>30-Minute Practice</h3>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-2 wow fadeInUp" data-wow-delay="0.05s">
                                    <div className="tile" id="tile-alt">
                                        <i class="fas fa-golf-ball"></i>
                                        <h3>Putting Lesson</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 wow fadeInUp" data-wow-delay="0.07s">
                                    <div className="tile" id="tile-alt">
                                        <i class="fas fa-golf-ball"></i>    
                                        <h3>Techfit Component</h3>
                                    </div>
                                </div>
                                <div className="col-md-2 wow fadeInUp" data-wow-delay="0.09s">
                                    <div className="tile" id="tile-alt">
                                        <i class="fas fa-golf-ball"></i>
                                        <h3>...</h3>
                                    </div>
                                </div>
                                <div className="col-md-2 wow fadeInUp" data-wow-delay=".10s">
                                    <div className="tile" id="tile-alt">
                                        <i class="fas fa-golf-ball"></i>    
                                        <h3>...</h3>
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

export default SSchedule_1;
