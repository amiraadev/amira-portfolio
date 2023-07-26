import { useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Introduction() {

    useEffect(() => {

        ScrollTrigger.defaults({
          toggleActions:"play none none reverse"
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


    });
  return (
    <div>
        <div className="v_container">
                <div className="left-side">
                    <div className="tv">
                        <div className="bg">Hi,</div>
                        <div className="sm">I m </div>
                        <div className="bg bottom">AMIRA</div>
                    </div>
                    <div className="text-container">
                        <p>
                        From front-end development to seamless back-end integration, I am devoted to creating exceptional online experiences that captivate audiences and drive business growth

                        </p>
                        <p>
                        It has become widespread and diverse, but as developers, we recognize that it is still a true form of skill and innovation.

                        </p>
                    </div>
                </div>
                <div className="right-side">
                    <p>explore works <i className="fa-solid fa-arrow-right-long"></i></p>
                </div>
            </div>

    </div>
  )
}

export default Introduction
