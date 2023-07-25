import useMediaQuery from "../hooks/UseMediaQuery";
import {Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";

import { useState } from 'react';
import Link from "./tools/Link";

// import { motion } from 'framer-motion';

function Navbar(selectedPage,setSelectedPage) {

  const flexBetween ="flex items-center justify-between"
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  // const navbarBackground = isTopOfPage ?  "bg-primary-100 drop-shadow" : "top" ;
  const navbarBackground =   "top" ;


  return (
    <nav>
    <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-4`}  >
            <div className={`${flexBetween} mx-auto w-5/6 `} >
                <div className={`${flexBetween} w-full gap-4 `}>
               
                    

                    {/* {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-md`}>
                           <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                           <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                           <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                           <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                      
                    </div>) :(<button 
                                className={`rounded-full bg-secondary-500 p-2 `}
                                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <Bars3Icon className="h-6 w-6 text-white"/>
                                </button>)} */}
               
                </div>
            </div>
    </div>


     { !isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          helllooooooooooooooo
             <div className="flex justify-end p-12 ">
                     <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                     </button>
             </ div>
             <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                           <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                           <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                           <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                           <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>

             
        </ div>
    )}

</nav>
  )
}

export default Navbar
