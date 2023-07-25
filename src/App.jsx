import bgImage from '/media/door_324.png'; // Replace 'bg-image.jpg' with your image file path
import videoSrc from '/media/data_2_orange.mp4';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css'
import Navbar from './components/Navbar';
import { SelectedPage } from './shared/types'


gsap.registerPlugin(ScrollTrigger);

const App = () => {

  
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home)

  useEffect(() => {


    ScrollTrigger.defaults({
      toggleActions:"play none none reverse"
    })

   
    gsap.fromTo(
      '.img-container',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.img-container',
          start: 'top 80%', // Start the animation when the img-container is 80% inside the viewport
          markers:true
        },
      }
    );

    gsap.to('.img-container', {
      scale: 52,
      ease: 'ease',
      scrollTrigger: {
        trigger: '.video-section',
        scrub: 1,
        start: '.img-container top', // Start pinning from the top of the img-container
        endTrigger: '.video-section',
        end: '+=200%', // Pin for double the width of the .video-section
        pin: true,
        markers: true,
      },
    });

    gsap.to('.right', {
      autoAlpha: 0,
      x: 500,
      duration: 1.5,
      scrollTrigger: {
        start: 1,
      },
    });

    gsap.to('.left', {
      autoAlpha: 0,
      x: -500,
      duration: 1.5,
      scrollTrigger: {
        start: 1,
      },
    });
  });


  return (
    <div className="min-h-screen bg-cover bg-center  md:w-screen" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="">
              <div className="wrapper">
              {/* FIRST SECTION */}
                <section className="video-section">
                  <div className="video-container">
                    <video src={videoSrc} autoPlay loop muted></video>
                  </div>
                  <div className="img-container  bg-gray-900 bg-opacity-50">
                    <img src="./media/door_324.png" alt="" className="img" />
                  </div>
                  <div className="text-content">
                      <div className="img_txt">
                        <div className="title sm left">
                          <span>AMIRA</span>
                        </div>
                        <div className="title bg left">
                          <span>ALLAGUI</span>
                        </div>
                        <div className="title sm right ">
                          <span>SOFTWARE</span>
                        </div>
                        <div className="title bg right">
                          <span>ENGINEER</span>
                        </div>
                      </div>
                      <p className="txt-bottom">websites that will change your mind</p>
                  </div>
              </section>
            </div>
        <div className="text-white text-4xl font-bold">Welcome to My Website</div>
      </div>
    </div>
  );
};

export default App;

   


{/* <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
<div className="flex justify-center items-center min-h-screen bg-gray-900 bg-opacity-50">
  <div className="text-white text-4xl font-bold">Welcome to My Website</div>
</div>
</div> */}