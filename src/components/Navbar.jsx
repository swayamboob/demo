import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import logo from "../../images/logo.png"
import React, { useContext } from 'react';
import { useState } from 'react';
import { TransactionContext } from '../context/TransactionContex';
const NavbarItem = ({title,classProps})=>{
    
    const handleClickScroll = () => {
        const element = document.getElementById(title);
        if (element) {
          //  Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return(
        <li className={`mx-4 px-2 cursor-pointer hover:rounded-full hover:border  ${classProps}`} onClick={handleClickScroll}>
               {title} 
        </li>
    )
}
const Navbar= ()=>{
    const [toggleMenu,setToggleMenu]= useState(false);
    const {connectWallet,currentAccount}=useContext(TransactionContext);
    return (
         <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-64 cursor-pointer"/>
            </div>
            <ul className="text-white  md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["News", "Crypto","Transactions"].map((item,index)=>(
                    <NavbarItem key={item+index} title={item}/>
                    ))}
                    { !currentAccount && (
                        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer  hover:bg-[#2546bd]" onClick={()=>{connectWallet()}}>
                        Login
                    </li>
                    )

                    }
            </ul>
            <div className="flex relative">
                {toggleMenu?
                <AiOutlineClose fontSize={28} className="text-white cursor-pointer md:hidden" onClick={()=>{setToggleMenu(false)}} />
                :<HiMenuAlt4 fontSize={28} className="text-white cursor-pointer md:hidden" onClick={()=>{setToggleMenu(true)}} />    
            }
            { toggleMenu &&
            (<ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in 
            ">
                <li className='text-xl w-full my-2'>
                    <AiOutlineClose onClick={()=>{setToggleMenu(false)}}/>
                </li>
                {["News", "Crypto","Transactions"].map((item,index)=>(
                    <NavbarItem key={item+index} title={item}   classProps="my-4 text-lg  mx-8"/>
                    ))}
                {
                    !currentAccount && (<li className="bg-[#2952e3] py-2 px-7 my-2 mx-4 rounded-full cursor-pointer hover:border-white hover:bg-[#2546bd] hover:border-2 " onClick={()=>{connectWallet()}}>
                    Login
                </li> )
                }
            </ul>)
            }
            </div>
         </nav>
    )
}
export default Navbar;