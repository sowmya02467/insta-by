import { useEffect, useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {Badge, Button} from 'react-bootstrap'
import './App.css'
import line from"./assets/line.png";
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ProductGrally from './Components/ProductGrally';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';

function App() {
  const navigate = useNavigate();
  const [user, setUser]= useState("");
  const [cartItems, setCartItems] = useState({})

  useEffect(()=>{
    const userEmail = localStorage.getItem('userEmail')
   if(userEmail){
    setUser(userEmail) 
   }
  }, [])
   const handleAddToCart =(items)=>{
    setCartItems({...cartItems,...items});
   }

  return (
    
    <div>
       <Navbar className='instabuy-navbar'>
           <Navbar.Brand onClick={()=> navigate('/')} style={{fontWeight:670}}>
              <img src={line} alt="" style={{width:"100px"}} />
               <em style={{fontSize:"2rem"}}>INSTA BUY</em>
                 </Navbar.Brand>
                   <Navbar.Collapse className="justify-content-end">
                   {user &&  <Button>  cart &nbsp;{ object.keys(cartItems).length > 0 && (<Badge>{object.keys(cartItems).length > 0 } </Badge>)}</Button>}
                       <Button onClick={()=> navigate("/login")}   style={{marginRight:"2rem", width:"6rem"}}>
                        { user ? "login" : "logout" }   
                       </Button> 
                      </Navbar.Collapse>
                    
                  </Navbar>
   <Routes>
    <Route path='/' element={<Home user={user}/>}/>
    <Route path='/login' element={<Login setUser={setUser}/>}/>
    <Route path='/signup' element={<SignUp setUser={setUser}/>}/>
    <Route path='/Products' element={<ProductGrally />}/>
    <Route path='/Product/:id' element={<ProductDetails  handleAddToCart={handleAddToCart}  cartItems={cartItems}/>}/>
   <Route path='/cart' element={<Cart  cartItems={cartItems}/>}/>
  <Route path='/Checkout' element={<CheckOut />}/>
</Routes>
    </div>
    
  );
}

export default App
