import ButtonStructure from './components/BtnStructure';
import CV from './CV.pdf'
const About = () => {
    return ( 
        <section className='bg-[#0C0B0B] pt-[94px] pb-[140px]'>
            <div className='containter text-white'>
                <div className='flex justify-between pb-24'>
                    <h2 className='text-[60px] leading-[62px] tracking-[25px] font-[400]'>ABOUT</h2>
                    <a href={CV} download="CV - Hamza Husić" target="_blank" rel="noreferrer noopener" ><ButtonStructure content={"Download CV"} img ={null} theme={"black"}/></a>
                </div>
                <div className='flex justify-between'>
                    <div className='aboutImg relative'>
                        <img src={require('./images/profileAbout.png')} alt="" className='relative z-10' />       
                    </div>
                    <div className='max-w-[600px] secondaryFont leading-[50px] tracking-[1px] font-thin'>
                        <h3 className='text-[45px] pb-[45px]'>So Who Am I?</h3>
                        <p className='text-white/70 text-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;