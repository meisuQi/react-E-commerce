
import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
          Description
        </div>
        <div className="descriptionbox-nav-box fade">
          Reviews(122)
        </div>
      </div>
      <div className='descriptionbox-description'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae corporis tempore rem. Minus voluptas fugit maxime libero, rerum quibusdam deleniti, quos sunt rem laborum natus ea nam accusantium eligendi mollitia?</p>
        <p></p>
      </div>
    </div>
  )
}

export default DescriptionBox