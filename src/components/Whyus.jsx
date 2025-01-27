import smile from '../assets/smile.svg';
import person from '../assets/person.svg';
import tick from '../assets/tick.svg';
import sheld from '../assets/sheld.svg';
import WhyusBox from './WhyusBox';


function Whyus() {
  return (
    <>
        <section className="whyus">
            <div className="lg:container px-5 my-5 mx-auto">
                <div className='flex flex-col'>
                <div className="flex flex-col lg:flex-row justify-between">
                    <div>
                        <h3 className="mb-2 text-[rgba(235,141,21,1)]">WHY REGISTERKARO.IN</h3>
                        <h1 className="font-bold text-4xl mb-4">Why Choose <span className='text-orange-500'> Register Karo</span></h1>
                        <p className="font-inter text-[15px] font-normal leading-[22.5px] text-left underline-from-font decoration-none">It is with consistent services and results that build trust with the people and that in
                        turn help us to serve the business better.</p>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap justify-start lg:justify-end">
                            <WhyusBox 
                                data = {{
                                    title : "Confidential & Safe",
                                    desc : "All your private information is safe with us",
                                    svg : sheld,
                                    bgcolor : "#FEF3EF"
                                }}
                            />
                            <WhyusBox 
                                data = {{
                                    title : "No Hidden Fee",
                                    desc : "Everything is put before you with no hidden charges or conditions",
                                    svg : tick,
                                    bgcolor : "#F1FBF3"
                                }}
                            />
                            
                    </div>
                </div>

                <div className='flex flex-row flex-wrap items-stretch justify-start lg:justify-end'>
                            <WhyusBox 
                                data = {{
                                    title : "Guaranteed Satisfaction",
                                    desc : "We ensure that you stay 100% satisfied with our offered services",
                                    svg : smile,
                                    bgcolor : "#EDF3FF"
                                }}
                            />
                            <WhyusBox 
                                data = {{
                                    title : "Expert CA/CS Assistance",
                                    desc : "Prompt support from our in-house expert professionals",
                                    svg : person,
                                    bgcolor : "#FBF1FB"
                                }}
                            />
                            <WhyusBox 
                                data = {{
                                    title : "Confidential & Safe",
                                    desc : "All your private information is safe with us",
                                    svg : sheld,
                                    bgcolor : "#27AE600A"
                                }}
                            />
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Whyus