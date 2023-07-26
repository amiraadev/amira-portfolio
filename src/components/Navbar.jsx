import  { useEffect, useState } from 'react';
import {Bars3Icon } from "@heroicons/react/24/solid";
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const controls = useAnimation();

  useEffect(() => {
    const staggerAnimation = async () => {
      await controls.start({
        opacity: 1,
        x: -10,
        transition: { duration: 1 },
      });
    };

    staggerAnimation();
  }, [controls]);

  return (
    <nav className="navbar p-6">
    { !isMobileMenuOpen && (
      <div className="flex md:hidden ml-auto">
        <HiMenuAlt3 onClick={toggleMobileMenu} className="w-8 h-8 cursor-pointer" />
      </div>
    )}
  </nav>
  //   <nav className="navbar p-6  ">
  //     <span></span>
  //     <div className="container mx-auto flex justify-between items-center">
  //       <motion.div 
  //            className=" hidden md:flex text-white  text-xl font-bold"
  //            initial="hidden"
  //            whileInView="visible"
  //            viewport={{ once: true, amount: 0.5 }}
  //            transition={{ duration: 3 }}
  //            variants={{
  //              hidden: { opacity: 0 },
  //              visible: { opacity: 1}, // Move staggerChildren here
  //            }}
  //            >
  //             Logo
  //           </motion.div>

  //         { !isMobileMenuOpen && <div className="flex justify-start  md:hidden"><HiMenuAlt3 onClick={toggleMobileMenu} className="w-8 h-8 cursor-pointer" /> </div>}
                 
  // <motion.div
  //     className="hidden md:flex justify-center flex-grow"
  //     initial={{ opacity: 0, x: 450 }}
  //     animate={controls}
  //   >
  //     <motion.a
  //       href="#"
  //       className="text-red-500 text-xl font-bold hover:text-red-400 mx-11"
  //     >
  //       Home
  //     </motion.a>
  //     <motion.a
  //       href="#"
  //       className="text-red-500 text-xl font-bold hover:text-red-400 mx-11"
  //     >
  //       About
  //     </motion.a>
  //     <motion.a
  //       href="#"
  //       className="text-red-500 text-xl font-bold hover:text-red-400 mx-11"
  //     >
  //       Services
  //     </motion.a>
  //     <motion.a
  //       href="#"
  //       className="text-red-500 text-xl font-bold hover:text-red-400 mx-11"
  //     >
  //       Contact
  //     </motion.a>
  //   </motion.div>


  //        {/* LinkedIn Icon */}
  //        <motion.div
  //          className="hidden md:flex "
  //          initial="hidden"
  //          whileInView="visible"
  //          viewport={{ once: true, amount: 0.5 }}
  //          transition={{ duration: 3 }}
  //          variants={{
  //            hidden: { opacity: 0 },
  //            visible: { opacity: 1}, 
  //          }}
  //          >
  //         <a href="https://www.linkedin.com/in/allagui-amira" className=" hover:scale-110 ">
  //           <FaLinkedin size={32} className="text-white mr-4 " />
  //         </a>

  //         {/* GitHub icon */}
  //         <a href="https://github.com/amirticha" className=" hover:scale-110 ">
  //           <FaGithub size={32} className="text-white" />
  //         </a>

  //        </motion.div>

  //     </div>

  //     {/* Mobile Menu */}
  //     <div
  //       className={`${
  //         isMobileMenuOpen ? 'block  items-center justify-between w-full'  : 'hidden'
  //       } md:hidden`}
  //     >
  //       <div className="flex justify-end p-8">
  //         <IoCloseOutline onClick={toggleMobileMenu} className="w-8 h-6 cursor-pointer" />
  //       </div>
  //       <a href="#" className="block text-red-500 px-40 py-3 hover:text-red-400 font-bold">
  //         Home
  //       </a>
  //       <a href="#" className="block text-red-500 px-40  py-3 hover:text-red-400 font-bold">
  //         About
  //       </a>
  //       <a href="#" className="block text-red-500 px-40  py-3 hover:text-red-400 font-bold">
  //         Services
  //       </a>
  //       <a href="#" className="block text-red-500 px-40 py-3 hover:text-red-400 font-bold">
  //         Contact
  //       </a>
  //       <div className="flex px-40 py-3">
  //         <a href="https://www.linkedin.com/in/allagui-amira" className="hover:scale-110">
  //           <FaLinkedin size={22} className="text-red-500 mr-5" />
  //         </a>
  //         <a href="https://github.com/amirticha" className="hover:scale-110">
  //           <FaGithub size={22} className="text-red-500" />
  //         </a>
  //       </div>
  //     </div>
  //   </nav>
  );
};

export default Navbar;
