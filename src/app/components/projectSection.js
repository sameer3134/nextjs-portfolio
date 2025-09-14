import { ArrowRight, ExternalLink } from "lucide-react";
import { useDarkMode } from "./context/context";
import chatify from "../../../public/assets/chatify.png"
import docaid from "../../../public/assets/docaid.png"
import kashika from "../../../public/assets/kashika.png"
import recipe from "../../../public/assets/recipe.png"
import romanelli from "../../../public/assets/romanelli.png"
import template from "../../../public/assets/template.png"
import taskReminder from "../../../public/assets/taskReminder.png"
import Image from "next/image";

export const ProjectsSection = ({ sectionsRef }) => {
  const { darkMode } = useDarkMode();

  const projects = [
    {
      title: "Shopping-Site",
      description: "Developed an e-commerce platform featuring OAuth-based user authentication, real-time inventory management, and order processing, powered by Firebase for backend services and secure hosting.",
      tech: ["React.js","TypeScript","Redux","Tailwind CSS", "FireBase","PayPal"],
      image: kashika,
      gradient: "from-blue-500 to-purple-600",
      website: "https://kashikatheshiningone.com/",
      github: "https://github.com/sameer3134/Ecommerce"
    },
    {
      title: "Real Estate Platform Development",
      description: "Developed a responsive real estate platform based on detailed Figma designs, featuring dynamic property listings, modern UI elements, and seamless third-party API integration",
      tech: ["React.js","Tailwind CSS", "Node.js"],
      image: romanelli,
      gradient: "from-purple-500 to-pink-600",
      website: "https://romanelligroup.onrender.com/",
      github: "https://github.com/sameer3134/romanelliGroup"
    },
    {
      title: "TaskNest",
      description: "Built a Next.js task manager with JWT authentication, image optimization, route prefetching, and direct database access via serverless API routes.",
      tech: ["Next js","Tailwind CSS", "TypeScript","Firebase"],
      image: taskReminder,
      gradient: "from-purple-500 to-pink-600",
      website: "https://task-reminder-one.vercel.app/",
      github: "https://github.com/sameer3134/task-reminder"
    },
    {
      title: "Clinic Management Software",
      description: "Built a scalable appointment and billing platform using ReactJS, Redux, and TailwindCSS, improving development speed and UI consistency by 30%. Integrated Razorpay for subscription payments and WhatsApp for appointment confirmations, reducing checkout failures by 40% and boosting user engagement.",
      tech: ["React.js","Redux","Tailwind CSS","RazorPay"],
      image: docaid,
      gradient: "from-green-500 to-teal-600",
      website: "https://doc-aid.in/",
      github: "https://github.com/sameer31345/doc-aid"
    },
    
    {
      title: "Packet Sniffing",
      description: "I have completed this project in IIT-Roorkee. Packet Sniffer is used for capturing and monitor the network traffic through the installation of software on our device.It inspects and extract the valuable information such as passwords, IP addresses etc.",
      tech: ["Socket Programming","C","TCP/UDP"],
      image: chatify,
      gradient: "from-orange-500 to-red-600",
      website: "https://github.com/sameer3134/Internship",
      github: "hhttps://github.com/sameer3134/Internship"
    },
      {
      title: "Food-recipe",
      description: "We use api to extract recipes. On the basis of ingredient search , it will show all the recipe can make from it. I used Reactjs in designing this website",
      tech: ["React.js","Tailwind CSS"],
      image: recipe,
      gradient: "from-orange-500 to-red-600",
      website: "https://msfoodrecipe.netlify.app/",
      github: "https://github.com/sameer3134/food-recipe"
    },
      {
      title: "Website Template",
      description: "I design a static website of consultancy services company",
      tech: ["React.js","Tailwind CSS"],
      image: template,
      gradient: "from-orange-500 to-red-600",
      website: "https://sameer3134.github.io/osumarecom/",
      github: "https://github.com/sameer3134/Osumare"
    }
  ];

  return (
    <section
      ref={el => sectionsRef.current[3] = el}
      className={`min-h-screen ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold text-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Project
            </span>
          </h2>
        </div>

        {/* Grid Container */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-3xl overflow-hidden shadow-2xl group transform transition-all duration-500 ${
                  darkMode ? "bg-gray-900" : "bg-white"
                }`}
              >
                {/* Image */}
                <div className=" overflow-hidden h-64">
                  <Image
                    height={1000}
                    width={1000}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                </div>

                {/* Content */}
                <div className="p-8">
                  <h3
                    className={`text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent transition-colors ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className={` ${darkMode?"text-white":"text-gray-700"}  mb-6 leading-relaxed`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-purple-100 ${darkMode ? "text-white bg-gradient-to-r from-purple-500 to-pink-500":"text-white bg-purple-700/40"}   rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links: Website + GitHub */}
                  <div className="flex gap-6">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center cursor-pointer gap-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold hover:gap-4 hover:border-2 hover:border-purple-600 rounded-lg px-2 py-2 hover:shadow-md transition-all duration-300"
                    >
                      Live Website <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center cursor-pointer gap-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold hover:gap-4 hover:border-2 hover:border-purple-600 rounded-lg px-2 py-2 hover:shadow-md transition-all duration-300"
                    >
                      GitHub Repo <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
