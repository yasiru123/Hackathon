import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import wildlife from './Wildlife.png';
import Sigiriya from './sigiriya.png';
import polonnaruwa from './Polonnaruwa.png';

/*
import './App.css';
*/


import About_Us from './components/about_us.component';
import Accomodation from './components/accomodation.component';
import Transport from './components/transport.component';
import Botanical from './components/botanical.component';
import OutDoor from './components/outdoor.component';
import Ancient from './components/ancient.component';
import WildLife from './components/wildlife.component';


class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <h1 align="middle">Ayobowan!!</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand">WelCome!</Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/about_us'} className="nav-link">About_Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/accomodation'} className="nav-link">Accomodation</Link>
                  </li>

                  <li className="nav-item">
                    <Link to={'/botanical'} className="nav-link">Botanical</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/ancient'} className="nav-link">Ancient</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/wildlife'} className="nav-link">Wild Life</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/outdoor'} className="nav-link">OutDoor</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/transport'} className="nav-link">Contact Us</Link>
                  </li>



                </ul>

              </div>

            </nav> <br/>

            <td><img src ={wildlife} float="right" alt=" Wild Life" width="400" height="300"/></td>
            <td><img src ={Sigiriya} float="right" width="400" height="300"  margin_left="10px"/></td>
            <td><img src ={polonnaruwa} align="Bottom" alt=" Wild Life" width="400" height="300"/></td>

            <h2></h2> <br/>
            <Switch>



              <Route exact path = '/about_us' component = {About_Us}/>
              <Route exact path = '/accomodation' component = {Accomodation}/>
              <Route exact path = '/transport' component = {Transport}/>
              <Route exact path = '/botanical' component = {Botanical}/>
              <Route exact path = '/ancient' component = {Ancient}/>
              <Route exact path = '/outdoor' component = {OutDoor}/>
              <Route exact path = '/wildlife' component = {WildLife}/>

            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
