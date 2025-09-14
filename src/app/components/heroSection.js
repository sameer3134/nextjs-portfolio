import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useDarkMode } from './context/context';
import profile from "../../../public/assets/profile.jpg"
import Image from 'next/image';

export const HeroSection = ({ sectionsRef }) => {
  const { darkMode } = useDarkMode();
  return (
    <section 
      ref={el => sectionsRef.current[0] = el}
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
    //   style={{ transform: `translateY(${scrollY * 0.5}px)` }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
        <div 
          className="absolute top-1/6 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        //   style={{ transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute bottom-1/6 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
        //   style={{ transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.2}px)` }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Profile Image */}
        <div className="relative mb-12 mt-30">
          <div className="w-48 h-48 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-spin-slow"></div>
            <div className={`absolute inset-2 rounded-full ${darkMode ? 'bg-gray-900' : 'bg-white'}`}></div>
            <Image
              src={profile}
              alt="Profile"
              width={100}
              height={100}
              className="absolute inset-4 h-40 w-40 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className={`text-6xl md:text-8xl font-bold mb-8 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <span className="block">Software</span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Developer
          </span>
        </h1>

        <p className={`text-xl mb-12  ${!darkMode ? 'text-gray-900' : 'text-white'}  max-w-3xl mx-auto leading-relaxed`}>
I love to do coding. I've been learning new skills every day. I am very committed to every job I take on and I like things to be done well and efficiently.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
           <a
  href="https://drive.google.com/file/d/1gezFBkCGtFxuVFAiGTj0F_FsD_4tY4tq/view"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-10 flex items-center gap-2 group text-white hover:underline"
>
  View My Resume
  <ArrowRight
    size={20}
    className="group-hover:translate-x-1 transition-transform"
  />
</a>
          </button>
        </div>
      </div>
    </section>
  );
};