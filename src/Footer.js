const Footer = () => {
    return ( 
        <footer className=" bg-[#0C0B0B] text-white">
            <div className="containter pt-[40px]">
                <div className="flex justify-between items-center border-b-[1px] border-white/50 pb-9">
                    <img src={require("./images/hhWhite.png")} alt="" />
                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/husicc.h/" target='_blank' rel="noreferrer"><img src={require("./images/instagramW.png")} alt="" /></a>
                        <a href="https://www.linkedin.com/in/hamza-husi%C4%87-53a20724b/" target='_blank' rel="noreferrer"><img src={require("./images/linkedinW.png")} alt="" /></a>
                        <a href="https://twitter.com/HHusicc" target='_blank' rel="noreferrer"><img src={require("./images/twitterW.png")} alt="" /></a>
                        <a href="https://github.com/hamzahusic" target='_blank' rel="noreferrer"><img src={require("./images/githubW.png")} alt="" /></a>
                    </div>
                </div>
                <p className="text-center block py-[28px] tracking-[3px] text-white/50 text-sm">Copyright © Hamza Husić 2023. All Rights Reserved.</p>
            </div>
        </footer>
     );
}
 
export default Footer;