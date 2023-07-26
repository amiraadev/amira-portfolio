import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



function Skills() {
   return (
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
  )
}

export default Skills
