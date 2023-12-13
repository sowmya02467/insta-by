
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import  women111 from "../assets/women111.png";
import men from '../assets/men.png';
import men333 from '../assets/men333.png';

import {Button} from 'react-bootstrap'

import egaleImg from '../assets/egale.png';
import flutterImg from '../assets/flutter.png';
import hashImg from '../assets/hash.png';
import lineImg from '../assets/line.png';
import egaleoneImg from '../assets/egale.png';



export default function Home({User}){
    const navigate = useNavigate();
     
    const handleCTAClick = () =>{
        if(User){
            navigate("/login");
        }
        else{
            navigate("/products");
            }
    }

    return(
        <div className='home-container' style={{padding:"45px 0"}}>
            <Carousel>
                <Carousel.Item>
                    <Row>
                    <Col> 
                    <div style={{padding:"80px"}}>
                        <h1 style={{ fontWeight:700}}> <i>shope With Ulmost </i></h1>
                        <h1 style={{color:"#0097A7", fontWeight:700}} ><i> STYLE</i> </h1>
                        <h3>shope ith lates trenfdy cloths</h3>
                        <div>
                            <Button style={{width:250}} onClick={handleCTAClick}> Browser products</Button>
                        </div>
                        <div>
                            <h4> Products are  aviable from :</h4>
                           <img src={egaleImg} alt=""  style={{height:"50px"}}/>
                           <img src={ flutterImg } alt="" style={{height:"50px"}} />
                           <img src={hashImg } alt="" style={{height:"50px"}} />
                           <img src={lineImg} alt="" style={{height:"50px"}} />
                           <img src={egaleoneImg} alt=""  style={{height:"50px"}}/>
                        </div>
                   </div>
                   </Col>
                       
                    <Col>  <img src={women111} alt="" style={{ marginTop:"-8rem",height:"35rem", width:'33rem'}} /></Col>
                       
                       
                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                    <Row>
                    <Col>
                    <div style={{padding:"80px"}}>
                        <h1 style={{ fontWeight:700}}> <i>shope With Ulmost </i></h1>
                        <h1 style={{color:"#0097A7", fontWeight:700}} ><i> STYLE</i> </h1>
                        <h3>shope ith lates trenfdy cloths</h3>
                        <div>
                            <Button style={{width:250}} onClick={handleCTAClick}> Browser products</Button>
                        </div>
                        <div>
                            <h4> Products are aviable from :</h4>
                            <img src={egaleImg} alt=""  style={{height:"50px"}}/>
                           <img src={ flutterImg } alt="" style={{height:"50px"}} />
                           <img src={hashImg } alt="" style={{height:"50px"}} />
                           <img src={lineImg} alt="" style={{height:"50px"}} />
                           <img src={egaleoneImg} alt=""  style={{height:"50px"}}/>
                        </div>
                   </div>
                   </Col>
                       
                    <Col>  <img src={men} alt="" style={{ marginTop:"-8rem",height:"35rem", width:'33rem'}} /></Col>
                       
                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                    <Row>
                    <Col> 
                    <div style={{padding:"80px"}}>
                        <h1 style={{ fontWeight:700}}> <i>shope With Ulmost </i></h1>
                        <h1 style={{color:"#0097A7", fontWeight:700}} ><i>Discount</i> </h1>
                        <h3>shope ith lates trenfdy cloths</h3>
                        <div>
                            <Button style={{width:250}}  onClick={handleCTAClick}> Browser products</Button>
                        </div>
                        <div>
                            <h4> Products are aviable from :</h4>
                            <img src={egaleImg} alt=""  style={{height:"50px"}}/>
                           <img src={ flutterImg } alt="" style={{height:"50px"}} />
                           <img src={hashImg } alt="" style={{height:"50px"}} />
                           <img src={lineImg} alt="" style={{height:"50px"}} />
                           <img src={egaleoneImg} alt=""  style={{height:"50px"}}/>
                        </div>
                   </div>
                   </Col>
                       
                    <Col>  <img src={men333} alt="" style={{ marginTop:"-8rem",height:"35rem", width:'33rem'}} /></Col>
                       
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}



