const Contact = () => {
    return ( 
        <section className='bg-white pt-[94px] pb-[140px]'>
            <div className='containter text-black'>
                <h2 className='text-[60px] leading-[62px] tracking-[25px] font-[400] pb-24'>LET’S CHAT</h2>
        
                <div className='flex justify-between items-center pt-8'>
                    <img src={require('./images/contactImg.png')} alt="" />
                    <div>
                        <form action="" className='flex flex-col py-[38px] px-[45px] shadow-2xl w-[650px]'>
                            <label htmlFor="name" className='tracking-[5px]'>Name</label>
                            <input type="text" name="name" id="name" placeholder='John Doe' className='border-b-[1px] border-black secondaryFont tracking-wider font-thin outline-none py-3 px-2' />
                            <label htmlFor="email" className='pt-[40px] tracking-[5px]' >Email</label>
                            <input type="text" name="email" id="email" placeholder="example@yourdomain.com " className='border-b-[1px] border-black secondaryFont tracking-wider font-thin outline-none py-3 px-2'/>
                            <label htmlFor="message" className='pt-[40px] pb-[50px] tracking-[5px]'>Message</label>
                            <textarea type="text" name="message" id="message" placeholder="Hi there ..." rows="7"  className='border-[1px] border-black secondaryFont tracking-wider font-thin outline-none py-3 px-2 w-full' />
                            <button type='submit' className='bg-black text-white secondaryFont py-4 tracking-[5px] mt-[28px] max-w-[171px] text-xl'>SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;