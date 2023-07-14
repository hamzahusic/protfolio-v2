import ButtonStructure from './components/BtnStructure';
import CV from './CV.pdf'
const About = () => {
    return ( 
        <section className='bg-[#0C0B0B] md:pt-[94px] md:pb-[100px] text-white py-10 md:py-0'>
            <div className='containter px-5' id='about-me'>
                <div className='flex items-center justify-between'>
                        <h2 className=' tracking-widest md:leading-[62px] md:tracking-[25px] md:font-[400] text-3xl md:text-[60px]'>ABOUT</h2>
                        <ButtonStructure content={"Download CV"} theme={"black"} href={CV} download={"CV - Hamza Husić"} title={"CV - Hamza Husic"}/>
                </div>
                <div className='md:flex md:py-24 justify-evenly items-center'> 
                        <div className='py-10 md:py-0 flex md:inline-block justify-center relative aboutImg md:ml-10 xl:ml-0'>
                            <img src={require("./images/profileAbout.png")} alt="" className='max-w-[250px] md:max-w-[350px] lg:max-w-none md:relative md:z-10'/>
                        </div>
                        <div className='secondaryFont text-justify md:px-5 lg:px-0'>
                            <h3 className='text-2xl md:text-[45px] font-thin tracking-wider'>So Who Am I?</h3>
                            <p className=' tracking-wide md:tracking-wider md:leading-7 lg:leading-[50px] py-5 md:py-0 md:pt-10 font-thin text-white/70 max-w-[600px] md:text-[17px] lg:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;