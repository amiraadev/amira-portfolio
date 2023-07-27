import React from 'react'
import aws from '/media/skills/aws.png';
import nextjs from '/media/skills/nextjs.jpg';
import docker from '/media/skills/docker.png';
import git from '/media/skills/git.png';
import java from '/media/skills/java.png';
import javascript from '/media/skills/javascript.png';
import kubernetes from '/media/skills/kubernetes.png';
import mongo from '/media/skills/mongo.png';
import node from '/media/skills/node.png';
import postgres from '/media/skills/postgres.png';
import react from '/media/skills/react.png';
import tailwind from '/media/skills/tailwind.png';
import redux from '/media/skills/redux.png';
import materialui from '/media/skills/materialui.png';
import nest from '/media/skills/nest.png';
import springboot from '/media/skills/springboot.png';

function Skills() {
  return (
    <section className="section">
    <div className="boxes-container">
         {/* <!-- ************************COLUMN1********************************************* --> */}
        <div className="columns box1 flex">
            <div className="col col-1 flex-1 ">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <img src={nextjs} alt=""/>
                        <img src={react} alt=""/>
                    </div>
                    <div className="text-box">
                        <p>
                            As a frontend enthusiast, I possess a deep passion for creating captivating web interfaces using an array of dynamic tools.
                        </p>
                        <p>
                         With a profound expertise in React, Redux Toolkit, and Next.js, I consistently craft highly interactive user experiences.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-2  flex flex-1 flex-col">
                <div className="flex-1">
                    <h1>Frondtend</h1>
                    <span>As a fronend developer i focus on:</span>
                </div>
                <div className="text-box  pt-5 flex-2">
                    <p>
                      leveraging the power of Redux Toolkit to ensure efficient state management, facilitating seamless data flow and elevating user interactions.                   
                     </p>
                    <p>
                     swift and flexible web development, by deliberately chosing Tailwind CSS for its pre-built utility classes, streamlining responsive design and maintaining consistency throughout the application                 
                   </p>
                </div>
                <div className="col col-3 flex-3">
                    <img src={tailwind} alt=""/>
                    <img src={redux} alt=""/>
                    <img src={materialui} alt=""/>
                </div>
            </div>
        </div>
        {/* <!-- *******************************COLUMN2************************************** --> */}
        <div className="flex flex-col-reverse md:flex-row   ">
            <div className="flex-1 flex flex-col ">
                <div  className="flex flex-row  items-center ">
                    <img src={node} className=' w-2/5 h-2/3  ' alt=""/>
                    <img src={nest} className=' w-2/3 h-2/3  'alt=""/>
                </div>
                <div className='flex justify-center  '>
              <img src={javascript} className=' w-2/6 h-4/5  ' alt=""/>
                </div>

            </div>
            <div className='flex-1 flex flex-col justify-between'>
                    <div className="col-2">
                        <h1>Backend</h1>
                        <span>As a backend developer i focus on:</span>
                        <div className="text-box  pt-5">
                            <p>
                             building robust server-side applications using  Node.js, Express,Nest,Java and springBoot.  
                           </p>
                            <p>
                             optimizing data processing and seamless API integrations, culminating in the creation of secure and high-performance web solutions.      
                           </p>
                           <p>
                             architecting smooth data flow and user interactions, delivering impactful user experiences.
                            </p>
                            
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center ">
                        <img src={java} className='w-1/2 h-1/2' alt=""/>
                        <img src={springboot} className='w-2/5 h-2/3' alt=""/>
                    </div>
            </div>
        </div>
       {/* <!-- *******************************COLUMN3************************************** --> */}
        <div className="columns box3 ">
            <div className="col col-1">
                <img src="./media/b1.jpeg" alt=""/>
                <img src="./media/b2.webp" alt=""/>
                <img src="./media/b3.jpeg" alt=""/>
                <img src="./media/b4.jpeg" alt=""/>
            </div>
            <div className="col-2">
                <h1> vibes</h1>
                <span>1 september 2021</span>
                <div className="line"></div>
                <div className="text-box">
                    <p>
                        Retro nostagia can be sweet and sour at the same time. Christina helped us to make
                        photos, that will give you this feelings.

                    </p>
                    <p>

                      df      ghjklm
                    </p>
                </div>
            </div>
            <div className="col col-3">
                <img src="./media/b5.webp" alt=""/>
            </div>
        </div>
        {/* <!-- *************************************************************************************** --> */}
    </div>
</section>
  )
}

export default Skills
