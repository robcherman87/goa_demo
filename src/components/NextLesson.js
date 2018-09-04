import React, { Component } from 'react';
import '../App.css';


class NextLesson extends Component {
  render() {
    return (
        <div className="card dashboard-card" id="next-lesson-card">
            <div className="card-body">
                <div className="card-title">
                    <h5><i className="fas fa-arrow-circle-right text-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;My Next Lesson</h5>
                </div>
                <hr />
                <div className="card-text">
                    <h4 className="text-large">January 1st, 2000</h4>
                    <h5 className="text-medium text-gray  text-thin"><i class="fas fa-clock text-light-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;00:00</h5>
                    <h5 className="text-medium text-gray text-thin"><i class="fas fa-building text-light-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;Headquarters</h5>
                </div>
            </div>
        </div>  
    );
  }
}

export default NextLesson;
