import React from 'react';

const ListItem = props => {
    return (
    <>
    <li className="item_title">Product : {props.list.name}</li>
    <li className="item_title">Quantity : {props.list.quantity}</li>
    <li className="item_title">Added by : {props.list.user}</li>
    </>
    )
}

export default ListItem;