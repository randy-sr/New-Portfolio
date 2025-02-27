import React, { useState } from 'react'
import { Link } from 'react-scroll/modules'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine, RiCloseFill, RiMenu4Line } from 'react-icons/ri'



interface NavItem {
    label : string
    page : string
}

const NAV_ITEMS : Array<NavItem> = [
    { 
        "label"  : "Home",
        "page"   : "home", 
    },
    { 
        "label"  : "About",
        "page"   : "about", 
    },
    { 
        "label"  : "Projects",
        "page"   : "projects", 
    },
]

const Navbar = () => {

    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [ navbar , setNavbar ] = useState(false)

  return (
    <header className='w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600'>
        <div className='justify-between md:items-center md:flex'>
            <div>
                <div className='flex items-center justify-between py-3'>
                    <div className='md:py-3 md:block'>
                        <h2 className='text-2xl font-bold text-cyan-800'>Randy Sierra</h2>   
                    </div>
                    <div className='md:hidden'>
                        <button
                            onClick={() => {setNavbar(!navbar)}}
                        >
                            {/* {navbar ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>} */}
                            { navbar ? <RiCloseFill color="black" />  : <RiMenu4Line color="black"/>}
                        </button>
                    </div>
                </div> 
            </div>
            <div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? 'block':'hidden'
                    }`}
                >
                    <div className='items-center justify-center space-y-8 md:flex md:space-x-6 align-middle md:space-y-0'>
                        {NAV_ITEMS.map( (item, idx) => {
                            return (
                                <Link
                                    key={idx}
                                    to={item.page}
                                    className={"block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"}
                                    activeClass='active'
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={() => setNavbar(!navbar)}
                                >{item.label}</Link>
                            )
                        })}
                        {
                            currentTheme === "dark" ? (
                                <button 
                                    className='bg-slate-100 p-2 rounded-xl'
                                    onClick={() => setTheme("light")}
                                >
                                    <RiSunLine color="black"/>
                                </button>
                            ) : (
                                <button 
                                    className='bg-slate-100 p-2 rounded-xl'
                                    onClick={() => setTheme("dark")}
                                >
                                    <RiMoonFill />
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
            
            
        </div>
    </header>
  )
}

export default Navbar