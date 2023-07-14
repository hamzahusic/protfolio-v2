import ButtonStructure from './components/BtnStructure';

const Header = () => {
    return ( 
        <header className='containter px-5 py-5 md:pb-[120px] md:flex md:items-start lg:items-end md:flex-row-reverse'>

          <div className='flex justify-center md:block'>
            <div className='relative max-w-[220px] md:max-w-none rounded-full md:rounded-none overflow-hidden md:overflow-visible h-56 md:h-full p-7 md:p-0 bg-[#0C0B0B] md:bg-transparent '>
                <img src={require('./images/profile.png')} alt="" className='relative z-20'/>
                <img src={require('./images/Rectangle.png')} alt="" className='hidden md:block absolute z-10 right-[-17px] bottom-[30px]'/>
            </div>
          </div>

          <div className='secondaryFont text-center md:text-left py-5'>
            <h2 className='text-lg md:text-[22px] tracking-wider'>Webflow / Front-end developer</h2>
            <h1 className='text-[25px] md:text-[52px] md:leading-[62px] font-bold primaryFont py-2 md:pt-[11px] md:pb-[34px] max-w-[650px]'>Creating low code solutions in modern way</h1>
            <p className='max-w-[530px] leading-[24px] tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
            <div className='flex flex-col mt-5 md:mt-10 gap-3 md:flex-row'>
              <ButtonStructure content={"Hire Me"} theme={"Wblack"} img={require('./images/arrow-right.png')} href={"#lets-chat"}/>
              <ButtonStructure content={"Projects"} theme={"white"} img={require('./images/forward.png')} href={"#projects"}/>
            </div>
            <div className='flex gap-[34px] justify-center md:justify-start pt-5 md:pt-[70px]'>
              <a href="https://www.instagram.com/husicc.h/" target='_blank' rel="noreferrer"><img src={require("./images/instagram.png")} alt="" className='max-w-[42px]'/></a>
              <a href="https://www.linkedin.com/in/hamza-husi%C4%87-53a20724b/" target='_blank' rel="noreferrer"><img src={require("./images/linkedin.png")} alt="" className='max-w-[42px]'/></a>
              <a href="https://twitter.com/HHusicc" target='_blank' rel="noreferrer"><img src={require("./images/twitter.png")} alt="" className='max-w-[42px]'/></a>
              <a href="https://github.com/hamzahusic" target='_blank' rel="noreferrer"><img src={require("./images/github.png")} alt="" className='max-w-[42px]'/></a>
            </div>
          </div>

        </header>
     );
}
 
export default Header;