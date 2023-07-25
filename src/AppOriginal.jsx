import videoSrc from '/media/data_2_orange.mp4';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css'
import Navbar from './components/Navbar';
import { SelectedPage } from './shared/types'



gsap.registerPlugin(ScrollTrigger);

function App() {

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
    <>
      <header>
        <Navbar  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </header>
    {/* className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0' */}
     <div className="wrapper gap-16 bg-gray-20 py-10 h-full w-full md:h-full md:pb-0 md:w-full">
      {/* FIRST SECTION */}
        <section className="video-section">
          <div className="video-container">
            <video src={videoSrc} autoPlay loop muted></video>
          </div>
          <div className="img-container">
            <img src="./media/door_324.png" alt="" className="img" />
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
              <p className="txt-bottom">websites that will change your mind</p>
          </div>
      </section>
    </div>
    </>
  )
}

export default App
