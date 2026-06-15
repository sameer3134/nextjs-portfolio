import React from "react";
import { Code, Server, Brain } from "lucide-react";
import { useDarkMode } from "./context/context";

// Skills Section Component
export const SkillsSection = ({ sectionsRef, activeSection }) => {
  const { darkMode } = useDarkMode();
  
  const skillCategories = [
    {
      title: "Frontend & Fullstack",
      icon: Code,
      color: "text-blue-500 dark:text-blue-400",
      borderColor: "group-hover:border-blue-500/30",
      bgGradient: "from-blue-500/5 to-indigo-500/5",
      skills: [
        { name: "React / React Native", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Redux & State Management", level: 85 }
      ]
    },
    {
      title: "Backend & Cloud",
      icon: Server,
      color: "text-orange-500 dark:text-orange-400",
      borderColor: "group-hover:border-orange-500/30",
      bgGradient: "from-orange-500/5 to-red-500/5",
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "Java", level: 85 },
        { name: "AWS Cloud Services", level: 80 },
        { name: "Redis Caching", level: 85 },
        { name: "Apache Kafka Streaming", level: 80 },
        { name: "Node.js & Express", level: 80 }
      ]
    },
    {
      title: "AI, LLD & Systems",
      icon: Brain,
      color: "text-purple-500 dark:text-purple-400",
      borderColor: "group-hover:border-purple-500/30",
      bgGradient: "from-purple-500/5 to-pink-500/5",
      skills: [
        { name: "C (Socket Programming)", level: 85 },
        { name: "LangChain & LangGraph", level: 90 },
        { name: "LangSmith & LLMOps", level: 85 },
        { name: "Vector Databases (ChromaDB)", level: 85 },
        { name: "RAG Evaluation (Ragas / Phoenix)", level: 80 }
      ]
    }
  ];

  return (
    <section 
      ref={el => sectionsRef.current[2] = el}
      className={`min-h-screen flex items-center transition-colors duration-500 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A structured breakdown of my core technical stack, spanning client experiences, distributed backend systems, and AI models.
          </p>
        </div>

        {/* 3-Column Category Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className={`group rounded-3xl p-6 border transition-all duration-500 ${
                  darkMode 
                    ? `bg-gray-900/60 border-gray-800 hover:bg-gray-900/90 ${category.borderColor}` 
                    : `bg-gray-50 border-gray-200/60 hover:bg-white hover:shadow-xl ${category.borderColor}`
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.bgGradient} border border-purple-500/10`}>
                    <Icon className={`${category.color}`} size={24} />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-semibold">
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {skill.name}
                        </span>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Custom progress bar */}
                      <div className={`h-2.5 rounded-full overflow-hidden ${
                        darkMode ? 'bg-gray-800' : 'bg-gray-200'
                      }`}>
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-transform duration-1000 ease-out origin-left group-hover:scale-x-105"
                          style={{ 
                            width: `${skill.level}%`,
                            transformOrigin: 'left'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
