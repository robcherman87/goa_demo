import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './components/pages/Login';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Schedule_1 from './components/pages/Schedule_1';
import Schedule_2 from './components/pages/Schedule_2';
import Schedule_3 from './components/pages/Schedule_3';
import Schedule_4 from './components/pages/Schedule_4';

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
            <Route path="Schedule_4" component={Schedule_4}></Route>
        </Route>
        <Route path="loginPage" component={Login}></Route>
    </Router>,
root);



