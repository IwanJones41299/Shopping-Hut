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
import fresh_food from './Components/Lists/fresh_food';
import fresh_foodUpdate from './Components/Lists/fresh_foodUpdate';
import frozen_food from './Components/Lists/frozen_food';
import frozen_foodUpdate from './Components/Lists/frozen_foodUpdate';
import bakery from './Components/Lists/bakery';
import bakeryUpdate from './Components/Lists/bakeryUpdate';
import dried_food from './Components/Lists/dried_food';
import dried_foodUpdate from './Components/Lists/dried_foodUpdate';
import drinks_confectionary from './Components/Lists/drinks_confectionary';
import drinks_confectionaryUpdate from './Components/Lists/drinks_confectionaryUpdate';
import toiletries_cleaning from './Components/Lists/toiletries_cleaning';
import toiletries_cleaningUpdate from './Components/Lists/toiletries_cleaningUpdate';
import pets from './Components/Lists/pets';
import petsUpdate from './Components/Lists/petsUpdate';



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
        <Route path="/fruit_veg/edit/" component={fruit_vegUpdate}/>

        <Route path="/fresh_food" component={fresh_food}/>
        <Route path="/fresh_food/edit" component={fresh_foodUpdate}/>

        <Route path="/frozen_food" component={frozen_food}/>
        <Route path="/frozen_food/edit" component={frozen_foodUpdate}/>

        <Route path="/bakery" component={bakery}/>
        <Route path="/bakery/edit" component={bakeryUpdate}/>

        <Route path="/dried_goods" component={dried_food}/>
        <Route path="/dried_goods/edit" component={dried_foodUpdate}/>

        <Route path="/drinks_confectonary" component={drinks_confectionary}/>
        <Route path="/drinks_confectonary/edit" component={drinks_confectionaryUpdate}/>

        <Route path="/household" component={toiletries_cleaning}/>
        <Route path="/household/edit" component={toiletries_cleaningUpdate}/>

        <Route path="/pets" component={pets}/>
        <Route path="/pets/edit" component={petsUpdate}/>
        
        
        
      </Router>
  );
}

export default App;