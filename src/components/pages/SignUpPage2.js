import React, { Component } from 'react';

import '../../App.css';
// import '../../Login.css';

import { Link } from 'react-router';

class SignUpPage2 extends Component {
  render() {
    return (
        <div className="col-md-12 signup-form">
            <div className="container">
                <div className="row">
                    <h2>Do you typically hit the ball to the left or more to the right?</h2>
                </div>  
                    <div className="col-md-12 text-center"> 
                        <br />
                        <br />
                        <br />
                        <button className="btn checklist-button wow fadeInUp" data-wow-delay=".1s"><h2>Left</h2></button>
                        <button className="btn checklist-button wow fadeInUp" data-wow-delay=".2s"><h2>Right</h2></button>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="col-md-6 offset-md-5">
                        <ul class="pagination">
                            <li class="disabled"><a href="#">«</a></li>
                            <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">»</a></li>
                        </ul>
                    </div>
                <div className="col-md-12">
                    <Link to="SignUpPage1">
                        <button className="btn btn-primary">Back</button>
                    </Link>
                    <Link to="SignUpPage3">
                        <button className="btn btn-primary float-right">Next</button>
                    </Link>
                </div> 
            </div>
        </div>
    );
  }
}

export default SignUpPage2;
