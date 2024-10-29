import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}><img onClick=
      // 用于将页面滚动到顶部。具体来说，它会把窗口的滚动条设置到 (0, 0) 的位置，即页面的最左上角。
      {window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-price-new">
          {`$ ${props.new_price}`}
        </div>
        <div className="item-price-old">
           {`$ ${props.old_price}`}
        </div>
      </div>
    </div>
  )
}

export default Item