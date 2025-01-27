import SingleService from "./SingleService"
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import icon5 from '../assets/icon5.svg'
import icon6 from '../assets/icon6.svg'

const serviceData = [
    {
        imgUrl : icon1,
        desc : "Build web-based solutions that enhance customer experience.",
        title : "Company Formation",
        url : "#",
        border : ""
    },
    {
        imgUrl : icon2,
        desc : "Make data-driven decisions and utilize technology to reach business goals.",
        title : "Company Secretarial Services",
        url : "#",
                border : "lg:border-x-2"
    },
    {
        imgUrl : icon3,
        desc : "Foster customer relationships by effectively serving your market.",
        title : "Virtual Office Address",
        url : "#",
                border : ""
    },
    {
        imgUrl : icon4,
        desc : "Turn your ideas into modern products with our design experts.",
        title : "Annual Compliance Services",
        url : "#",
                border : ""
    },
    {
        imgUrl : icon5,
        desc : "Expand your business across the globe with minimal effort.",
        title : "Payroll Services",
        url : "#",
                border : "lg:border-x-2"
    },
    {
        imgUrl : icon6,
        desc : "Steering user behaviours with creative design, data insights & technology.",
        title : "Bookkeeping Services",
        url : "#",
                border : ""
    }
]
function Services() {
  return (
    <>
        <div className="services">
            <div className="lg:container px-5 py-8 mx-auto">
                <div className="py-3 text-center">
                    <h3 className="mb-2 text-orange-500">WELCOME TO REGISTERKARO.IN</h3>
                    <h1 className="font-bold text-3xl">Explore Our Services</h1>
                </div>
                <div className="sercices-list flex flex-row flex-wrap my-5">
                {
                    serviceData.map((data,i)=>{ 
                                              
                        return <SingleService 
                        key={i}
                        allData = {data}
                        />
                    })
                }
                </div>
                <div className="text-center">
                    <button className="text-white py-3 px-5 rounded-sm font-semibold shadow-lg" style={{backgroundColor:"#1C4670"}}>See All Services</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services