import ButtonStructure from './components/BtnStructure';
import CV from './CV.pdf'
const Skills = () => {
    return ( 
        <section className='bg-[#0C0B0B] pt-[94px] pb-[170px]'>
            <div className='containter text-white'>
                <div className='flex justify-between pb-24'>
                    <h2 className='text-[60px] leading-[62px] tracking-[25px] font-[400]'>SKILLS</h2>
                    <a href={CV} download="CV - Hamza Husić" target="_blank" rel="noreferrer noopener" ><ButtonStructure content={"Download CV"} img ={null} theme={"black"}/></a>
                </div>
                <div className='flex justify-between flex-wrap pt-[120px]'>
                    <div className="text-center max-w-[250px] secondaryFont flex flex-col items-center ">
                        <img src={require('./images/tmpSkill.png')} alt="" className='max-w-[128px]'/>
                        <h3 className='mt-[30px] mb-[17px] text-xl tracking-wide'>REACT JS</h3>
                        <p className='font-light leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                    <div className="text-center max-w-[250px] secondaryFont flex flex-col items-center ">
                        <img src={require('./images/tmpSkill.png')} alt="" className='max-w-[128px]'/>
                        <h3 className='mt-[30px] mb-[17px] text-xl tracking-wide'>NEXT JS</h3>
                        <p className='font-light leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                    <div className="text-center max-w-[250px] secondaryFont flex flex-col items-center ">
                        <img src={require('./images/tmpSkill.png')} alt="" className='max-w-[128px]'/>
                        <h3 className='mt-[30px] mb-[17px] text-xl tracking-wide'>TAILWINDCSS</h3>
                        <p className='font-light leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                    <div className="text-center max-w-[250px] secondaryFont flex flex-col items-center ">
                        <img src={require('./images/tmpSkill.png')} alt="" className='max-w-[128px]'/>
                        <h3 className='mt-[30px] mb-[17px] text-xl tracking-wide'>FIREBASE</h3>
                        <p className='font-light leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Skills;