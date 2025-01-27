import team from '../assets/team.png'
import vector from '../assets/vector.png'

function About() {
  return (
    <>
      <section className="about">
        <div className="lg:container px-5 mx-auto my-8 relative">
          <div className='flex flex-col md:flex-row gap-8 justify-between items-center'>
            <div className="content">
              <div className="py-3">
                <h3 className="mb-2 text-[rgba(235,141,21,1)]">WELCOME TO REGISTERKARO.IN</h3>
                <h1 className="font-bold text-4xl mb-4">About <span className='text-orange-500'> Register Karo</span></h1>
                <p className="font-inter text-[16px] font-normal leading-[26px] tracking-[0.16px] text-left underline-from-font decoration-none">We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                  their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                  customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations. </p>
                <p className="my-2 font-inter text-[16px] font-normal leading-[26px] tracking-[0.16px] text-left underline-from-font decoration-none">
                  I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
              </div>
              <button className="text-white py-3 px-5 rounded-sm font-semibold shadow-lg" style={{backgroundColor:"#1C4670"}}>Learn more</button>
            </div>

            <div className='w-full md:min-w-[400px] lg-min-w[600px]'>
              <img src={team} alt="" className='rounded-none w-full'/>
            </div>

            <img src={vector} alt="" className='absolute right-0 bottom-0 h-full -z-10'/>
          </div>
        </div>
      </section>
    </>
  )
}

export default About