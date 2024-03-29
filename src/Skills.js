import ButtonStructure from './components/BtnStructure';
import CV from './CV.pdf'
const Skills = () => {
    return ( 
        <section className='bg-[#0C0B0B]'>
            <div className='containter text-white px-5 md:pt-[94px] md:pb-[170px] pt-10 pb-20' id='service'>
                <div className='flex justify-between pb-24 md:pb-48'>
                    <h2 className='tracking-widest md:leading-[62px] md:tracking-[25px] md:font-[400] text-3xl md:text-[60px]'>SKILLS</h2>
                    <ButtonStructure content={"Download CV"} img ={null} theme={"black"} href={CV} download={"CV - Hamza Husić"} title={"CV - Hamza Husic"}/>
                </div>  
                <div className='flex justify-center items-end lg:justify-between flex-wrap gap-10 md:px-10 lg:px-0'>
                    <div className="text-center max-w-[250px] secondaryFont flex flex-col items-center ">
                        <img src={require('./images/react.png')} alt="" className='max-w-[128px]'/>
                        <h3 className='mt-[30px] mb-[17px] text-xl tracking-wide'>REACT JS</h3>
                        
                    </div>
                    <div className="text-center max-w-[250px] secondaryFont flex flex-col items-center ">
                        <img src={require('./images/nextjs.png')} alt="" className='max-w-[128px]'/>
                        <h3 className='mt-[30px] mb-[17px] text-xl tracking-wide'>NEXT JS</h3>
                       
                    </div>
                    <div className="text-center max-w-[250px] secondaryFont flex flex-col items-center ">
                        <img src={require('./images/tailwind.png')} alt="" className='max-w-[128px] pb-5'/>
                        <h3 className='mt-[30px] mb-[17px] text-xl tracking-wide'>TAILWIND CSS</h3>
                       
                    </div>
                    <div className="text-center max-w-[250px] secondaryFont flex flex-col items-center ">
                        <img src={require('./images/firebase.png')} alt="" className='max-w-[128px]'/>
                        <h3 className='mt-[30px] mb-[17px] text-xl tracking-wide'>FIREBASE</h3>
                       
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Skills;