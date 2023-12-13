import React, { useEffect, useState } from "react";
import { Table,Col, Row, Button} from "react-bootstrap";
import CardImg from "../assets/cart.png";
import { useNavigate } from "react-router-dom";
export default function Cart({cartItems}){
    console.log(cartItems)
    const[totalPrice, setTotalPrice] =  useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const navigate =  useNavigate()
    useEffect(()=>{
        let tempPrice= 0;
        let tempQuantity = 0;
     Object.keys(cartItems).map((cartItemId) => {
        const details = cartItems[cartItemId];
        tempQuantity   +=  details.quantity;
        tempPrice  +=  details.quantity * details.price;
     })
     setTotalQuantity (tempQuantity);
     setTotalPrice  (tempPrice);
    }, [])
    return(
        <div>
            <Row>
            <Col>
                <h3>Your cart</h3>
           
           <Table style={{margin: 40}}>
           <thead>
                <tr>
               <th>NAME</th>
               <th>QUALITY</th>
               <th> PRICE</th>
                </tr>
                
            </thead>
            <tbody>
                {Object.keys(cartItems).map((cartItemId) => {
                    const itemDetails = cartItems[cartItemId];
                    return (
                        <tr>
                            <td>{itemDetails.title}</td>
                            <td>{itemDetails.quantity}</td>
                            <td>{itemDetails.quantity * itemDetails.price}</td>
                        </tr>
                    )
                })}
                <tr>
                    <td>Total  </td>
                    <td>{totalQuantity}</td>
                    <td>{totalPrice}</td>
                </tr>
            </tbody>
           
           </Table>
           <Button onClick={()=> navigate('/CheckOut')}  style={{margin: 40}}>CHECK OUT</Button>
               </Col> 
            
            <Col>
            <img src={CardImg}  style={{marginLeft:"6rem"}}/>
            </Col>
          </Row>
        </div>
    )
}