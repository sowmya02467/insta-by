import { useState } from "react";
import React  from "react"
import { Col, Row , Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import offerImg from'../assets/offer11.png';



export default function Login({setUser}){

    const [email, setEmail]= useState("");
    const navigate = useNavigate();

    return(
        <div style={{backgroundColor:"#283593"}}>
<Row style={{padding:"20PX"}}>
        <Col style={{padding:100}}>
          <div>
                    <h1 style={{color:"white"}}>InstaBuy!</h1>
                    <h5 style={{color:"white"}}>the place you can get all you need</h5>
          
                  <Form>
                    <div style={{  marginTop:"3rem",width:"120%",display:"flex", justifyContent: "space-between"}}>
                        <Form.Group  style={{width:"49%"}} className="mb-3" controlId="formBasicEmail">
                             <Form.Control type="email"  onChange={()=> setEmail(e.currentTarget,value)}    placeholder="Enter email" />
                      </Form.Group>
                       
                    
                        <Form.Group style={{width:"49%"}} className="mb-3" controlId="formBasicPassword">
                             <Form.Control type="password" placeholder="Password" />
                         </Form.Group>
                         </div>

                    

                        <Button onClick={() => {
                            localStorage.setItem("userEmail",email);
                            setUser(email);
                            navigate("/")
                        }}
                         variant="primary" type="submit" style={{width:"75%", justifyContent:"center", marginTop:"2rem",marginLeft:"3rem", backgroundColor:"#283593", borderColor:"white", color:"white"}}>
                           Start Shopping
                        </Button>
                        <div style={{color:"white",marginTop:"2rem", marginLeft:"6rem"}}> 
                            join the club,<a   style={{color:"white"}} onClick={()=> navigate('/signUp')}>click here</a>
                        </div>
                  </Form>
        </div>
     </Col>
               
                <Col><img src={offerImg}alt=""  style={{height:"90vh", width:"45VW"}}/></Col>
    </Row>
        </div>
    )
}


