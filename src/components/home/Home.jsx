
import videoSrc from '/media/data_2_orange.mp4';
import  { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './home.css'

gsap.registerPlugin(ScrollTrigger);

function Home() {

  
  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions:"play none none reverse"
    })

    gsap.to('.img-container',{
      scale:52,
      ease:"ease",
      scrollTrigger:{
        trigger:'.video-section',
        scrub:1,
        start:"top  ",
        end:"bottom bottom",
        pin:true,
        markers:true,
      }
    })
  
  }, []);
  
  return (
    <div className="wrapper">
    {/* FIRST SECTION */}
    <section className="video-section">
        <div className="video-container">
               <video src={videoSrc} autoPlay loop muted></video>
        </div>
        <div className="img-container">  
          <img src="./media/bgs3.png" alt="" className="img" />
        </div>
        <div className="text-content">
            <div className="img_txt">
                <div className="title sm left">
                    <span>Amira</span>
                </div>
                <div className="title bg left">
                    <span>Allagui</span>
                </div>
                <div className="title sm right ">
                    <span>Software</span>
                </div>
                <div className="title bg right">
                    <span>Engineer</span>
                </div>
            </div>
            <p className="txt-bottom" >
                websites that will change your mind
            </p>
        </div>
    </section>

  </div>
  )
}

export default Home
