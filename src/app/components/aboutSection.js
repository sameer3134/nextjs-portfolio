import React, { useState } from "react";
import { Code, Brain, Server, Network, Activity, Briefcase, Calendar, ChevronRight } from "lucide-react";
import { useDarkMode } from "./context/context";

// About Section Component
export const AboutSection = ({ sectionsRef }) => {
  const { darkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState("experience"); // "experience" or "focus"

  const focusAreas = [
    {
      title: "AI Engineering & RAG",
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      description: "Designing enterprise-grade Retrieval-Augmented Generation (RAG) pipelines, focusing on vector database optimization, chunking strategies, and low-latency retrieval.",
      details: ["LangChain & LangSmith", "Vector search & ChromaDB", "Self-correcting state machines"]
    },
    {
      title: "High-Scale Microservices",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      description: "Utilizing Apache Kafka for high-throughput real-time data streams and Redis to optimize system performance, manage session states, and handle high-volume traffic.",
      details: ["Apache Kafka event streams", "Redis caching & pub-sub", "Decoupled architectures"]
    },
    {
      title: "LLD & Networking",
      icon: Network,
      color: "from-green-500 to-emerald-500",
      description: "Hands-on experience with low-level systems in C, custom packet sniffing, and network socket programming. Deep understanding of OSI, TCP/IP, and packet analysis.",
      details: ["Socket programming in C", "Custom packet sniffing", "Low-latency systems"]
    },
    {
      title: "LLM Ops & Reliability",
      icon: Activity,
      color: "from-pink-500 to-rose-500",
      description: "Establishing reliable, cost-optimized AI infrastructure using Golden Datasets for evaluation and workflow tracking via LangSmith.",
      details: ["Golden Datasets eval", "LangSmith flow tracking", "Reliable LLM pipelines"]
    },
    {
      title: "Advanced DSA",
      icon: Code,
      color: "from-orange-500 to-amber-500",
      description: "Actively practicing advanced data structures and algorithms, specializing in sliding window techniques, trees, graphs, and dynamic programming.",
      details: ["Sliding Window", "Trees & Graphs", "Dynamic Programming"]
    }
  ];

  const experience = [
    {
      role: "Software Engineer",
      company: "Truedax Studio",
      period: "October 2024 – Present",
      description: "Specializing in full-stack development, cloud-hosted systems on AWS, and production-ready AI engineering. Building high-scale architectures with Kafka and Redis, and deploying self-correcting RAG pipelines using LangGraph and LangChain.",
      skills: ["AWS", "Kafka", "Redis", "LangChain", "LangGraph", "Next.JS", "React", "FastAPI"]
    },
    {
      role: "Software Developer",
      company: "Reshita",
      period: "February 2024 – October 2024",
      description: "Developed and optimized user interfaces using ReactJS, Redux, and TailwindCSS for large-scale projects. Integrated Razorpay subscription payments and WhatsApp confirmation APIs to reduce checkout failures by 40% and increase engagement.",
      skills: ["React.js", "Redux", "Tailwind CSS", "Razorpay API", "WhatsApp Integration"]
    }
  ];

  return (
    <section
      ref={el => sectionsRef.current[1] = el}
      className={`min-h-screen flex items-center transition-colors duration-500 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Title and About Paragraph */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className={`text-5xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              About{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className={`space-y-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="leading-relaxed">
                Hi Everyone, my name is <strong className={darkMode ? "text-white" : "text-gray-950"}>Mohd Sameer</strong> from Bangalore, India.
              </p>
              <p className="leading-relaxed">
                I am a professional software developer specializing in full-stack development, cloud-hosted systems, and AI engineering. I enjoy building end-to-end, optimized systems that couple low-level system design with state-of-the-art AI orchestration.
              </p>
              <p className="leading-relaxed">
                Whether implementing real-time event streaming using Apache Kafka, optimizing cache performance using Redis, writing low-level socket applications in C, or designing robust multi-tenant RAG pipelines on AWS, my focus is always on high performance, reliability, and security.
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "experience"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20 scale-105"
                    : `${darkMode ? "bg-gray-900 text-gray-400 hover:text-white" : "bg-white text-gray-600 hover:text-gray-900"} border border-gray-200 dark:border-gray-700`
                  }`}
              >
                <Briefcase size={18} />
                <span>Experience</span>
              </button>
              <button
                onClick={() => setActiveTab("focus")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "focus"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20 scale-105"
                    : `${darkMode ? "bg-gray-900 text-gray-400 hover:text-white" : "bg-white text-gray-600 hover:text-gray-900"} border border-gray-200 dark:border-gray-700`
                  }`}
              >
                <Code size={18} />
                <span>Focus Areas</span>
              </button>
            </div>
          </div>

          {/* Right Column: Tab Content Container */}
          <div className="lg:col-span-7">
            <div className={`rounded-3xl p-8 shadow-2xl transition-all duration-500 min-h-[500px] flex flex-col justify-start ${darkMode ? 'bg-gray-900' : 'bg-white'
              }`}>

              {/* Experience Timeline Tab */}
              {activeTab === "experience" && (
                <div className="space-y-12">
                  <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Professional Journey
                  </h3>
                  <div className="relative border-l-2 border-purple-500/30 ml-4 space-y-12">
                    {experience.map((exp, index) => (
                      <div key={index} className="relative pl-8 group">
                        {/* Timeline Node */}
                        <div className="absolute -left-[9px] top-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white dark:border-gray-900 group-hover:scale-125 transition-transform duration-300 shadow-md"></div>

                        {/* Period Badge */}
                        <div className="flex items-center gap-2 text-sm font-semibold text-purple-500 mb-2">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>

                        {/* Title & Company */}
                        <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {exp.role}{' '}
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">
                            @ {exp.company}
                          </span>
                        </h4>

                        {/* Description */}
                        <p className={`mt-3 leading-relaxed text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {exp.description}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className={`px-3 py-1 text-xs rounded-full font-medium ${darkMode ? 'bg-gray-800 text-purple-300 border border-purple-500/20' : 'bg-purple-50 text-purple-700 border border-purple-100'
                                }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Focus Areas Grid Tab */}
              {activeTab === "focus" && (
                <div className="space-y-6">
                  <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Key Focus Areas & Research
                  </h3>
                  <div className="grid sm:grid-cols-1 gap-6 max-h-[520px] overflow-y-auto pr-2">
                    {focusAreas.map((area, index) => {
                      const Icon = area.icon;
                      return (
                        <div
                          key={index}
                          className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg ${darkMode
                              ? 'bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/80 hover:border-purple-500/30'
                              : 'bg-gray-50 border-gray-100 hover:bg-white hover:border-purple-500/30'
                            }`}
                        >
                          <div className="flex items-start gap-4">
                            {/* Icon Container with dynamic gradient background */}
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${area.color} text-white shadow-md`}>
                              <Icon size={20} />
                            </div>
                            <div className="space-y-2 flex-1">
                              <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {area.title}
                              </h4>
                              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {area.description}
                              </p>
                              {/* Detail Bullet tags */}
                              <div className="flex flex-wrap gap-2 pt-1">
                                {area.details.map((detail, idx) => (
                                  <span
                                    key={idx}
                                    className={`flex items-center gap-1 text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-50 text-purple-700'
                                      }`}
                                  >
                                    <ChevronRight size={10} />
                                    {detail}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};