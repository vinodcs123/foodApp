import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({ id, name, image, price, description, category }) => {
  
  const {cartItems, addToCart, removeFromCart}=useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItems[id]
         ? 
        <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='' /> 
         : 
        <div className='food-item-counter'>
          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt='' />
          <p>{cartItems[id]}</p>
          <img onClick={()=>removeFromCart(id)}src={assets.remove_icon_red} alt='' /> 
        </div>}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt='' />

        </div>
        <div className="food-item-decs">
          {description}
        </div>
        <div className="food-item-price">
          $ {price}
        </div>
      </div>
    </div>
  )
}

export default FoodItem
