import React, { Component } from 'react';
import '../../App.css';

import { Link } from 'react-router';

class SSchedule_4 extends Component {
  render() {
    return (
      <div className="wow fadeIn">
          <div className="container"> 

              <div className="row">
                <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                            <h1 className="instruction-header">Pick your time of day</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <div className="col-md-12 offset-md-3">
                                <div className="row">
                            
                                    <div className="col-md-2 wow fadeInUp" data-wow-delay="0.01s">
                                        <Link to="SSchedule_5">
                                            <div className="tile" id="tile-alt">
                                                <i class="fas fa-calendar"></i>
                                                <h3>Every Day</h3>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-md-2 wow fadeInUp" data-wow-delay="0.03s">
                                        <Link to="">
                                            <div className="tile" id="tile-alt">
                                                <i class="fas fa-calendar"></i>
                                                <h3>Every Week</h3>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-md-2 wow fadeInUp" data-wow-delay="0.05s">
                                        <div className="tile" id="tile-alt">
                                            <i class="fas fa-calendar"></i>
                                            <h3>Every Other Week</h3>
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

export default SSchedule_4;
