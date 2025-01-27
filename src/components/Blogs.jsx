import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog4 from '../assets/blog4.png';
import blog5 from '../assets/blog5.png';
import blog6 from '../assets/blog6.png';
import SingleBlog from './SingleBlog';
import { IoArrowForward } from "react-icons/io5";


function Blogs() {
    const blogData = [
        {
            name : "Prabhash Mishra",
            date : "1 Jan 2023",
            img : blog1,
            today :true,
            title : "Small business & Startup",
            desc : "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
            tags : ["Tax & Audit","Management"]
        },
        {
            name : "Mahesh Kumar",
            date : "1 Jan 2023",
            img : blog2,
            today :false,
            title : "Scale-Up Company Offer",
            desc : "Mental models are simple expressions of complex processes or relationships.",
            tags : ["Tax","Research","Complience"]
        },
        {
            name : "Rakhi Verma",
            date : "1 Jan 2023",
            img : blog1,
            today :false,
            title : "Growing Business Package",
            desc : "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
            tags : ["Audit","Money Back"]
        },
        {
            name : "Karan Kumar",
            date : "1 Jan 2023",
            img : blog4,
            today :false,
            title : "Scale-Up Company Offer",
            desc : "Collaboration can make our teams stronger, and our individual designs better.",
            tags : ["Money","Management"]
        },
        {
            name : "Richa Singh",
            date : "1 Jan 2023",
            img : blog5,
            today :false,
            title : "Scale-Up Company Offer",
            desc : "JavaScript frameworks make development easy with extensive features and functionalities.",
            tags : ["Tax Return","News","Audit"]
        },
        {
            name : "Miss Nora",
            date : "1 Jan 2023",
            img : blog6,
            today :false,
            title : "Scale-Up Company Offer",
            desc : "Starting a community doesn’t need to be complicated, but how do you get started?",
            tags : ["Private Limited Company","Customer Success"]
        },
    ]
  return (
    <>
        <section className="blogs">
            <div className="lg:container mx-auto p-5 my-5">
                <div className="py-3 text-center">
                    <h3 className="mb-2 text-[rgba(235,141,21,1)]">EXPLORE OUR BLOGS</h3>
                    <h1 className="font-bold text-3xl">Accelerate Digital Transformation</h1>
                </div>

                <div className="blogs flex flex-row flex-wrap">
                    {
                        blogData.map((data,i) => {
                            return <SingleBlog 
                                key={i}
                                blogdata = {data}
                            />
                        })
                    }
                </div>

                <div className="text-center mt-4">
                    <button className="text-white py-3 px-5 rounded-sm font-semibold shadow-lg flex flex-row gap-1 items-center mx-auto" style={{backgroundColor:"#1C4670"}}>Show more blogs <IoArrowForward /></button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Blogs