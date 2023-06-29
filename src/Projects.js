import ButtonStructure from './components/BtnStructure';

const Projects = () => {
    return ( 
        <section>
            <div className='containter py-10 md:py-0 md:pt-[94px] md:pb-[170px] px-5'>
                <div className='flex justify-between pb-12 md:pb-24'>
                    <h2 className='tracking-widest md:leading-[62px] md:tracking-[25px] md:font-[400] text-3xl md:text-[60px]'>PROJECTS</h2>
                    <ButtonStructure content={"Let's chat"} img ={null} theme={"white"}/>
                </div>

                <div className='flex justify-center xl:justify-between pt-0 md:pt-10 flex-wrap gap-5 md:gap-10'>
                    <div className='max-w-[320px] md:max-w-[350px] shadow-2xl projectsImg relative'>
                        <img src={require("./images/projectImg1.png")} alt="" className='relative z-10'/>
                        <div className='secondaryFont p-5 font-light relative z-10 bg-white'>
                            <h3 className='text-[24px] tracking-wide leading-[30px]'>Project Name</h3>
                            <p className='mb-[31px] mt-[15px] tracking-[0.2px] leading-[22px] text-black/70 max-w-[300px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                            <a href="/" className='text-white bg-[#0C0B0B] py-[10px] px-[30px] tracking-wide'>Visit website</a>
                        </div>
                    </div>

                    <div className='max-w-[320px] md:max-w-[350px] shadow-2xl projectsImg relative'>
                        <img src={require("./images/projectImg1.png")} alt="" className='relative z-10'/>
                        <div className='secondaryFont p-5 font-light relative z-10 bg-white'>
                            <h3 className='text-[24px] tracking-wide leading-[30px]'>Project Name</h3>
                            <p className='mb-[31px] mt-[15px] tracking-[0.2px] leading-[22px] text-black/70 max-w-[300px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                            <a href="/" className='text-white bg-[#0C0B0B] py-[10px] px-[30px] tracking-wide'>Visit website</a>
                        </div>
                    </div>
                    
                    <div className='max-w-[320px] md:max-w-[350px] shadow-2xl projectsImg relative'>
                        <img src={require("./images/projectImg1.png")} alt="" className='relative z-10'/>
                        <div className='secondaryFont p-5 font-light relative z-10 bg-white'>
                            <h3 className='text-[24px] tracking-wide leading-[30px]'>Project Name</h3>
                            <p className='mb-[31px] mt-[15px] tracking-[0.2px] leading-[22px] text-black/70 max-w-[300px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                            <a href="/" className='text-white bg-[#0C0B0B] py-[10px] px-[30px] tracking-wide'>Visit website</a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
     );
}
 
export default Projects;