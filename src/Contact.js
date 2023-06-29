const Contact = () => {
    return ( 
        <section className='bg-white'>
            <div className='containter text-black  md:pt-[94px] md:pb-[140px] py-10 md:py-0 px-5'>
                <h2 className='tracking-widest md:leading-[62px] md:tracking-[25px] md:font-[400] text-3xl md:text-[60px]'>LET’S CHAT</h2>
        
                <div className='flex justify-between items-center pt-8 flex-col lg:flex-row'>
                    <img src={require('./images/contactImg.png')} alt="" className='max-w-[280px] md:max-w-[450px] lg:max-w-[400px] xl:max-w-none'/>
                    <div>
                        <form action="" className='formW flex flex-col py-10 lg:py-[38px] px-5 sm:px-10 lg:px-[45px] shadow-2xl w-[310px] sm:w-[380px] md:w-[650px]'>
                            <label htmlFor="name" className='tracking-[5px]'>Name</label>
                            <input type="text" name="name" id="name" placeholder='John Doe' className='border-b-[1px] border-black secondaryFont tracking-wider font-thin outline-none py-3 px-2' />
                            <label htmlFor="email" className='pt-[40px] tracking-[5px]' >Email</label>
                            <input type="text" name="email" id="email" placeholder="example@yourdomain.com " className='border-b-[1px] border-black secondaryFont tracking-wider font-thin outline-none py-3 px-2'/>
                            <label htmlFor="message" className='pt-[40px] pb-[50px] tracking-[5px]'>Message</label>
                            <textarea type="text" name="message" id="message" placeholder="Hi there ..." rows="7"  className='border-[1px] border-black secondaryFont tracking-wider font-thin outline-none py-3 px-2 w-full' />
                            <button type='submit' className='bg-black text-white secondaryFont py-4 tracking-[5px] mt-[28px] max-w-[171px] text-[18px] md:text-xl'>SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;