const ContactUS = () =>{
    return(
        <div className="h-fulll h-screen bg-no-repeat bg-cover bg-homepage-img-2 flex justify-center items-center">  
            <div class="grid grid-cols-1 md:grid-cols-6 gap-3" data-aos="fade-up">
                <div class="col-span-1 md:col-start-1 md:col-span-3">
                    <div class="m-10">
                        <h1 class="text-white font-kanit text-center text-2xl md:text-2xl font-extrabold">Contact Us</h1>
                    </div>
                    <div class="text-white flex flex-col gap-y-5 items-center">
                        <div class="inline-flex">
                            <span class="text-3xl md:text-2xl"><BiLogoGmail/></span>
                            <span class="text-lg md:text-1xl font-kanit">: contact.work@gmail.com</span>
                        </div>
                        <div class="inline-flex">
                            <span class="text-3xl md:text-2xl"><FaPhoneSquareAlt/></span>
                            <span class="text-lg md:text-1xl font-kanit">: 123-4556-7890</span> 
                        </div>
                        <div class="inline-flex">
                            <span class="text-3xl md:text-2xl"><FaGithubSquare/></span>
                            <span class="text-lg md:text-1xl font-kanit">: git_Contact</span>
                        </div>
                    </div>
                </div>

                <div class="col-span-1 md:col-start-3 md:col-span-3">
                    <div class="text-white font-kanit text-center text-balance">                     
                        <h2 class="text-1xl md:text-1xl font-medium">ออกแบบเนื้อหามาให้ครอบคลุมต่อทักษะที่คุณต้องใช้ เพื่อทักษะใหม่ๆ ที่จำเป็นต่อคุณโดยเฉพาะ</h2>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default ContactUS;