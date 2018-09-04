import React, { Component } from 'react';
import '../App.css';


class Drill extends Component {
  render() {
    return (
        <div className="card dashboard-card">
            <div className="card-body">
                <div className="card-title">
                    <h5><i className="fas fa-video text-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;Drill<span className="float-right"><i class="fas fa-share"></i></span></h5>
                </div>
                <hr />
                <div className="card-text">
                    <div class='embed-container'><iframe src='https://www.youtube.com/embed/2qI1WrezeWk' frameborder='0' allowfullscreen></iframe></div>
                </div>
            </div>
        </div>
    );
  }
}

export default Drill;
