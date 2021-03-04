import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.scss';
import { BrowserView, MobileView } from "react-device-detect";
import PrivateRoute from './hocs/PrivateRoute';
import UnprivateRoute from './hocs/UnprivateRoute';

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
        <UnprivateRoute exact path="/" component={Home} />
        <UnprivateRoute path="/login" component={Login} />
        <UnprivateRoute path="/register" component={Register} />
        <UnprivateRoute path="/contact" component={Contact} />
        <PrivateRoute path="/user_contact" accountRoles={["Personal", "Family"]} component={UserContact} />
        <PrivateRoute path="/menu" accountRoles={["Personal", "Family"]} component={Menu} />

        {/* List Screens */}
        <PrivateRoute path="/fruit_veg" accountRoles={["Personal", "Family"]} component={FruitVeg}/>
        <PrivateRoute path="/fresh_food" accountRoles={["Personal", "Family"]} component={FreshFood}/>
        <PrivateRoute path="/frozen_food" accountRoles={["Personal", "Family"]} component={FrozenFood}/>
        <PrivateRoute path="/bakery" accountRoles={["Personal", "Family"]} component={Bakery}/>
        <PrivateRoute path="/dried_goods" accountRoles={["Personal", "Family"]} component={DriedGoods}/>
        <PrivateRoute path="/drinks_confectonary" accountRoles={["Personal", "Family"]} component={DrinksConfectionary}/>
        <PrivateRoute path="/cleaning" accountRoles={["Personal", "Family"]} component={Cleaning}/>
        <PrivateRoute path="/pets" accountRoles={["Personal", "Family"]} component={Pets}/>

      </Router>
  );

}

export default App;