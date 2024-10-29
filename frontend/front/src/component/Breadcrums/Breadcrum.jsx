import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
// "Breadcrum" 应该是指 "breadcrumb"（面包屑）。在网页或应用中，breadcrumb（面包屑导航）是一种辅助导航，显示用户当前所在的位置以及之前的层级路径，帮助用户了解自己在网站结构中的位置，并快速返回到上级页面。
// 首页 > 产品 > 电子产品 > 手机
const Breadcrum = (props) => {
  const {product}=props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum