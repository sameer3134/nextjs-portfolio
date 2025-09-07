import { Code, Palette, Zap } from "lucide-react";
import { useDarkMode } from "./context/context";

// About Section Component
export const AboutSection = ({ sectionsRef }) => {
  const { darkMode } = useDarkMode();

  return (
    <section 
      ref={el => sectionsRef.current[1] = el}
      className={`min-h-screen flex items-center ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`text-5xl md:text-6xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              About{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className={`space-y-6 text-lg ${darkMode? "text-white":"text-gray-700"}  `}>
              <p className="transform hover:translate-x-2 transition-transform duration-300">
Hi Everyone, my name is Mohd Sameer from Kanpur, India.
              </p>
              <p className="transform hover:translate-x-2 transition-transform duration-300 delay-100">
              I am a Software Developer. Currently working at Reshita since February 2024, 
              I specialize in developing and optimizing user interfaces using ReactJS, Redux,
               and TailwindCSS for large-scale projects. I have integrated features like Razorpay 
               subscriptions and WhatsApp for seamless payments and communication. My focus is on 
               crafting intuitive experiences, ensuring performance, and adhering to best practices
                to deliver efficient, scalable solutions.
              </p>
              {/* <p className="transform hover:translate-x-2 transition-transform duration-300 delay-200">
                When I'm not coding, you'll find me exploring emerging technologies, contributing to open source, 
                or mentoring the next generation of developers.
              </p> */}
            </div>

            {/* Stats with Animation */}
            {/* <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { number: "100+", label: "Projects" },
                { number: "5+", label: "Years" },
                { number: "50+", label: "Clients" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Interactive Card */}
          <div className="relative">
            <div className={`rounded-3xl p-8 shadow-2xl transform hover:rotate-1 transition-all duration-500 ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            }`}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Innovation First</h3>
                    <p className="text-gray-600 dark:text-gray-400">Always exploring new possibilities</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <Palette className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Design Thinking</h3>
                    <p className="text-gray-600 dark:text-gray-400">User-centered approach to development</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <Zap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Performance</h3>
                    <p className="text-gray-600 dark:text-gray-400">Optimized for speed and efficiency</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};