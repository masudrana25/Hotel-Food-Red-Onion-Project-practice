import React from 'react';
import './Header.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../Photo/images/logo2.png'

const Header = () => {
  return (
    <div class="text-center" style={{backgroundColor:'whitesmoke',padding:'20px'}} >
      
        <div class="row">
          <div class="col-md-4 d-flex align-self-start">
            <a style={{paddingLeft:'80px'}} className='logoStyle' href="/home"><img src={logo} height='50px' alt="" /></a>
          </div>
          <div class="col-md-4 offset-md-4 aaaa d-flex align-self-center">
            <a style={{ padding: '10px', fontWeight: 'bold'}}  href="/cart"><AiOutlineShoppingCart size='30px'></AiOutlineShoppingCart></a>
            <a style={{ padding: '10px', textDecoration:'none',  color:'black',fontWeight: 'bold'}} href="/login">Login</a>
          <a style={{ padding: '10px', textDecoration: 'none', color: 'white', backgroundColor: 'red', borderRadius: '10px', fontWeight: 'bold'}} href="/signup">Sign Up</a>
          </div>
        </div>

      </div>
     
    
  );
};

export default Header;