import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.scss';
import { BrowserView, MobileView } from "react-device-detect";

import MobileHeader from './Components/MobileCore/Header';
import BrowserHeader from './Components/BrowserCore/Header';
import Home from './Components/Screens/HomeScreen';
import Login from './Components/Screens/LoginScreen';
import Register from './Components/Screens/RegisterScreen';
import Contact from './Components/Screens/ContactScreen';
import UserContact from './Components/Screens/UserContractScreen';
import Menu from './Components/Screens/MenuScreen';
import FruitVeg from './Components/Screens/ListScreens/FruitVeg';
import FreshFood from './Components/Screens/ListScreens/FreshFood';
import FrozenFood from './Components/Screens/ListScreens/FrozenFood';
import Bakery from './Components/Screens/ListScreens/Bakery';
import DriedGoods from './Components/Screens/ListScreens/DriedGoods';
import DrinksConfectionary from './Components/Screens/ListScreens/DrinksConfectionary';
import Cleaning from './Components/Screens/ListScreens/Cleaning';
import Pets from './Components/Screens/ListScreens/Pets';


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
        <Route path="/contact" component={Contact} />
        <Route path="/user_contact" component={UserContact} />
        <Route path="/menu" component={Menu} />

        {/* List Screens */}
        <Route path="/fruit_veg" component={FruitVeg}/>
       <Route path="/fresh_food" component={FreshFood}/>
        <Route path="/frozen_food" component={FrozenFood}/>
        <Route path="/bakery" component={Bakery}/>
        <Route path="/dried_goods" component={DriedGoods}/>
        <Route path="/drinks_confectonary" component={DrinksConfectionary}/>
        <Route path="/cleaning" component={Cleaning}/>
        <Route path="/pets" component={Pets}/>

      </Router>
  );

}

export default App;