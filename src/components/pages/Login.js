import React, { Component } from 'react';

// import '../../App.css';
import '../../Login.css';

import { Link } from 'react-router';

class Login extends Component {
  render() {
    return (
        <div class="text-center">
            <form class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                <div class="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <Link to="/"><button class="btn btn-lg btn-block" type="submit">Sign in</button></Link>
                <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </form>
        </div>
    );
  }
}

export default Login;
