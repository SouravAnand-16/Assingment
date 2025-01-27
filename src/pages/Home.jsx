import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Brands from "../components/Brands"
import Services from "../components/Services"
import About from "../components/About"
import Whyus from "../components/Whyus"
import VideoInstruction from "../components/VideoInstruction"
import HappyClients from "../components/HappyClients"
import Blogs from "../components/Blogs"
import Logos from "../components/Logos"
import Footer from "../components/Footer"
import Testimonial from "../components/Testimonial"
import Faq from "../components/Faq"
import Number from "../components/Numbers"
import Subscribe from "../components/Subscribe"

function Home() {
  return (
    <>
        <Navbar />
        <Banner />
        <Brands />
        <Services />
        <About />
        <Whyus />
        <VideoInstruction />
        <HappyClients />
        <Blogs />
        <Testimonial />
        <Faq />
        <Number />
        <Subscribe />
        <Logos />
        <Footer />
    </>
  )
}

export default Home