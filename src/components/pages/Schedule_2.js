import React, { Component } from 'react';
import '../../App.css';

import { Link } from 'react-router';

class Schedule_2 extends Component {
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
                                    <div className="timeline-badge active-timeline">
                                    </div>
                                    <span className="active-timeline-text">Pick your lesson type</span>
                                </Link>
                            </div>

                            <div className="col-md-2 timeline-box">
                                <Link to="Schedule_3">
                                    <div className="timeline-badge">
                                    </div>
                                    <span>Find a time</span>
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
                    <div className="col-md-12 offset-md-4">
                        <div className="row">
                            <h1 className="instruction-header">Pick your lesson type</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <div className="col-md-12 offset-md-3">
                            <div className="row">
                                <div className="col-md-2 wow fadeInUp" data-wow-delay="0.01s">
                                    <Link to="Schedule_3">
                                        <div className="tile" id="tile-alt">
                                            <i class="fas fa-golf-ball"></i>
                                            <h3>30-Minute Lesson</h3>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-2 wow fadeInUp" data-wow-delay="0.03s">
                                    <div className="tile" id="tile-alt">
                                        <i class="fas fa-golf-ball"></i>
                                        <h3>30-Minute Practice</h3>
                                    </div>
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

export default Schedule_2;
