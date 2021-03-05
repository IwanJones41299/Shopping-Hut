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
// import Admin from './Components/Screens/AdminScreen';


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
        <PrivateRoute path="/user_contact" accountRoles={["Personal", "Family", "Admin"]} component={UserContact} />
        <PrivateRoute path="/menu" accountRoles={["Personal", "Family", "Admin"]} component={Menu} />
        {/* <PrivateRoute path="/admin" accountRoles={["Admin"]} component={Admin} /> */}

        {/* List Screens */}
        <PrivateRoute path="/fruit_veg" accountRoles={["Personal", "Family", "Admin"]} component={FruitVeg}/>
        <PrivateRoute path="/fresh_food" accountRoles={["Personal", "Family", "Admin"]} component={FreshFood}/>
        <PrivateRoute path="/frozen_food" accountRoles={["Personal", "Family", "Admin"]} component={FrozenFood}/>
        <PrivateRoute path="/bakery" accountRoles={["Personal", "Family", "Admin"]} component={Bakery}/>
        <PrivateRoute path="/dried_goods" accountRoles={["Personal", "Family", "Admin"]} component={DriedGoods}/>
        <PrivateRoute path="/drinks_confectonary" accountRoles={["Personal", "Family", "Admin"]} component={DrinksConfectionary}/>
        <PrivateRoute path="/cleaning" accountRoles={["Personal", "Family", "Admin"]} component={Cleaning}/>
        <PrivateRoute path="/pets" accountRoles={["Personal", "Family", "Admin"]} component={Pets}/>

      </Router>
  );

}

export default App;