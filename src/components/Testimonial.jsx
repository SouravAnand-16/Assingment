import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import colon from '../assets/colon.svg'
import profile from '../assets/profile.png'
import '../App.css'

import 'swiper/css/navigation';
function Testimonial() {
  return (
    
    <>
        <section className="testimonial py-8" style={{backgroundColor:"#1C4670"}}>
            <div className="lg:container mx-auto px-5">
                <h3 className='text-3xl text-white mb-6 font-semibold'>What peoples says about us </h3>
                <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules= {[Navigation]}
                navigation={true}
                className="mySwiper"
            >
                <SwiperSlide style={{width:"400px",maxWidth:"100%"}}>
                    <div className='p-3 rounded-md bg-white'>
                        <div className='mb-2'>
                            <img src={colon} alt="" />

                        </div>
                        <p className="font-inter text-[16px] font-normal leading-[26px] text-left text-[rgba(102,112,133,1)] underline-from-font decoration-none">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
                        <div className='flex flex-row gap-2 items-center mt-4'>
                            <img src={profile} alt="" width={60}/>
                            <div>
                                <h5 className="font-inter text-[16px] font-bold leading-[26px] text-left text-[rgba(60,33,9,1)] underline-from-font decoration-none">Chris</h5>
                                <p className="font-inter text-[14px] font-normal leading-[26px] text-left text-[rgba(40,40,9,1)] underline-from-font decoration-none">President and CEO, PrintReach, USA</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:"400px"}}>
                    <div className='p-3 rounded-md bg-white'>
                        <div className='mb-2'>
                            <img src={colon} alt="" />

                        </div>
                        <p className="font-inter text-[16px] font-normal leading-[26px] text-left text-[rgba(102,112,133,1)] underline-from-font decoration-none">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
                        <div className='flex flex-row gap-2 items-center mt-4'>
                            <img src={profile} alt="" width={60}/>
                            <div>
                                <h5 className="font-inter text-[16px] font-bold leading-[26px] text-left text-[rgba(60,33,9,1)] underline-from-font decoration-none">Chris</h5>
                                <p className="font-inter text-[14px] font-normal leading-[26px] text-left text-[rgba(40,40,9,1)] underline-from-font decoration-none">President and CEO, PrintReach, USA</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:"400px"}}>
                    <div className='p-3 rounded-md bg-white'>
                        <div className='mb-2'>
                            <img src={colon} alt="" />

                        </div>
                        <p className="font-inter text-[16px] font-normal leading-[26px] text-left text-[rgba(102,112,133,1)] underline-from-font decoration-none">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
                        <div className='flex flex-row gap-2 items-center mt-4'>
                            <img src={profile} alt="" width={60}/>
                            <div>
                                <h5 className="font-inter text-[16px] font-bold leading-[26px] text-left text-[rgba(60,33,9,1)] underline-from-font decoration-none">Chris</h5>
                                <p className="font-inter text-[14px] font-normal leading-[26px] text-left text-[rgba(40,40,9,1)] underline-from-font decoration-none">President and CEO, PrintReach, USA</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:"400px"}}>
                    <div className='p-3 rounded-md bg-white'>
                        <div className='mb-2'>
                            <img src={colon} alt="" />

                        </div>
                        <p className="font-inter text-[16px] font-normal leading-[26px] text-left text-[rgba(102,112,133,1)] underline-from-font decoration-none">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
                        <div className='flex flex-row gap-2 items-center mt-4'>
                            <img src={profile} alt="" width={60}/>
                            <div>
                                <h5 className="font-inter text-[16px] font-bold leading-[26px] text-left text-[rgba(60,33,9,1)] underline-from-font decoration-none">Chris</h5>
                                <p className="font-inter text-[14px] font-normal leading-[26px] text-left text-[rgba(40,40,9,1)] underline-from-font decoration-none">President and CEO, PrintReach, USA</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:"400px"}}>
                    <div className='p-3 rounded-md bg-white'>
                        <div className='mb-2'>
                            <img src={colon} alt="" />

                        </div>
                        <p className="font-inter text-[16px] font-normal leading-[26px] text-left text-[rgba(102,112,133,1)] underline-from-font decoration-none">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
                        <div className='flex flex-row gap-2 items-center mt-4'>
                            <img src={profile} alt="" width={60}/>
                            <div>
                                <h5 className="font-inter text-[16px] font-bold leading-[26px] text-left text-[rgba(60,33,9,1)] underline-from-font decoration-none">Chris</h5>
                                <p className="font-inter text-[14px] font-normal leading-[26px] text-left text-[rgba(40,40,9,1)] underline-from-font decoration-none">President and CEO, PrintReach, USA</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:"400px"}}>
                    <div className='p-3 rounded-md bg-white'>
                        <div className='mb-2'>
                            <img src={colon} alt="" />

                        </div>
                        <p className="font-inter text-[16px] font-normal leading-[26px] text-left text-[rgba(102,112,133,1)] underline-from-font decoration-none">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
                        <div className='flex flex-row gap-2 items-center mt-4'>
                            <img src={profile} alt="" width={60}/>
                            <div>
                                <h5 className="font-inter text-[16px] font-bold leading-[26px] text-left text-[rgba(60,33,9,1)] underline-from-font decoration-none">Chris</h5>
                                <p className="font-inter text-[14px] font-normal leading-[26px] text-left text-[rgba(40,40,9,1)] underline-from-font decoration-none">President and CEO, PrintReach, USA</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:"400px"}}>
                    <div className='p-3 rounded-md bg-white'>
                        <div className='mb-2'>
                            <img src={colon} alt="" />

                        </div>
                        <p className="font-inter text-[16px] font-normal leading-[26px] text-left text-[rgba(102,112,133,1)] underline-from-font decoration-none">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
                        <div className='flex flex-row gap-2 items-center mt-4'>
                            <img src={profile} alt="" width={60}/>
                            <div>
                                <h5 className="font-inter text-[16px] font-bold leading-[26px] text-left text-[rgba(60,33,9,1)] underline-from-font decoration-none">Chris</h5>
                                <p className="font-inter text-[14px] font-normal leading-[26px] text-left text-[rgba(40,40,9,1)] underline-from-font decoration-none">President and CEO, PrintReach, USA</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:"400px"}}>
                    <div className='p-3 rounded-md bg-white'>
                        <div className='mb-2'>
                            <img src={colon} alt="" />

                        </div>
                        <p className="font-inter text-[16px] font-normal leading-[26px] text-left text-[rgba(102,112,133,1)] underline-from-font decoration-none">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
                        <div className='flex flex-row gap-2 items-center mt-4'>
                            <img src={profile} alt="" width={60}/>
                            <div>
                                <h5 className="font-inter text-[16px] font-bold leading-[26px] text-left text-[rgba(60,33,9,1)] underline-from-font decoration-none">Chris</h5>
                                <p className="font-inter text-[14px] font-normal leading-[26px] text-left text-[rgba(40,40,9,1)] underline-from-font decoration-none">President and CEO, PrintReach, USA</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            </div>
        </section>
    </>
  )
}

export default Testimonial