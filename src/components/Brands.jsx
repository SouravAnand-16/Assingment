import samsung from '../assets/samsung.png';
import monday from '../assets/monday.png';
import oracle from '../assets/oracle.png';
import segment from '../assets/segment.png';
import morpheus from '../assets/morpheus.png';

function Brands() {
  return (
    <>
        <section className="brands">
            <div className="lg:container px-5 py-12 mx-auto">
                <h1 className="font-bold text-center text-2xl">Trusted By Over 100+ Startups and freelance business</h1>
                <div className="logos flex flex-row gap-8 items-center flex-wrap justify-center my-8">
                    <img src={oracle} alt="" />
                    <img src={morpheus} alt="" />
                    <img src={morpheus} alt="" />
                    <img src={samsung} alt="" />
                    <img src={monday} alt="" />
                    <img src={segment} alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Brands