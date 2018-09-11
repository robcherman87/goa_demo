import React, { Component } from 'react';

// import '../../App.css';
import '../../Login.css';

import { Link } from 'react-router';

class SignUp extends Component {
  render() {
    return (
        <div className="col-md-12">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="http://www.robcherman.com/gt_logo_green7488_blk.png" className="img-responsive signup-logo" alt="Golftec Logo" />
                    </div>   
                    <div className="col-md-8 signup-form">
                        <h3>Get started with a free account</h3>
                        <span className="text-gray">GOLFTEC offers a variety of golf lesson packages designed to meet your individual needs and goals and GOA is your ultimate GOLFTEC lesson managment tool. Already have an account, <Link to="loginPage">Log In</Link></span>
                        <hr />
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>  
                        <div class="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>  
                        <div class="form-group">
                            <label for="exampleInputEmail1">Password</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>  
                        <div class="form-group">
                            <div class="col-xs-6 col-xs-offset-3">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="agree" value="agree" /> I Agree with GOLFTEC's terms and conditions
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-xs-9 col-xs-offset-3">
                                <Link to="SignUpPage1">
                                    <button type="submit" class="btn btn-primary float-right" name="signup" value="Sign up">Submit</button>
                                </Link>
                            </div>
                        </div>
                    </div>   
                </div>      
            </div>
        </div>
    );
  }
}

export default SignUp;
