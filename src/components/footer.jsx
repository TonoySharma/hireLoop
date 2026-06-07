import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import FadeUp from './FadeUp';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <FadeUp className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-wide">JOB BOARD</h2>
            <p className="text-sm text-gray-400 mt-1">The AI-native career platform. Built for people<br></br> who take their work seriously.</p>
          </div>

  
          <div>
            <div >
              <h2 className="text-lg font-semibold text-white my-3">Social Links</h2>
            </div>
           <div className="flex gap-4">
                 <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-gray-800 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md"
            >
              <FaFacebookF size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-gray-800 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-gray-800 rounded-full text-sky-400 hover:bg-sky-400 hover:text-white transition-all duration-300 shadow-md"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-gray-800 rounded-full text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-md"
            >
              <FaGithub size={20} />
            </a>
           </div>
          </div>

        </div>

 
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} My Brand. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </FadeUp>
    </footer>
  );
};

export default Footer;