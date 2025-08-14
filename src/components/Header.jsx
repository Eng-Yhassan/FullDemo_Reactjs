import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
export default function Header() {
    const ProductsCalculate= useSelector((e)=>e.CartCount.item)
    return (
        <div className='flex bg-primaryColor text-textColor px-10 py-6 justify-between items-center text-4xl'>
            <NavLink to="/">
                <h1 className='font-bold'>Shoping Center</h1>
            </NavLink>
            <div className='flex gap-10 items-center'>
                <ul className='flex gap-10'>
                    <NavLink to="/">
                        <li> Home </li>
                    </NavLink>
                    <NavLink to="/Shop">
                        <li> Shop </li>
                    </NavLink>
                </ul>
                <NavLink to="/cart">
                <i className="fa-solid fa-cart-shopping text-2xl"><span className='absolute top-4 text-[16px]'>({ProductsCalculate.length})</span></i>
                </NavLink>
            </div>
        </div>
    )
}
