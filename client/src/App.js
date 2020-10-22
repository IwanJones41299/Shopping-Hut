import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/home';
import Login from './Components/login';
import Dashboard from './Components/dashboard';
import Register from './Components/register';
import ListMenu from './Components/listMenu';
import search from './Components/search';
import contactForm from './Components/contactForm';
import fruit_veg from './Components/Lists/fruit_veg';
import fruit_vegUpdate from './Components/Lists/fruit_vegUpdate';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

function App() {
  return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/listMenu" component={ListMenu}/>
        <Route path="/search" component={search}/>
        <Route path="/contact" component={contactForm}/>

        {/* Lists */}
        <Route path="/fruit_veg" component={fruit_veg}/>
        <Route path={"/edit/"} component={fruit_vegUpdate}/>
      </Router>
  );
}

export default App;