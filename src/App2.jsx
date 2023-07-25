import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your six components here (ComponentA, ComponentB, ..., ComponentF)
import ComponentA from './components/home/Home';
import ComponentB from './components/Video';
import ComponentC from './components/ComponentC';
import ComponentD from './components/ComponentD';
import ComponentE from './components/ComponentE';
import ComponentF from './components/ComponentF';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const sections = container.querySelectorAll('.section');

    // Vertical Scroll Animation
    gsap.to(sections, {
      yPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${container.scrollWidth - window.innerWidth}`,
      },
    });

    // Horizontal Scroll Animation
    gsap.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${container.scrollHeight - window.innerHeight}`,
        horizontal: true,
      },
    });
  }, []);

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <div className="section"><ComponentA /></div>
      <div className="section"><ComponentB /></div>
      <div className="section"><ComponentC /></div>
      <div className="section"><ComponentD /></div>
      <div className="section"><ComponentE /></div>
      <div className="section"><ComponentF /></div>
    </div>
  );
};

export default App;
