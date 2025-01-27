import coinbase from '../assets/coinbase.png';
import spotify from '../assets/spotify.png';
import slack from '../assets/slack.png';
import dropbox from '../assets/dropbox.png';
import webflow from '../assets/webflow.png';
import zoom from '../assets/zoom.png';

function Logos() {
  return (
        <>
            <section className="brands">
                <div className="lg:container px-5 py-12 mx-auto">
                    <div className="logos flex flex-row gap-16 items-center flex-wrap justify-center my-8">
                        <img src={coinbase} alt="" />
                        <img src={spotify} alt="" />
                        <img src={slack} alt="" />
                        <img src={dropbox} alt="" />
                        <img src={webflow} alt="" />
                        <img src={zoom} alt="" />
                    </div>
                </div>
            </section>
        </>
  )
}

export default Logos