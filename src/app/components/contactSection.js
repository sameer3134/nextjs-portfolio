import { ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useDarkMode } from "./context/context";

export const ContactSection = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className={`text-5xl md:text-6xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Let's{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        
        <p className={`text-xl mb-12 ${darkMode?"text-white":"text-gray-700"}`}>
          Ready to bring your ideas to life? Let's create something extraordinary together.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href="mailto:mohdsameer3134@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
          {[
            { icon: Github,  color: "hover:text-gray-900 dark:hover:text-white", link:"https://github.com/sameer3134" },
            { icon: Linkedin,  color: "hover:text-blue-500", link:"https://www.linkedin.com/in/mohdsameer3134/" },
            { icon: Instagram,  color: "hover:text-red-500" ,link:"http://instagram.com/sameer_.3134"}
          ].map((social, index) => (
            <a
              key={index}
              href={social.link} target="_blank"
              className={`p-4 rounded-full text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          
        </div>
      </div>
    </section>
  );
};
