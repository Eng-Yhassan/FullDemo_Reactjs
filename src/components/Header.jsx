import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className='flex bg-primaryColor text-textColor px-10 py-6 justify-between items-center text-4xl'>

            <NavLink to="/">
                <h1 className='font-bold'>Shoping Center</h1>
            </NavLink>

            <div>
                <ul className='flex gap-10'>
                    <NavLink to="/">
                        <li> Home </li>
                    </NavLink>
                    <NavLink to="/Shop">
                        <li> Shop </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}
