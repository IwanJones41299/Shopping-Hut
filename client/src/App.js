import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/navbar.jsx';
import Home from './Components/home.jsx';
import Login from './Components/login.jsx';
import Dashboard from './Components/dashboard.jsx';
import Register from './Components/register.jsx';
import ForgotPassword from './Components/forgottenPassword.jsx';
import ResetPassword from './Components/resetPassword.jsx';
import ListMenu from './Components/listMenu.jsx';
import search from './Components/search.jsx';
import contactForm from './Components/contactForm.jsx';
import fruit_veg from './Components/Lists/fruit_veg.jsx';
import fruit_vegUpdate from './Components/Lists/fruit_vegUpdate.jsx';
import FreshFoodsList from './Components/Lists/freshfoods-list';
import FreshFoodsEdit from './Components/Lists/freshfoods-edit';
import FreshFoodsCreate from './Components/Lists/freshfoods-create';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

function App() {
  return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/forgotPassword" component={ForgotPassword}/>
        <Route path="/reset" component={ResetPassword}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/listMenu" component={ListMenu}/>
        <Route path="/search" component={search}/>
        <Route path="/contact" component={contactForm}/>

        {/* Lists */}
        <Route path="/fruit_veg" component={fruit_veg}/>
        <Route path={"/edit/"} component={fruit_vegUpdate}/>

        {/* Lists V2 */}
        <Route path="/fresh_foods" exact component={FreshFoodsList} />
        <Route path="/fresh_foods/edit/:id" exact component={FreshFoodsEdit} />
        <Route path="/fresh_foods/create" exact component={FreshFoodsCreate} />
      </Router>
  );
}

export default App;