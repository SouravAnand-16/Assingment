import clients from '../assets/clients.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import mail from '../assets/mail.png';
import boy from '../assets/boy.png';
import payment from '../assets/payment.png';
import file from '../assets/file.png';



function HappyClients() {
  return (
    <>
        <section className="happy-clients">
            <div className="lg:container mx-auto px-5 my-10">
                <div className='text-center'>
                    <h2 className='text-3xl font-bold mb-2'>Our Happy Clients</h2>
                    <p className='text-gray-600'>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-<br />leveling customer service for state of the art customer service.</p>

                    <img src={clients} alt="" className='w-full object-cover my-8'/>

                    <a href="#" className='inline-flex flex-row gap-1 font-semibold items-center text-blue-900'>show more <IoIosArrowRoundForward /></a>
                </div>

            </div>
            <div style={{backgroundColor:"#FFA229"}}>

                <div className='container flex flex-row flex-wrap justify-around gap-4 py-8 mx-auto font-semibold' >
                    <div className='flex flex-row gap-2 items-center'>
                        <img src={file} alt="" width={40}/>
                        <span>Fill up Application Form</span>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <img src={payment} alt="" width={40}/>
                        <span>Make Online Payment</span>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <img src={boy} alt="" width={40}/>
                        <span>Executive will Process Application</span>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <img src={mail} alt="" width={40}/>
                        <span>Get Confirm Mail</span>
                    </div>
                </div>
            </div>


        </section>
    </>
  )
}

export default HappyClients