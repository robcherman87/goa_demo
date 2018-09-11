import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';

import Schedule_1 from './components/pages/Schedule_1';
import Schedule_2 from './components/pages/Schedule_2';
import Schedule_3 from './components/pages/Schedule_3';
import Schedule_3_5 from './components/pages/Schedule_3_5';
import Schedule_4 from './components/pages/Schedule_4';
import Schedule_4_5 from './components/pages/Schedule_4_5';

import SSchedule_1 from './components/pages/SSchedule_1';
import SSchedule_2 from './components/pages/SSchedule_2';
import SSchedule_3 from './components/pages/SSchedule_3';
import SSchedule_4 from './components/pages/SSchedule_4';
import SSchedule_5 from './components/pages/SSchedule_5';

import SignUpPage1 from './components/pages/SignUpPage1';
import SignUpPage2 from './components/pages/SignUpPage2';
import SignUpPage3 from './components/pages/SignUpPage3';
import SignUpPage4 from './components/pages/SignUpPage4';
import SignUpPage5 from './components/pages/SignUpPage5';
import SignUpPage6 from './components/pages/SignUpPage6';

import { Router, 
         Route, 
         IndexRoute, 
         hashHistory 
} from 'react-router';

const root = document.getElementById('root');

ReactDOM.render(
    <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="Schedule_1" component={Schedule_1}></Route>
                <Route path="Schedule_2" component={Schedule_2}></Route>
                <Route path="Schedule_3" component={Schedule_3}></Route>
                <Route path="Schedule_3_5" component={Schedule_3_5}></Route>
                <Route path="Schedule_4" component={Schedule_4}></Route>
                <Route path="Schedule_4_5" component={Schedule_4_5}></Route>
                <Route path="SSchedule_1" component={SSchedule_1}></Route>
                <Route path="SSchedule_2" component={SSchedule_2}></Route>
                <Route path="SSchedule_3" component={SSchedule_3}></Route>
                <Route path="SSchedule_4" component={SSchedule_4}></Route>
                <Route path="SSchedule_5" component={SSchedule_5}></Route>
                <Route path="Profile" component={Profile}></Route>
                <Route path="SignUpPage1" component={SignUpPage1}></Route>
                <Route path="SignUpPage2" component={SignUpPage2}></Route>
                <Route path="SignUpPage3" component={SignUpPage3}></Route>
                <Route path="SignUpPage4" component={SignUpPage4}></Route>
                <Route path="SignUpPage5" component={SignUpPage5}></Route>
                <Route path="SignUpPage6" component={SignUpPage6}></Route>
            </Route>
            <Route path="loginPage" component={Login}></Route>
            <Route path="SignUp" component={SignUp}></Route>
    </Router>,
root);




