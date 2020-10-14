import React, {useState,useContext,useEffect} from 'react';
import ListItem from './FV_Item';
import ListService from '../../Services/ListService';
import { AuthCotext } from '../../Context/AuthContext';

const FruitVegList = props => {
    const [list, setList] = useState({name : ""});
    const [FruitVegList, setFruitVegList] = useState([]);
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthCotext);
}