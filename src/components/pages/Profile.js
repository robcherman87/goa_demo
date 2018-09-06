import React, { Component } from 'react';
import '../../App.css';

import { Link } from 'react-router';

class Profile extends Component {
  render() {
    return (
      <div className="wow fadeIn">
          <div className="container"> 
            <br /><br />
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <h4>Basic Profile</h4>
                                <hr />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <form>
                                <div class="form-group row">
                                    <label for="username" class="col-4 col-form-label">User Name*</label> 
                                    <div class="col-8">
                                    <input id="username" name="username" placeholder="Username" class="form-control here" required="required" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="name" class="col-4 col-form-label">First Name</label> 
                                    <div class="col-8">
                                    <input id="name" name="name" placeholder="First Name" class="form-control here" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="lastname" class="col-4 col-form-label">Last Name</label> 
                                    <div class="col-8">
                                    <input id="lastname" name="lastname" placeholder="Last Name" class="form-control here" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-4 col-form-label">Email*</label> 
                                    <div class="col-8">
                                    <input id="email" name="email" placeholder="Email" class="form-control here" required="required" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="publicinfo" class="col-4 col-form-label">Public Info</label> 
                                    <div class="col-8">
                                    <textarea id="publicinfo" name="publicinfo" cols="40" rows="4" class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="offset-4 col-8">
                                    <button name="submit" type="submit" class="btn btn-primary">Update My Profile</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div><br />

                 <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <h4>Extended Profile</h4>
                                <hr />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <form>
                                <div class="form-group row">
                                    <label for="username" class="col-4 col-form-label">User Name*</label> 
                                    <div class="col-8">
                                    <input id="username" name="username" placeholder="Username" class="form-control here" required="required" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="name" class="col-4 col-form-label">First Name</label> 
                                    <div class="col-8">
                                    <input id="name" name="name" placeholder="First Name" class="form-control here" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="lastname" class="col-4 col-form-label">Last Name</label> 
                                    <div class="col-8">
                                    <input id="lastname" name="lastname" placeholder="Last Name" class="form-control here" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-4 col-form-label">Email*</label> 
                                    <div class="col-8">
                                    <input id="email" name="email" placeholder="Email" class="form-control here" required="required" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="publicinfo" class="col-4 col-form-label">Public Info</label> 
                                    <div class="col-8">
                                    <textarea id="publicinfo" name="publicinfo" cols="40" rows="4" class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="offset-4 col-8">
                                    <button name="submit" type="submit" class="btn btn-primary">Update My Profile</button>
                                    </div>
                                </div>
                                </form>
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

export default Profile;
