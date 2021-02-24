import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.scss';
import { BrowserView, MobileView } from "react-device-detect";

import MobileHeader from './Components/MobileCore/Header';
import BrowserHeader from './Components/BrowserCore/Header';
import Home from './Components/Screens/HomeScreen';
import Login from './Components/Screens/Login';
import Register from './Components/Screens/Register';


function App() {
  return (
      <Router>
        <BrowserView>
          <BrowserHeader />
        </BrowserView>
        <MobileView>
          <MobileHeader />
        </MobileView>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
  );

}

export default App;