import bulb from '../assets/bulb.svg';
import growth from '../assets/growth.svg';
import ytimg from '../assets/ytimg.png';

function VideoInstruction() {
  return (
    <>
        <section className="video-instruction" style={{backgroundColor:"#1C4670"}}>
            <div className="lg:container mx-auto px-5 my-5 text-white py-8">
                <div className='flex md:flex-row flex-col items-center gap-2'>
                    <div className="content">
                        <h2 className='text-4xl font-bold'>0ur Video Introductions</h2>
                        <p className='my-4 mb-10 text-gray-300'>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>
                        <ul>
                            <li className='flex flex-row gap-2 my-8'>
                                <img src={bulb} alt="" width={48}/>
                                <div>
                                    <h3 className='font-semibold text-xl'>Explore ideas together</h3>
                                    <p className='text-gray-300'>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                                </div>
                            </li>
                            <li className='flex flex-row gap-2 my-8'>
                                <img src={growth} alt="" width={48}/>
                                <div>
                                    <h3 className='font-semibold text-xl'>Bring those ideas to life</h3>
                                    <p className='text-gray-300'>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full md:w-1/2'>
                        <img src={ytimg} alt="" className='rounded-xl'/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default VideoInstruction