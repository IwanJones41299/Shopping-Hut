import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './hocs/PrivateRoute';
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
import fresh_food from './Components/Lists/fresh_food';
import frozen_food from './Components/Lists/frozen_food';
import bakery from './Components/Lists/bakery';
import dried_food from './Components/Lists/dried_food';
import drinks_confectionary from './Components/Lists/drinks_confectionary';
import toiletries_cleaning from './Components/Lists/toiletries_cleaning';
import pets from './Components/Lists/pets';



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
        <PrivateRoute path="/reset" accountRole={["Personal", "Family"]} component={ResetPassword}/>
        <PrivateRoute path="/dashboard" accountRole={["Personal", "Family"]} component={Dashboard} />
        <PrivateRoute path="/listMenu" accountRole={["Personal", "Family"]} component={ListMenu}/>
        <PrivateRoute path="/search" accountRole={["Personal", "Family"]} component={search}/>
        <PrivateRoute path="/contact" accountRole={["Personal", "Family"]} component={contactForm}/>

        {/* Lists */}
        <PrivateRoute path="/fruit_veg" accountRole={["Personal", "Family"]} component={fruit_veg}/>

        <PrivateRoute path="/fresh_food" accountRole={["Personal", "Family"]} component={fresh_food}/>

        <PrivateRoute path="/frozen_food" accountRole={["Personal", "Family"]} component={frozen_food}/>

        <PrivateRoute path="/bakery" accountRole={["Personal", "Family"]} component={bakery}/>

        <PrivateRoute path="/dried_goods" accountRole={["Personal", "Family"]} component={dried_food}/>

        <PrivateRoute path="/drinks_confectonary" accountRole={["Personal", "Family"]} component={drinks_confectionary}/>

        <PrivateRoute path="/household" accountRole={["Personal", "Family"]} component={toiletries_cleaning}/>

        <PrivateRoute path="/pets" accountRole={["Personal", "Family"]} component={pets}/>
        
      </Router>
  );
}

export default App;