import { useEffect, useState } from 'react';
import ButtonStructure from './components/BtnStructure';
import image from "./images/projectImg1.png"
const Projects = () => {

    const projects = [
        {
            image:image,
            projectName : "Project Name",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            linkToWebsite : "/"
        },
        {
            image:image,
            projectName : "Project Name",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            linkToWebsite : "/"
        },
        {
            image:image,
            projectName : "Project Name",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            linkToWebsite : "/"
        },
        {
            image:image,
            projectName : "Project Name",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            linkToWebsite : "/"
        },
        {
            image:image,
            projectName : "Project Name",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            linkToWebsite : "/"
        },
    ]

    const [windowSize,setWindowSize] = useState(0);

    useEffect(() => {
        setWindowSize(window.innerWidth);
    },[])

    window.onresize = () => {
        if((window.innerWidth < 768 && windowSize>=768) || (window.innerWidth >= 768 && windowSize <768)){
            setCarousel(0);
            setWindowSize(window.innerWidth);
        }
        else if((window.innerWidth < 640 && windowSize>=640) || (window.innerWidth >= 640 && windowSize <640)){
            setCarousel(0);
            setWindowSize(window.innerWidth);
        }
    }

    const handleCarouselLeft = () => {
        if (window.innerWidth >= 768) {
            carousel === 0 ? setCarousel(Math.floor(projects.length/3)*100 * (-1)) : setCarousel(carousel+100)
        } else if (window.innerWidth >= 640) {
            carousel === 0 ? setCarousel(Math.floor(projects.length/2)*100 * (-1)) : setCarousel(carousel+100)
        } else {
            carousel === 0 ? setCarousel(Math.floor(projects.length/1)*100 * (-1)) : setCarousel(carousel+100)
        }
    };

    const handleCarouselRight = () => {
        
        if (window.innerWidth >= 768) {
            -carousel === Math.floor(projects.length/3)*100 ? setCarousel(0):setCarousel(carousel-100);
        } else if (window.innerWidth >= 640) {
            -carousel === Math.floor(projects.length/2)*100 ? setCarousel(0):setCarousel(carousel-100)  
        } else {
            -carousel >= (projects.length-1)*100 ? setCarousel(0) : setCarousel(carousel-100)
        }
    };

    const [carousel,setCarousel] = useState(0);
    return ( 
        <section>
            <div className='containter py-10 md:py-0 md:pt-[94px] md:pb-[170px] px-5' id='projects'>
                <div className='flex justify-between pb-12 md:pb-24'>
                    <h2 className='tracking-widest md:leading-[62px] md:tracking-[25px] md:font-[400] text-3xl md:text-[60px]'>PROJECTS</h2>
                    <ButtonStructure content={"Let's chat"} img ={null} theme={"white"} href={"/#lets-chat"}/>
                </div>
                <div className='relative p-5 lg:p-10 overflow-hidden'>
                    <button onClick={handleCarouselLeft} className='absolute left-0 z-20 top-[50%] translate-y-[-50%] max-w-[64px]'><img src={require("./images/next.png")} alt='' className=' rotate-180'/></button>
                    <div className={`flex pt-0 md:pt-5 gap-5 lg:gap-12 transition-transform duration-500 ease-in-out translate-x-[${carousel}%] `}>
                        {projects.map((project,index) => (
                            <div className='min-w-[100%] sm:min-w-[50%] md:min-w-[31%] shadow-2xl projectsImg relative' key={index}>
                                <img src={require("./images/projectImg1.png")} alt="" className='relative z-10 min-w-full'/>
                                <div className='secondaryFont p-5 font-light relative z-10 bg-white'>
                                    <h3 className='text-[24px] tracking-wide leading-[30px]'>{project.projectName}</h3>
                                    <p className='mb-[31px] mt-[15px] tracking-[0.2px] leading-[22px] text-black/70'>{project.description}</p>
                                    <a href={project.linkToWebsite} className='text-white bg-[#0C0B0B] py-[10px] px-[30px] tracking-wide'>Visit website</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleCarouselRight} className='z-20 absolute right-0 top-[50%] translate-y-[-50%] max-w-[64px]'><img src={require("./images/next.png")} alt=''/></button>
                </div>

            </div>
        </section>
     );
}
 
export default Projects;