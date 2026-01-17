"use client";

import { FC } from "react";
import { FaCode, FaGlobe, FaChartBar, FaMicrochip, FaCog, FaBolt } from "react-icons/fa";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
}

const SERVICES: Service[] = [
  {
    id: "service-1",
    title: "Software & Application Development",
    description: "Develop desktop and enterprise applications using Python (Flask, PyQt5) and MySQL, featuring clean UI design, efficient backend logic, and secure data handling.",
    icon: <FaCode size={24} />
  },
  {
    id: "service-2",
    title: "Web Development",
    description: "Build responsive and dynamic web applications using HTML, CSS, JavaScript, Flask, and React, focusing on intuitive user experience, scalability, and performance optimization.",
    icon: <FaGlobe size={24} />
  },
  {
    id: "service-3",
    title: "Data Science & Machine Learning Solutions",
    description: "Design and deploy machine learning models using Python, Pandas, NumPy, and scikit-learn to analyze data, uncover insights, and make accurate predictions.",
    icon: <FaChartBar size={24} />
  },
  {
    id: "service-4",
    title: "Embedded Systems & IoT Development",
    description: "Create microcontroller-based embedded and IoT systems for automation, data acquisition, and real-time monitoring using Arduino, ESP32, and STM32 platforms.",
    icon: <FaMicrochip size={24} />
  },
  {
    id: "service-5",
    title: "PCB Design & Hardware Prototyping",
    description: "Design and implement schematic diagrams and multi-layer PCB layouts in Altium Designer and Proteus, ensuring optimal component placement and signal reliability.",
    icon: <FaCog size={24} />
  },
  {
    id: "service-6",
    title: "Electrical System Design & Analysis",
    description: "Conduct electrical circuit design, simulation, and testing, emphasizing fault detection, load management, and system efficiency in practical power networks.",
    icon: <FaBolt size={24} />
  }
];

const Services: FC = () => {
  return (
    <section className="py-16 px-[5vw] bg-black">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-5xl lg:text-6xl text-center text-white font-bold mb-4">Services</h1>
        <p className="text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto">
          Professional services I offer across different domains of technology and engineering
        </p>

        <div
          data-scroll
          data-scroll-speed="1"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-black rounded-xl p-4 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 relative flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
