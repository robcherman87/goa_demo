import React, { Component } from 'react';
import '../App.css';


class Longest_Drive extends Component {
  render() {
    return (
        <div className="card dashboard-card" id="longest_drive">
            <div className="card-body">
                <div className="card-title">
                    <h5>My Longest Drive<span className="float-right"><i class="fas fa-share"></i></span></h5>
                </div>
                <hr />
                <div className="card-text">
                    <h4 className="text-large">638 Yards</h4>
                    <h5 className="text-medium text-gray text-thin"><i class="fas fa-calendar text-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;January 1st, 2000</h5>
                    <h5 className="text-medium text-gray text-thin"><i class="fas fa-building text-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;Headquarters</h5>
                </div>
            </div>
        </div>
    );
  }
}

export default Longest_Drive;
