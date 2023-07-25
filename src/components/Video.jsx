import videoSrc from '/media/data_2_orange.mp4';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Video() {


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
          <p className="txt-bottom">websites that will change your mind</p>
        </div>
      </section>
    </div>
  );
}

export default Video;
