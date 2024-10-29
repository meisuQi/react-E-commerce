import React, { useContext, useRef, useState } from 'react'
import './NavBar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import nav_dropdown from '../Assets/dropdown.png'
export const NavBar = () => {
  const[menu,setMenu]=useState('Shop');
  const{getTotalCartItems}=useContext(ShopContext);
  const menuRef=useRef();
  const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo}/>
        <p>SHOPPER</p>
        </div>
        <img className='nav-dropdown'onClick={dropdown_toggle}src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
          <li onClick={()=>setMenu('Shop')}><Link style={{textDecoration:'none',color:'#626262'}} to='/'>Shop</Link>{menu==='Shop'?<hr/>:<></>}</li>
          <li onClick={()=>setMenu('Men')}><Link style={{textDecoration:'none',color:'#626262'}} to='/mens'>Men</Link>{menu==='Men'?<hr/>:<></>}</li>
          <li onClick={()=>setMenu('Women')}><Link style={{textDecoration:'none',color:'#626262'}} to='/women'>Women</Link>{menu==='Women'?<hr/>:<></>}</li>
          <li onClick={()=>setMenu('Kids')}><Link style={{textDecoration:'none',color:'#626262'}} to='/kids'>Kids</Link>{menu==='Kids'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-cart-login">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon}/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
       
    </div>
  )
}
