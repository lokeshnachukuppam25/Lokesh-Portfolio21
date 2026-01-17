"use client";

import { FC } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaCircle } from "react-icons/fa";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "VCodez",
    position: "Data Science Intern",
    location: "On-site",
    duration: "June 2025 – September 2025",
    description: "Gained hands-on experience in data preprocessing, visualization, and exploratory analysis, applying core Data Science and Machine Learning techniques to real-world datasets. Worked extensively with Python, SQL, Pandas, NumPy, scikit-learn, and various visualization tools to clean, transform, and analyze data. Developed and evaluated classification models, improving understanding of feature scaling, model accuracy, and performance tuning, while enhancing analytical and problem-solving skills through practical project work.",
    technologies: ["Python", "SQL", "Pandas", "NumPy", "scikit-learn", "Machine Learning", "Data Visualization"]
  },
  {
    id: "exp-2",
    company: "APSPDCL",
    position: "Summer Intern",
    location: "On-site",
    duration: "December 2022 – June 2023",
    description: "Contributed to substation operations and transformer maintenance, gaining practical experience in fault detection, load balancing, and electrical safety procedures. Collaborated with field engineers to monitor and analyze power distribution faults, supporting grid stability and enhancing outage response efficiency. Acquired hands-on exposure to SCADA systems and energy auditing, deepening understanding of real-time monitoring, automation, and efficient energy management in power distribution networks.",
    technologies: ["SCADA Systems", "Power Distribution", "Fault Detection", "Load Balancing", "Energy Auditing", "Electrical Safety", "Grid Stability"]
  }
];

const Experience: FC = () => {
  return (
    <section className="py-16 px-[5vw] bg-black">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-5xl lg:text-6xl text-center text-white font-bold mb-4">
          Experience
        </h1>
        <p className="text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto">
          My professional journey and internship experiences
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>
          
          {EXPERIENCES.map((experience, index) => (
            <div key={experience.id} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black flex items-center justify-center shadow-lg hidden md:flex z-10">
                <FaCircle className="text-white text-xs" />
              </div>
              
              {/* Experience Card */}
              <div className="md:ml-20 bg-black rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Step Number for Mobile */}
                  <div className="md:hidden flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
                  </div>

                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="mb-3 lg:mb-0">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                        {experience.position}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-400 font-semibold">
                        <FaBriefcase size={16} />
                        <span>{experience.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-300">
                        <FaMapMarkerAlt size={14} />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <FaCalendarAlt size={14} />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      {experience.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 text-sm">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-black text-gray-300 rounded-full text-xs lg:text-sm border border-gray-800 hover:border-gray-600 transition-colors duration-200 group-hover:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;