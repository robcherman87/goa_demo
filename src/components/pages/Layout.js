import React, { Component } from 'react';
import '../../App.css';

import SideNav from '../SideNav';
import SideNavExpand from '../SideNavExpand';
import UpperNav from '../UpperNav';
import MobileNav from '../MobileNav';
import Home from './Home';

class Layout extends Component {
  render() {
    return (
      <div className="App">
      
        <div id="content">
          <MobileNav />
          <SideNav />
          {/* <SideNavExpand /> */}
            <main className="col-header">
            <UpperNav />
              {this.props.children}
            </main> 
        </div>
      </div>
    );
  }
}

export default Layout;
