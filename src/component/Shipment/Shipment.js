import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Shipment = () => {
    const [orders , setOrders] = useState([]);
    const [loggedInUser ,setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch('http://localhost:5501/orderHistory?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            {
                orders.map(order => <li>{order.email}  {order.date}  {order.product}  {order.names} </li>)
            }
        </div>
    );
};

export default Shipment;