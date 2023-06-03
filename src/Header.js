import ButtonStructure from './components/BtnStructure';

const Header = () => {
    return ( 
        <header className='containter flex items-end pt-10 pb-36'>
          <div>
            <p className='secondaryFont leading-[25px] tracking-[2px] text-[22px] mb-3'>Front-end developer</p>
            <h1 className='text-[55px] leading-[62px] tracking-[1px] font-[800] max-w-[650px]'>Creating low code solutions in modern way</h1>
            <p className='leading-[25px] text-black/50 tracking-[1px] text-[16px] my-[40px] max-w-[530px] secondaryFont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>

            <div className='flex gap-6'>
                <ButtonStructure content={"Hire Me"} img={"../images/arrow-right.png"} theme={"black"}/>
                <ButtonStructure content={"Projects"} img={"../images/forward.png"} theme={"white"}/>
            </div>

            <div className='flex gap-9 mt-16'>
                <a href="https://www.instagram.com/husicc.h/" target='_blank' rel="noreferrer"><img src={require("./images/instagram.png")} alt="" className='max-w-[42px]'/></a>
                <a href="https://www.linkedin.com/in/hamza-husi%C4%87-53a20724b/" target='_blank' rel="noreferrer"><img src={require("./images/linkedin.png")} alt="" className='max-w-[42px]'/></a>
                <a href="https://twitter.com/HHusicc" target='_blank' rel="noreferrer"><img src={require("./images/twitter.png")} alt="" className='max-w-[42px]'/></a>
                <a href="https://github.com/hamzahusic" target='_blank' rel="noreferrer"><img src={require("./images/github.png")} alt="" className='max-w-[42px]'/></a>
            </div>

          </div>

          <div className='relative'>
            <img src={require('./images/profile.png')} alt="" />
            <img src={require('./images/Rectangle.png')} alt="" className='absolute bottom-5 right-[-10px] z-[-1]' />
          </div>
        </header>
     );
}
 
export default Header;