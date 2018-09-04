import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

import { Link } from 'react-router';

class Calendar extends Component {
  render() {
    return (
        <div>
            <div id='fullDiv' >
                <ul className="calendar">
                    <li>SUN</li>
                    <li>MON</li>
                    <li>TUE</li>
                    <li>WED</li>
                    <li>THUR</li>
                    <li>FRI</li>
                    <li>SAT</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li className="available-time" onClick={ this.toggleContent }>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li className="available-time">16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>  
                </ul>
            </div>
        </div>
    );
  }
}

export default Calendar;
