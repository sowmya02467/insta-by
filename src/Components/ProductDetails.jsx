
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Button, Card} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetails({ cartItems,handleAddToCart}){
    const location = useLocation();
    const {title, price, images, description, category,id} = location.state;

    const [othersProducts, setOthersProducts] = useState([])
    const navigate = useNavigate();





    // https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=20&offset=0

    useEffect(()=>{
        async function getData(){
            const response = await axios.get(` https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=20&offset=0`);
           
            setOthersProducts(response.data);

        }
        getData();
    }, [])










//   useEffect( ()=>{
//     // async function  getData(){
//     //     const response = await axios.get('https://fakestoreapi.com/products');
//     //     // console.log(response.data)
//     //     setOthersProducts(response.data);
//     // }
//   getData()
// }, [])
  



// async function  getData(){
//     const response = await axios.get('https://fakestoreapi.com/products');
//     // console.log(response.data)
//     setOthersProducts(response.data);
// }
    return(
        <div style={{padding: 20}}>
          <Row>
            <Col lg={2}>
                <div>
                    {images.map((image, index) =>{
                        return(
                            <img  key= {index} src={image} width={140} style={{marginBottom : 20, borderRadius:8}}/>
                        )
                    })}
                </div>
            </Col>


            <Col lg={4}>
           <div style={{padding: "2rem"}}>
            <img src={images[0]} width={280}  style={{marginBottom : 20, borderRadius:8}}/>
            <h3>{title}</h3>
            <h3 style={{color:"#00796B"}}>${price}</h3>
            <div>{description}</div>
            <Button style={{marginTop:20}} onClick={ () => {
                
            if(id in cartItems){
             const currentItem = cartItems[id];

             handleAddToCart({[id]: {title , price ,quantity: currentItem.quantity + 1}})
            }else{
                handleAddToCart({[id]: {title, price, quantity: 1}})
             }
              navigate('/cart');
            }}>ADD TO CART</Button>
           </div>
            </Col>


            <Col style={{marginLeft:"4rem"}}>
            <h3>others products in same category</h3>
                <div style={{display:"flex" ,flexWrap:"wrap"}}>
                
                    {othersProducts.map((product) =>{
                        if (product.id == id)return
                return(
             <Card  key={product.id}  style={{width:"5rem",border:"none",margin: 15, justifyContent:"space-around"}}>
                <Card.Img src={product.images[0]} />
                <Card.Title>{product.title.split(" ")[0]}</Card.Title>
                <Card.Text> ${product.price}</Card.Text>
                <Button onClick={()=> navigate(`/Product/${product.id}`, {state: product})}  style={{ justifyContent:"space-around"}}>VIEW ITEM</Button>
             </Card>
             
                )
            })}
            
                </div>
               
            
            </Col>
            
          </Row>
        </div>
    )
}
