import logo from '../images/hh.png'
import ButtonStructure from './BtnStructure';
const Navbar = () => {
    return ( 
        <nav className="containter flex justify-between items-center py-[52px]">
            <img src={logo} alt="logo" />
            <div className='text-[20px] flex gap-[45px] tracking-widest'>
                <a href="/">Home</a>
                <a href="/">About Me</a>
                <a href="/">Projects</a>
                <a href="/">Skills</a>
            </div>
            <ButtonStructure content={"Let's chat"} img={null} theme={"white"}/>
        </nav>
     );
}
 
export default Navbar;