import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { styles } from '../../styles'
// import { navLinks } from '../../constants'
import { menu, close } from '../../assets/assets'
import logo from '../../assets/logocolor.png' 

const navLinks = [

];


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggelMenu, setToggelMenu] = useState(false);
  return (
    <nav className={` ${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>
      <div className='flex items-center w-full mx-auto max-w-7xl'>
        <Link 
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }} 
        >
           <img src={logo} alt='logo' style={{ width: '50px', height: '50px'   }} />
           <p className=' text-white hidden sm:block cursor-pointer text-[18px] font-bold'>
            Sunera's <span className='hidden sm:block'>|Portfolio</span>
           </p>
        </Link>
        <ul className='flex-row hidden gap-16 list-none sm:flex pl-[30%] '>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`cursor-pointer font-medium text-lg  ${active === link.title ? "text-white" : "text-gray-300"} hover:text-yellow-50 font-medium cursor-pointer `}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

        </ul>
        <div className='flex items-center items-end justify-end flex-1 sm:hidden'>
          <img src={toggelMenu ? close : menu} alt='menu' className='cursor-pointer w-[28px] h-[28px] object-contain'
            onClick={()=> setToggelMenu(!toggelMenu)}
          />

          <div className= {`${!toggelMenu? ' hidden' : 'flex' }
            p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl  
        `}>
            <ul className='flex flex-col items-start justify-end gap-4 list-none '>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`cursor-pointer font-medium ${active === link.title ? "text-white" : "text-gray-300"}   font-serif font-medium cursor-pointer `}
              onClick={() => {
                setToggelMenu(!toggelMenu)
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

        </ul>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
