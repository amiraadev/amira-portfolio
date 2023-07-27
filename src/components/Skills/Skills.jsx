import styles from './styles.module.css'
import { useRef } from 'react';
import gsap from 'gsap';
import image1 from '/media/skills/aws.png';
import image2 from '/media/skills/nextjs.jpg';
import image3 from '/media/skills/docker.png';
import image4 from '/media/skills/git.png';
import image5 from '/media/skills/java.png';
import image6 from '/media/skills/javascript.png';
import image7 from '/media/skills/kubernetes.png';
import image8 from '/media/skills/mongo.png';
import image9 from '/media/skills/node.png';
import image10 from '/media/skills/postgres.png';
import image11 from '/media/skills/react.png';

function Skills() {
    const plane1 = useRef(null);
    const plane2 = useRef(null);
    const plane3 = useRef(null);
    const plane4 = useRef(null);
    let requestAnimationFrameId = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.08;
    const speed = 0.01;
  
    const manageMouseMove = (e) => {
      const { movementX, movementY } = e
      xForce += movementX * speed;
      yForce += movementY * speed;
  
      if(requestAnimationFrameId == null){
        requestAnimationFrameId = requestAnimationFrame(animate);
      }
    }
  
    const lerp = (start, target, amount) => start * (1 - amount) +target * amount;
  
    const animate = () => {
      xForce = lerp(xForce, 0, easing);
      yForce = lerp(yForce, 0, easing);
      gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
      gsap.set(plane2.current, {x: `+=${xForce * 0.8}`, y: `+=${yForce *0.8}`})
      gsap.set(plane3.current, {x: `+=${xForce *1.2}`, y: `+=${yForce *1.2}`})
      gsap.set(plane4.current, {x: `+=${xForce * 0.4}`, y: `+=${yForce * 0.4}`})
  
      if(Math.abs(xForce) < 0.01) xForce = 0;
      if(Math.abs(yForce) < 0.01) yForce = 0;
      
      if(xForce != 0 || yForce != 0){
        requestAnimationFrame(animate);
      }
      else{
        cancelAnimationFrame(requestAnimationFrameId)
        requestAnimationFrameId = null;
      }
    }
  
  return (
    <main onMouseMove={(e) => {manageMouseMove(e)}} className={` flex flex-row justify-evenly items-center`}>
    <div ref={plane1}  className={` flex flex-col gap-1 items-center `} >
            <img 
            src={image1}
            alt='image'
            width={200}
            />
          <img style={{position:"relative",right:"-180%"}} 
          src={image3}
          alt='image'
          width={200}
        />
       <img style={{position:"relative",right:"-400%"}} 
          src={image5}
          alt='image'
          width={200}
        />
        
    </div>
    <div ref={plane2} className={` flex flex-col gap-1 items-center `}  >
       <img  
          src={image2}
          alt='image'
          width={300}
        />
          <img style={{position:"relative",left:"-70%",bottom:"-80px"}} 
            src={image11}
            alt='image'
            width={225}
          />
            <img style={{position:"relative",right:"-260%",top:"-130px"}}  
            src={image4}
            alt='image'
            width={250}
            />
        
    </div>
     <div ref={plane3} className={` flex flex-col gap-1 items-center `}  >
       <img  
          src={image7}
          alt='image'
          width={150}
        />
          <img style={{position:"relative",right:"-100%",top:"-140px"}} 
          src={image9}
          alt='image'
          width={150}
        />
   
        
         <img  style={{position:"relative",left:"-50%"}} 
          src={image8}
          alt='image'
          width={400}
        />
    </div>
   <div ref={plane4} className={` flex flex-col gap-1 items-center `} >
      
         <img style={{position:"relative",left:"-250%"}}
          src={image10}
          alt='image'
          width={200}
        />
         <img style={{position:"relative",top:"-100px",left:"-110%"}} 
          src={image6}
          alt='image'
          width={150}
        />  
         
    </div>  {/**/}
    {/* <div className={styles.title}>
      <h1>Floating Images Gallery</h1>
      <p>Next.js and GSAP</p> 
    </div> */}
  </main>
  )
}

export default Skills
