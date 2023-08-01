import ButtonStructure from './components/BtnStructure';
import image from "./images/projectImg1.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

    /*
        <div className='min-w-[100%] sm:min-w-[50%] md:min-w-[31%] shadow-2xl projectsImg relative' key={index}>
                                <img src={require("./images/projectImg1.png")} alt="" className='relative z-10 min-w-full'/>
                                <div className='secondaryFont p-5 font-light relative z-10 bg-white'>
                                    <h3 className='text-[24px] tracking-wide leading-[30px]'>{project.projectName}</h3>
                                    <p className='mb-[31px] mt-[15px] tracking-[0.2px] leading-[22px] text-black/70'>{project.description}</p>
                                    <a href={project.linkToWebsite} className='text-white bg-[#0C0B0B] py-[10px] px-[30px] tracking-wide'>Visit website</a>
                                </div>
                            </div>
    */

    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 550 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 550, min: 0 },
        items: 1
    }
    };

    


    return ( 
        <section>
            <div className='containter py-10 md:py-0 md:pt-[94px] md:pb-[170px] px-5' id='projects'>
                <div className='flex justify-between pb-12 md:pb-24'>
                    <h2 className='tracking-widest md:leading-[62px] md:tracking-[25px] md:font-[400] text-3xl md:text-[60px]'>PROJECTS</h2>
                    <ButtonStructure content={"Let's chat"} img ={null} theme={"white"} href={"/#lets-chat"}/>
                </div>
                <Carousel responsive={responsive} >
                    {projects.map((project,index) => (
                        <div className='min-w-[50%] sm:min-w-[50%] md:min-w-[31%] shadow-2xl projectsImg relative m-4 sm:m-6' key={index}>
                            <img src={require("./images/projectImg1.png")} alt="" className='relative z-10 min-w-full'/>
                            <div className='secondaryFont p-5 font-light relative z-10 bg-white'>
                                <h3 className='text-[24px] tracking-wide leading-[30px]'>{project.projectName}</h3>
                                <p className='mb-[31px] mt-[15px] tracking-[0.2px] leading-[22px] text-black/70'>{project.description}</p>
                                <a href={project.linkToWebsite} className='text-white bg-[#0C0B0B] py-[10px] px-[30px] tracking-wide'>Visit website</a>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
     );
}
 
export default Projects;