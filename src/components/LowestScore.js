import React, { Component } from 'react';
import '../App.css';


class Lowest_Score extends Component {
  render() {
    return (
        <div className="card dashboard-card" id="lowest_score">
            <div className="card-body">
                <div className="card-title">
                    <h5>My Lowest Score<span className="float-right"><i class="fas fa-share"></i></span></h5>
                </div>
                <hr />
                <div className="card-text">
                    <h4 className="text-latge">73</h4>
                    <h5 className="text-medium text-gray text-thin"><i class="fas fa-calendar text-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;January 1st, 2000</h5>
                    <h5 className="text-medium text-gray text-thin"><i class="fas fa-building text-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;Headquarters</h5>
                </div>
            </div>
        </div>
    );
  }
}

export default Lowest_Score;
