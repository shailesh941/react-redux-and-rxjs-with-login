import * as React from 'react'
import { Link,NavLink } from "react-router-dom";

const LeftSideBar = () =>{

    return(
        <div className='side-menu'>
            <div className='logo-section'>Hello</div>
            <div className='menu-list'>
                <ul>
                    <li><NavLink to="/users" className={({ isActive }) => isActive? "active": ''}>Users</NavLink></li>
                    <li><NavLink to="/products" className={({ isActive }) => isActive? "active": ''}>Product</NavLink></li>
                    <li><NavLink to="/category" className={({ isActive }) => isActive? "active": ''}>Category</NavLink></li>
                    <li><NavLink to="/pos" className={({ isActive }) => isActive? "active": ''}>POS</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default LeftSideBar;