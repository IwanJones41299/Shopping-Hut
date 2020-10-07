import React from 'react';
import Navbar from './Components/navbar';
// import Footer from './Components/footer';
import Home from './Components/home';
import Login from './Components/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

function App() {
  return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
      </Router>
  );
}

export default App;