const Footer = () => {
    const date = new Date();
    return ( 
        <footer className=" bg-[#0C0B0B] text-white">
            <div className="containter pt-[30px] md:pt-[40px] px-5">
                <div className="flex justify-between items-center border-b-[1px] border-white/50 pb-7 md:pb-9">
                    <img src={require("./images/hhWhite.png")} alt="" className="max-w-[42px] md:max-w-none"/>
                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/husicc.h/" target='_blank' rel="noreferrer"><img src={require("./images/instagramW.png")} alt="" /></a>
                        <a href="https://www.linkedin.com/in/hamza-husi%C4%87-53a20724b/" target='_blank' rel="noreferrer"><img src={require("./images/linkedinW.png")} alt="" /></a>
                        <a href="https://twitter.com/HHusicc" target='_blank' rel="noreferrer"><img src={require("./images/twitterW.png")} alt="" /></a>
                        <a href="https://github.com/hamzahusic" target='_blank' rel="noreferrer"><img src={require("./images/githubW.png")} alt="" /></a>
                    </div>
                </div>
                <p className="text-center py-5 md:py-[28px] tracking-[3px] text-white/50 text-[11px] sm:text-sm">Copyright © Hamza Husić {date.getFullYear()}. All Rights Reserved.</p>
            </div>
        </footer>
     );
}
 
export default Footer;