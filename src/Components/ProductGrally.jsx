
import axios from "axios"
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProductGrally(){

    const[products, setProducts]= useState([]);
    const navigate = useNavigate();


    // https://api.escuelajs.co/api/v1/products?offset=0&limit=20
    useEffect( ()=>{
        async function  getProduct(){
            const response = await axios.get(' https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
            // console.log(response.data)
            setProducts(response.data);
        }
      getProduct()
    }, [])


    return(
        <div style={{padding: 35}}>
        <h3 style={{color:"blue"}}>SELECT THE PRODUCTS</h3>

          <div style={{display:'flex',flexWrap:"wrap" }}>

            {products.map((product) =>{
                return(
             <Card  key={product.id}  style={{width:"12rem",border:"none",margin: 20}}>
                <Card.Img src={product.images[0]}   />
                <Card.Title>{product.title}</Card.Title>
                <Card.Text> ${product.price}</Card.Text>
                <Button onClick={()=> navigate(`/Product/${product.id}`, {state: product})}  style={{width:120}}>VIEW ITEM</Button>
             </Card>
             
                )
            })}
            
        </div>
        </div>
    )
}
