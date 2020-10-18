import React from 'react';

const ListItem = props => {
    return (
    <li className="item_title">{props.list.name}{props.list.quantity}</li>
    )
}

export default ListItem;