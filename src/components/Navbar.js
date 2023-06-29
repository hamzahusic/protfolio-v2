import { useState } from 'react';
import logo from '../images/hh.png'
import ButtonStructure from './BtnStructure';
const Navbar = () => {
    const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className='containter'>
      <div className='flex justify-between items-center py-5 md:py-[60px] px-5'>
        <img src={logo} alt="" className="max-w-[48px] md:max-w-none"/>
        <div className='hidden md:flex text-xl gap-[45px]'>
          <a href="/">Home</a>
          <a href="/">About Me</a>
          <a href="/">Projects</a>
          <a href="/">Service</a>
        </div>
        <div className='hidden md:block'>
            <ButtonStructure content={"Let's chat"} theme={"white"}/>
        </div>
        <button onClick={toggleMenu} className='tracking-wider md:hidden'>MENU</button>
      </div>
      {/* HAMBURGER LIST */}
      <div className={`md:hidden flex flex-col bg-[#0C0B0B] text-white text-center secondaryFont absolute left-0 z-50 right-0 ${menu ? 'max-h-screen' : 'max-h-0'} transition-max-height duration-700 ease-in-out overflow-hidden`}>
        <a href="/" className='py-5 hover:bg-white hover:text-black m-2 transition-all duration-500 ease-in-out'>Home</a>
        <a href="/" className='py-5 hover:bg-white hover:text-black m-2 transition-all duration-500 ease-in-out'>About Me</a>
        <a href="/" className='py-5 hover:bg-white hover:text-black m-2 transition-all duration-500 ease-in-out'>Projects</a>
        <a href="/" className='py-5 hover:bg-white hover:text-black m-2 transition-all duration-500 ease-in-out'>Service</a>
        <a href="/" className='py-5 border-2 border-white m-2 rounded-lg tracking-wider'>LET'S CHAT</a>
      </div>
    </nav>
  );

}
 
export default Navbar;