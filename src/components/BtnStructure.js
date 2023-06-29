
const ButtonStructure = ({content,img,theme,href,download,title}) => {
    return ( 
        <a href={href} className="inline-block" download={download} title={title}>
            <div className={`flex justify-center border-[1px] ${theme === "white" ? "border-[#0C0B0B] bg-white text-black": theme==="black" ? "border-white bg-[#0C0B0B] text-white" : "border-[#0C0B0B] bg-[#0C0B0B] text-white"} flex py-[13px] pl-[30px] md:pl-[42px] ${img ? "md:pr-[35px] pr-[20px]" : "md:pr-[42px] pr-[30px]"} text-[18px] md:text-[20px] tracking-widest items-center`}>
                <button className={img && "pr-[14px] tracking-wider"}>
                    {content}
                </button>
                <img src={img} alt="" className='max-w-[22px]'/>
            </div>
        </a>
     );
}
 
export default ButtonStructure;