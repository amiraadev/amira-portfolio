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


      gsap.to('.img-container',{
        scale:52,
        ease:"ease",
        scrollTrigger:{
          trigger:'.video-section',
          scrub:1,
          start:"top top",
          end:"bottom",
          pin:true
        }
      })


      gsap.to('.right' ,{
        autoAlpha:0,
        x:500,
        duration:1.5,
        scrollTrigger:{
          start:1
        }
      })
      gsap.to('.left' ,{
        autoAlpha:0,
        x:-500,
        duration:1.5,
        scrollTrigger:{
          start:1
        }
      })

      
const tl = gsap.timeline();

tl.from('.left-side div',{
  y:150,
  opacity:0,
  stagger:{
    amount:.4
  },
  delay:.5
}).from('.right-side',{opacity:0,duration:2},.5)
.to('.wrapper' ,{x:-window.innerWidth})



ScrollTrigger.create({
  animation:tl,
  trigger:'.wrapper',
  start:"top top",
  end:"+=600",
  scrub:1,
  pin:true,
  ease:"ease"
})


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
      
    }, []);
  return (
    <>
         
        {/* HEADER */}
      <header>
        {/* Rest of the header code */}
        <nav className="navbar">
            <span></span>
            <div className="logo">eraf</div>
            <ul className="menu">
                <li><a>Home</a></li>
                <li><a>Education</a></li>
                <li><a>Experience</a></li>
                <li><a >Work</a></li>
                <li><a >Contact</a></li>
            </ul>
            <div className="btn">
            </div>
        </nav>
      </header>


      {/* WRAPPER */}
      <div className="wrapper">


        {/* FIRST SECTION */}
        <section className="video-section">
            <div className="video-container">
           
                {/* <video src="./media/data_2_orange.mp4" autoPlay loop muted></video> */}
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

            <div className="v_container">
                <div className="left-side">
                    <div className="tv">
                        <div className="bg">What </div>
                        <div className="bg bottom">I Do :</div>
                    </div>
                    <div className="text-container">
                        <p>
                            From front-end development to seamless back-end integration, I am devoted to creating exceptional online experiences that captivate audiences and drive business growth
                        </p>
                    </div>
                </div>
                <div className="right-side">
                    <p>explore works <i className="fa-solid fa-arrow-right-long"></i></p>
                </div>
            </div>
        </section>

        {/* SECOND SECTION */}
        <section className="section">
              <div className="boxes-container">
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
                    {/* *********************************************************************************************** */}
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
                    {/* *********************************************************************************************** */}
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
