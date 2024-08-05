import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
    <nav className='flex items-center justify-between mx-auto max-w-6xl h-20 p-3 '>
        <Link to={"/"}>
            <div className='ml-5'>
                <h1 className='text-red-700 text-2xl font-medium'>REACT REDUX SHOPPING CART</h1>
            </div>
        </Link>
        <ul className='mr-7 flex gap-5'>
            <Link to={"/"}>
                <li className='font-semibold '>Home</li>
            </Link>
            <Link to={"/cart"}>
                <li className='font-semibold'>Cart</li>
            </Link>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar