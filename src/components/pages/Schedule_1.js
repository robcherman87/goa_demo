import React, { Component } from 'react';
import '../../App.css';

import { Link } from 'react-router';

class Schedule_1 extends Component {
  render() {
    return (
      <div className="wow fadeIn">
          <div className="container"> 
          
            <div className="manual-timeline">
                <div className="col-md-12 offset-md-2">
                    <div className="row">
                            
                            <div className="col-md-2 timeline-box">
                                <Link to="Schedule_1">  
                                    <div className="timeline-badge active-timeline">
                                    </div>
                                    <span className="active-timeline-text">How do you want to schedule?</span>
                                </Link>
                            </div>
                            
                            <div className="col-md-2 timeline-box">
                                <Link to="Schedule_2">  
                                    <div className="timeline-badge">
                                    </div>
                                    <span>Pick your lesson type</span>
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
                    <div className="col-md-12 offset-md-3">
                        <div className="row instruction-header">
                            <h1>How do you want to schedule?</h1>    
                        </div>
                        <div className="col-md-6 instruction-text">
                            <span className="text-gray">There are two ways you can schedule a lesson with GOLFTEC. You can manually schedule a lesson by date and time or have GOLFTEC's Smart Scheduling system put your lesson plan together for you.</span>
                        </div>
                    </div>
                        <div className="container">
                            <div className="col-md-12 offset-md-3">
                                <div className="row">
                                    <div className="col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                                        <Link to="Schedule_2">
                                            <div className="tile">
                                                <i class="fas fa-wrench"></i>
                                                <h3>Manually</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-md-3 wow fadeInUp" data-wow-delay="0.2s">
                                        <Link to="SSchedule_1">
                                            <div className="tile">
                                                <i class="fas fa-magic"></i>
                                                <h3>Smart Schedule©</h3>
                                            </div>
                                        </Link>
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

export default Schedule_1;
