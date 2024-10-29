import { createContext, useState } from "react";
import all_product from '../component/Assets/all_product.js'
export const ShopContext=createContext(null);
const getDefaultCart=()=>{
  let cart={};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index]=0;
  }
  return cart;
 }
 const ShopContextProvider=(props)=>{
  //这里的 cartItems 被认为是一个对象（或者类数组的对象），它的属性是商品的 itemId，值是该商品在购物车中的数量。
  const[cartItems,setCartItems]=useState(getDefaultCart());
  
  const  addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems);
  }
  const  removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
    //累计cart里的商品总额
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    // 遍历购物车中的每个商品
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // 查找与该购物车项目 ID 对应的商品
        let itemInfo = all_product.find((product) => product.id === Number(item));
        
        // 确保找到了该商品并累加总金额
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };
  //增加cart数量
  const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem+=cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart}
    return <ShopContext.Provider value={contextValue}>
      {props.children}  
     </ShopContext.Provider>
}
export default ShopContextProvider;