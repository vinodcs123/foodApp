import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore menu list</h1>
            <p className='explore-menu-text'>Choosen from a diverse menu featuring a delectable array of dishes crafted with the fini=est ingrediants and culinary expertise. Our mission is to satisfy you cravings and elevate your dining experience , one delisious meal at a time</p>
            <div className='explore-menu-list'>
                {
                    menu_list.map((item, i) => {
                        return <div onClick={()=>{setCategory(prev=>prev===item.menu_name ? 'All' : item.menu_name)}} key={i} className='explore-menu-list-items'>
                            <img className={category===item.menu_name ? 'active' : ''}src={item.menu_image} alt='' />
                            <p>{item.menu_name}</p>
                        </div>
                    })
                }
            </div>
            <hr/>
        </div>
    )
}

export default ExploreMenu
