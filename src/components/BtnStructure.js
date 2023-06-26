
const ButtonStructure = ({content,img,theme}) => {
    return ( 
        <a href="/" className="inline-block">
            <div className={`flex justify-center border-[1px] ${theme === "white" ? "border-black bg-white text-black": "border-black bg-[#0C0B0B] text-white"} flex py-[13px] pl-[42px] ${img ? "pr-[35px]" : "pr-[42px]"} text-[20px] tracking-widest items-center`}>
                <button className={img && "pr-[14px] tracking-wider"}>
                    {content}
                </button>
                <img src={img} alt="" className='max-w-[22px]'/>
            </div>
        </a>
     );
}
 
export default ButtonStructure;