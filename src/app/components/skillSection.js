import { Code, Palette, Zap } from "lucide-react";
import { useDarkMode } from "./context/context";

// Skills Section Component
export const SkillsSection = ({ sectionsRef, activeSection }) => {
  const { darkMode } = useDarkMode();
  
  const skills = [
    { name: "React", level: 95, icon: Code, color: "text-blue-400" },
    { name: "TypeScript", level: 90, icon: Zap, color: "text-blue-600" },
    { name: "Next.js", level: 85, icon: Zap, color: "text-yellow-400" },
    { name: "Tailwind CSS", level: 95, icon: Palette, color: "text-purple-400" },
    { name: "Java", level: 85, icon: Code, color: "text-orange-400" },
    { name: "Node.js", level: 80, icon: Code, color: "text-orange-600" },
    { name: "Git", level: 85, icon: Code, color: "text-red-400" },
    { name: "JavaScript", level: 90, icon: Code, color: "text-red-600" },
  ];

  return (
    <section 
      ref={el => sectionsRef.current[2] = el}
      className={`min-h-screen flex items-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-full mx-auto px-6 py-20">
        <h2 className={`text-5xl md:text-6xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          My{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-5 grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <skill.icon className={`${skill.color} group-hover:scale-110 transition-transform`} size={24} />
                  <span className={`md:text-lg text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span>
                </div>
                <span className="text-purple-600 font-bold">{skill.level}%</span>
              </div>
              
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform origin-left transition-transform duration-1000 ease-out group-hover:scale-x-105"
                  style={{ 
                    width: `${skill.level}%`,
                    // transform: `scaleX(${activeSection >= 2 ? 1 : 0})`,
                    transformOrigin: 'left'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
