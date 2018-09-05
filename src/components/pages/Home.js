import React, { Component } from 'react';
import '../../App.css';

import Header from '../Header';
import SwingAnalysis from '../SwingAnalysis';
import Drill from '../Drill';
import NextLesson from '../NextLesson';
import RecentLesson from '../RecentLesson';
import BagCatalogWidget from '../BagCatalogWidget';

import LongestDrive from '../LongestDrive';
import LowestScore from '../LowestScore';

import Toggle from '../Toggle';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay="0.01s">
                        <NextLesson /><br />
                        <RecentLesson /><br />
                        <LowestScore /><br />
                        <LongestDrive /><br />
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay="0.02s">
                        <SwingAnalysis /><br />
                        <Drill />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 bag-catalog wow fadeInUp" data-wow-delay="0.03s">
                        <BagCatalogWidget />
                    </div>
                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.04s">
                        <img className="dash-ad" src="http://www.robcherman.com/ad.jpg" alt="Golftec Ad" />
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Home;
