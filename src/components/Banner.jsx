import { FaStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import client from "../assets/client.svg";
import hand from "../assets/hand.svg";
import box from "../assets/box.svg";
import bannerImg from "../assets/banner-image.png";

function Banner() {
  return (
    <>
      <section className="banner py-0">
        <div className="lg:container px-5 mx-auto relative">
          <div className="flex md:flex-row flex-col justify-between align-center pt-10">
            <div className="banner-content">
              <div className="flex flex-row gap-1 items-center text-yellow-400">
                <FaStar />
                <span className="text-black font-bold">Google Rating</span>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="py-5">
                <h1 className="text-5xl font-semibold">Your trusted partner</h1>
                <h1 className="text-5xl font-semibold">
                  for compliance business needs
                </h1>
                <span className="inline-block w-[60px] h-[1px] bg-red-600"></span>
                <p>
                  An online business compliance platform that helps
                  entrepreneurs and other individuals with various,
                  registrations, tax filings, and other legal matters.
                </p>
              </div>
              <div className="flex flex-row gap-8 items-center py-4 flex-wrap">
                <div className="flex flex-row gap-2 items-center">
                  <img src={box} alt="" />
                  <div>
                    <h2
                      className="text-xl font-bold"
                      style={{
                        background:
                          "linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      4.5+
                    </h2>

                    <p>Customer Rating</p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img src={client} alt="" />
                  <div>
                    <h2
                      className="text-xl font-bold"
                      style={{
                        background:
                          "linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      20,000+
                    </h2>
                    <p>Clients</p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img src={hand} alt="" />
                  <div>
                    <h2
                      className="text-xl font-bold"
                      style={{
                        background:
                          "linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      99.8%
                    </h2>
                    <p>Financial Stability</p>
                  </div>
                </div>
              </div>
              <div className="my-5 flex flex-row gap-4">
                <div className="flex flex-row gap-4 items-center">
                  <button
                    className="text-white py-3 px-5 rounded-sm font-semibold shadow-lg"
                    style={{ backgroundColor: "#1C4670" }}
                  >
                    Talk An Expert
                  </button>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <FaPlayCircle className="text-red-600 text-xl" />
                  <span className="font-semibold">See how it works</span>
                </div>
              </div>
            </div>

            <div className="banner-img">
              <img
                src={bannerImg}
                alt=""
                className="w-full md:w-[600px] lg:w-[800px]"
              />
            </div>
          </div>
          <div className="banner-btns absolute bottom-0 md:top-10 right-0 flex flex-col gap-5">
            <button className="py-2 px-4 rounded-s-md shadow-lg bg-white text-start">
              Annual Compliance
            </button>
            <button className="py-2 px-4 rounded-s-md shadow-lg bg-white text-start">
              Payroll Services
            </button>
            <button className="py-2 px-4 rounded-s-md shadow-lg bg-white text-start">
              Company Formation
            </button>
            <button className="py-2 px-4 rounded-s-md shadow-lg bg-white text-start">
              Annual Compliance
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
