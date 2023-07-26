import { useEffect,useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './styles.css'

import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);



function About() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])


    const animate = () => {
        if(xPercent < -100){
          xPercent = 0;
        }
        else if(xPercent > 0){
          xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
      }

   return (
        <section className="section bg-black">

              <motion.div 
                className="flex flex-grow mx-auto mb-28 "
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ duration: 3 }}
                variants={{
                hidden: { opacity: 0 ,x:"50%" },
                visible: { opacity: 1,x:"0%"}, // Move staggerChildren here
                }}
                >
                <img className=" mx-auto" style={{objectFit:'fill'}}
                    src="/media/amira.png"
                    alt="background"
                />
                 <div className={styles.sliderContainer}>
                        <div ref={slider} className={styles.slider}>
                        <p ref={firstText}>Freelance Developer -</p>
                        <p ref={secondText}>Freelance Developer -</p>
                        </div>
                </div>
                <div  className={styles.description}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </svg>
                    <p>Freelance</p>
                    <p>Designer & Developer</p>
                </div>
              </motion.div>

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
             
           
            </div>
        </section>
  )
}

export default About
