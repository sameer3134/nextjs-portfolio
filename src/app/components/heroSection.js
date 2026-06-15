import React from 'react';
import { ArrowRight, MapPin, Download } from 'lucide-react';
import { useDarkMode } from './context/context';
import profile from "../../../public/assets/profile.jpg";
import Image from 'next/image';

export const HeroSection = ({ sectionsRef }) => {
  const { darkMode } = useDarkMode();

  const techStack = ['FastAPI', 'React', 'Next.JS', 'AWS', 'Docker', 'Kafka', 'Redis', 'LangChain', 'LangGraph'];

  return (
    <section
      ref={el => sectionsRef.current[0] = el}
      className={`min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 pb-6 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}
    >
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* Profile Image */}
        <div className="relative mb-10 mt-24">
          <div className="w-44 h-44 md:w-52 md:h-52 relative">
            {/* Spinning gradient ring */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin"
              style={{ animationDuration: '6s' }}
            />
            <div className={`absolute inset-1 rounded-full ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`} />
            <Image
              src={profile}
              alt="Mohd Sameer"
              width={300}
              height={300}
              priority
              className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full object-cover object-top"
            />
          </div>


        </div>

        {/* Greeting */}
        <p className={`text-base md:text-lg font-medium tracking-widest uppercase mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Hi there, I&apos;m
        </p>

        {/* Name — large gradient */}
        <h1 className="font-black tracking-tight leading-none mb-5">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Mohd Sameer
          </span>
        </h1>

        {/* Role */}
        <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border mb-8 ${darkMode
          ? 'bg-white/5 border-white/10 text-gray-200'
          : 'bg-black/5 border-black/10 text-gray-700'
          }`}>
          <span className="text-lg md:text-xl font-semibold">
            Full-Stack, Cloud & AI Engineer
          </span>
        </div>

        {/* Location */}
        <div className={`flex items-center gap-1.5 mb-6 text-sm font-medium ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          <MapPin size={13} className="text-purple-400" />
          <span>Bangalore, India · Truedax Studio</span>
        </div>

        {/* Bio */}
        <p className={`text-base md:text-lg leading-relaxed mb-10 max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          I build high-scale systems, production-grade AI pipelines, and beautiful full-stack applications —
          from Kafka event streams to self-correcting RAG agents on AWS.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href="https://drive.google.com/file/d/1gezFBkCGtFxuVFAiGTj0F_FsD_4tY4tq/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
          >
            <Download size={18} />
            View Resume
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => sectionsRef.current[4]?.scrollIntoView({ behavior: 'smooth' })}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold border-2 transition-all duration-300 hover:scale-105 ${darkMode
              ? 'border-gray-700 text-gray-300 hover:border-purple-500 hover:text-purple-300'
              : 'border-gray-300 text-gray-600 hover:border-purple-500 hover:text-purple-600'
              }`}
          >
            {"Let's"} Connect
          </button>
        </div>

        {/* Tech Stack Pills */}
        <div className="w-full">
          <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
            Core Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 text-xs font-semibold rounded-full border cursor-default transition-all duration-300 hover:scale-105 hover:shadow-md ${darkMode
                  ? 'bg-gray-900 border-gray-800 text-gray-300 hover:border-purple-500/40 hover:text-purple-300 hover:bg-purple-500/5'
                  : 'bg-white border-gray-200 text-gray-600 shadow-sm hover:border-purple-300 hover:text-purple-600'
                  }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};