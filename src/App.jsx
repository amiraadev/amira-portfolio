import bgImage from '/media/door_324.png'; // Replace 'bg-image.jpg' with your image file path
// import videoSrc from '/media/data_2_orange.mp4';
import videoSrc from '/media/data.mp4';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css'
import Navbar from './components/Navbar';
import { SelectedPage } from './shared/types'
import { motion, useAnimation } from 'framer-motion';
import Introduction from './components/Introduction';



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
    
    gsap.to('.txt-bottom',{
      autoAlpha:0,
      letterSpacing:-10,
      duration:2,
      scrollTrigger:{
        start:2
      }
    })

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
 
gsap.utils.toArray('.col').forEach(image=>{
  gsap.fromTo(image,{
    opacity:.3,
    x:0
  },{
    opacity:1,
    x:-50,
    scrollTrigger:{
      trigger:image,
      start:"10%",
      stagger:{
        amount:.4
      }
    }
  })
})

const timeline = gsap.timeline();

timeline.from('.title span' ,{
  y:150,
  skewY:7,
  duration:3
}).from('.txt-bottom',{
  letterSpacing:-10,
  opacity:0,
  duration:3
})
 


  return (

    <>
    <Navbar />
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
                              <motion.div 
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.7 ,delay: 1 }}
                                        variants={{
                                          hidden: { opacity: 0 ,y:"-10%"},
                                          visible: { opacity: 1,y:"40%"},                           
                                        }}
                                        >
                                   <div className="content left">
                                      <a className="title font-bold sm pointer-events-none hover:no-underline" href="#"> AMIRA</a>
                                  </div>  
                                    <div className="content left">
                                      <a className="title font-bold  bg pointer-events-none hover:no-underline " href="#"> ALLAGUI</a>
                                  </div>
                              </motion.div>
                               <motion.div 
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.7 ,delay:1 }}
                                        variants={{
                                          hidden: { opacity: 0 ,y:"100%"},
                                          visible: { opacity: 1,y:"40%"},                           
                                        }}
                                        >
                                <div className="content right">
                                  <a className="title font-bold sm pointer-events-none hover:no-underline" href="#"> SOFTWARE</a>
                              </div>
                                <div className="content right">
                                  <a className="title font-bold bg pointer-events-none hover:no-underline" href="#"> ENGINEER</a>
                              </div>
                              </motion.div>
                              
                      </div>
                      <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.7 ,delay:2 }}
                                variants={{
                                  hidden: { opacity: 0 ,y:"100%"},
                                  visible: { opacity: 1,y:"40%"},                           
                                }}
                                        >
                            <p className="txt-bottom font-bold ">websites that will change your mind</p>
                      </motion.div>
                  </div>
                  <Introduction />
              </section>

              <section className="section">
            <div className="boxes-container">
                 {/* <!-- ************************COLUMN1********************************************* --> */}
                <div className="columns box1">
                    <div className="col col-1">
                        <img src="./media/1.jpeg" alt=""/>
                        <img src="./media/2.jpeg" alt=""/>
                    </div>
                    <div className="col-2">
                        <h1>Carolina</h1>
                        <span>28 october 2021</span>
                        <div className="line"></div>
                        <div className="text-box">
                            <p>
                                This series is excellently showing that ordinary
                                portrait photography still can be inspiring for you.
                            </p>
                            <p>
                                Check the shots of beautiful Caroline in hat with red and green lights.
                            </p>
                        </div>
                    </div>
                    <div className="col col-3">
                        <img src="./media/3.webp" alt=""/>
                        <img src="./media/4.jpeg" alt=""/>
                        <img src="./media/5.jpeg" alt=""/>
                    </div>
                </div>
                {/* <!-- *******************************COLUMN2************************************** --> */}
                <div className="columns box2">
                    <div className="col col-1">
                        <img src="./media/p1.jpeg" alt=""/>
                        <img src="./media/p2.webp" alt=""/>
                    </div>
                    <div className="col-2">
                        <h1>soul dance</h1>
                        <span>17 september 2021</span>
                        <div className="line"></div>
                        <div className="text-box">
                            <p>
                                Beautiful dance of Hanna in neon ligths with retro effect. Pink lights, pretty women
                                and sensuality.
                            </p>
                            <p>
                                Inspiring vibes and invisible beautiful soul on this shots.
                            </p>
                        </div>
                    </div>
                    <div className="col col-3">
                        <img src="./media/p3.jpeg" alt=""/>
                        <img src="./media/p4.jpeg" alt=""/>
                        <img src="./media/p5.jpeg" alt=""/>
                    </div>
                </div>
               {/* <!-- *******************************COLUMN3************************************** --> */}
                <div className="columns box3">
                    <div className="col col-1">
                        <img src="./media/b1.jpeg" alt=""/>
                        <img src="./media/b2.webp" alt=""/>
                        <img src="./media/b3.jpeg" alt=""/>
                        <img src="./media/b4.jpeg" alt=""/>
                    </div>
                    <div className="col-2">
                        <span>1 september 2021</span>
                        <div className="line"></div>
                        <div className="text-box">
                            <p>
                                Retro nostagia can be sweet and sour at the same time. Christina helped us to make
                                photos, that will give you this feelings.

                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                    <div className="col col-3">
                        <img src="./media/b5.webp" alt=""/>
                    </div>
                </div>
            </div>
        </section>
            </div>
        <div className="text-white text-4xl font-bold">Welcome to My Website</div>
      </div>
    </div>
    </>
    
  );
};

export default App;

   


{/* <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
<div className="flex justify-center items-center min-h-screen bg-gray-900 bg-opacity-50">
  <div className="text-white text-4xl font-bold">Welcome to My Website</div>
</div>
</div> */}