import './App.css'
import videoSrc from '/media/data_2_orange.mp4';
import  { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {

    useEffect(() => {
      ScrollTrigger.defaults({
        toggleActions:"play none none reverse"
      })
// CORREEEEEEEECT
      // gsap.to('.img-container', {
      //   scale: 52,
      //   ease: "ease",
      //   scrollTrigger: {
      //     trigger: '.video-section',
      //     scrub: 1,
      //     start: "bottom bottom", // Start the animation at the bottom of the video section
      //     end: "+=0", // Adjust the end value as needed to control the animation duration
      //     pin: true,
      //     pinSpacing: false, // Ensure the video section does not cover the entire viewport
      //     markers: true,
      //   }
      // });
   

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


//       gsap.to('.right' ,{
//         autoAlpha:0,
//         x:500,
//         duration:1.5,
//         scrollTrigger:{
//           start:1
//         }
//       })
//       gsap.to('.left' ,{
//         autoAlpha:0,
//         x:-500,
//         duration:1.5,
//         scrollTrigger:{
//           start:1
//         }
//       })

      
// const tl = gsap.timeline();

// tl.from('.left-side div',{
//   y:150,
//   opacity:0,
//   stagger:{
//     amount:.4
//   },
//   delay:.5
// }).from('.right-side',{opacity:0,duration:2},.5)
// .to('.wrapper' ,{x:-window.innerWidth})



// ScrollTrigger.create({
//   animation:tl,
//   trigger:'.wrapper',
//   start:"top top",
//   end:"+=600",
//   scrub:1,
//   pin:true,
//   ease:"ease"
// })


// gsap.utils.toArray('.col').forEach(image=>{
//   gsap.fromTo(image,{
//     opacity:.3,
//     x:0
//   },{
//     opacity:1,
//     x:-50,
//     scrollTrigger:{
//       trigger:image,
//       start:"10%",
//       stagger:{
//         amount:.4
//       }
//     }
//   })
// })

// const timeline = gsap.timeline();

// timeline.from('.title span' ,{
//   y:150,
//   skewY:7,
//   duration:3
// }).from('.txt-bottom',{
//   letterSpacing:-10,
//   opacity:0,
//   duration:3
// })
      
    }, []);
  return (
    <>
      {/* WRAPPER */}
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

      <footer>
        <div className="logo"><a href="#">eraf</a></div>
        <div className="btn">instegram</div>    
     </footer>
    </>
  )
}

export default App
