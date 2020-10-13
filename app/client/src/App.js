import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/home';
import Login from './Components/login';
import Dashboard from './Components/dashboard';
import Register from './Components/register';
import ListMenu from './Components/listMenu';
import search from './Components/search';
import fruit_vegList from './Components/ListCategories/fruit_veg-list';
import fruit_vegEdit from './Components/ListCategories/fruit_veg-edit';
import fruit_vegCreate from './Components/ListCategories/fruit_veg-create';
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
        {/* Fruit & Veg List */}
        <Route path="/fruit_veg-list" exact component={fruit_vegList}/>
        <Route path="/fruit_veg_edit/:id" component={fruit_vegEdit}/>
        <Route path="/fruit_veg_create" component={fruit_vegCreate}/>
      </Router>
  );
}

export default App;