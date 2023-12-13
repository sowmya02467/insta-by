import { useState } from "react";
import React   from "react"
import { Col, Row, Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import signUpImg from'../assets/signup1.png';

export default function SignUp({setUser }){

    const [email, setEmail]= useState("");
    const navigate = useNavigate();


    return(
        <div style={{backgroundColor:"#283593", marginTop:"-2.5rem"}}>
<Row style={{padding:"20PX"}}>
        <Col style={{padding:60}}>
          <div>
                    <h1 style={{color:"white"}}>InstaBuy!</h1>
                    <h5 style={{color:"white"}}>the place you can get all you need</h5>
          
                  <Form>
                    <div style={{  marginTop:"3rem",width:"120%",display:"flex", justifyContent: "space-between"}}>
                        <Form.Group  style={{width:"49%"}} className="mb-3" controlId="formBasicEmail">
                             <Form.Control type="email"  onChange={(e)=> setEmail(e.currentTarget.value)}    placeholder="Enter email" />
                      </Form.Group>

                        <Form.Group style={{width:"49%"}} className="mb-3" controlId="formBasicPassword">
                             <Form.Control type="password" placeholder="Password" />
                         </Form.Group>
                         </div>
                         <Form.Group style={{width:"120%"}} className="mb-3" controlId="formBasicText">
                             <Form.Control type="text" placeholder="Enter  Full Name" />
                         </Form.Group>

                        <Button 
                        onChange={() => {
                            localStorage.setItem("userEmail",email);
                            setUser(email);
                          
                        }}
                        variant="primary" type="submit" style={{width:"75%", justifyContent:"center", marginTop:"2rem",marginLeft:"3rem", backgroundColor:"#283593", borderColor:"white", color:"white"}} onClick={() => navigate("/")}>
                           Join the  club
                        </Button>
                        <div style={{color:"white",marginTop:"2rem", marginLeft:"6rem"}}> 
                           Already a member!! <a   style={{color:"white"}}onClick={() => navigate("/login")}>click here</a>
                        </div>
                  </Form>
        </div>
     </Col>
               
                <Col><img src={signUpImg } alt=""  style={{height:"90vh", width:"45VW"}}/></Col>
    </Row>
        </div>
    )
}


