"use client";

import { FC } from "react";
import Image from "next/image";
import { generateIconUrl } from "../lib/utils";
import { SKILLS_CATEGORIES } from "../data/skills";

const Skills: FC = () => {
  const categoryConfig = {
    "Frontend": {
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      bgGradient: "from-cyan-500/20 to-purple-600/20",
      icon: "🎨",
      description: "User Interface & Experience"
    },
    "Backend": {
      gradient: "from-emerald-400 via-teal-500 to-green-600", 
      bgGradient: "from-emerald-500/20 to-green-600/20",
      icon: "⚙️",
      description: "Server & Database Technologies"
    },
    "Machine Learning": {
      gradient: "from-orange-400 via-red-500 to-pink-600",
      bgGradient: "from-orange-500/20 to-pink-600/20",
      icon: "🤖",
      description: "AI & Data Science"
    },
    "Tools & Others": {
      gradient: "from-violet-400 via-purple-500 to-indigo-600",
      bgGradient: "from-violet-500/20 to-indigo-600/20",
      icon: "🛠️",
      description: "Development Tools & Platforms"
    },
  };

  return (
    <section className="relative px-[2vw] lg:px-[5vw] py-20 overflow-hidden bg-black">
      {/* Background Effects - Removed for dark black background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5"></div>
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div> */}
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1
            className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Skills & Expertise
          </h1>
          <p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Explore my technical arsenal - from frontend magic to AI wizardry, 
            here&apos;s everything I bring to the table
          </p>
        </div>

        {/* Skills Categories - 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {Object.entries(SKILLS_CATEGORIES).map(([category, skills], index) => {
            const config = categoryConfig[category as keyof typeof categoryConfig];
            return (
              <div
                key={category}
                className="group relative"
              >
                {/* Main Card - Dark Black Design */}
                <div className="relative bg-black rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 h-full group-hover:shadow-2xl group-hover:shadow-blue-900/10">
                  
                  {/* Gradient Top Accent */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-2xl bg-gradient-to-r ${config.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                  
                  {/* Category Header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-3xl mr-4">{config.icon}</span>
                        <div>
                          <h2 className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                            {category}
                          </h2>
                          <p className="text-gray-400 text-sm mt-1">{config.description}</p>
                        </div>
                      </div>
                      <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${config.gradient}`}></div>
                    </div>
                  </div>

                  {/* Skills Grid - Optimized for Card Layout */}
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {skills.map((skill, skillIndex) => (
                        <div
                          key={skill.title}
                          className="group/skill relative flex flex-col items-center"
                          style={{ animationDelay: `${skillIndex * 75}ms` }}
                        >
                          {/* Skill Card - Dark Design */}
                          <div className="bg-gray-900/50 rounded-xl px-3 py-3.5 border border-gray-800 hover:border-gray-600 hover:bg-gray-900/70 transition-all duration-200 w-full flex flex-col items-center justify-center group/skill hover:scale-105">
                            
                            {/* Skill Icon - Simple */}
                            <div className="flex justify-center items-center mb-2">
                              <Image
                                className="w-7 h-7 object-contain"
                                src={generateIconUrl(skill.image, 32, 32)}
                                alt={`${skill.title} icon`}
                                width={32}
                                height={32}
                                onError={(e) => {
                                  // Simple fallback
                                  const target = e.target as HTMLImageElement;
                                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23374151'/%3E%3Ctext x='20' y='25' text-anchor='middle' fill='%23fff' font-size='16'%3E?%3C/text%3E%3C/svg%3E";
                                }}
                              />
                            </div>
                            
                            {/* Skill Name - Simple */}
                            <p className="text-center text-xs font-medium text-gray-300 leading-tight px-1">
                              {skill.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { count: "4+", label: "Frontend Tech", gradient: "from-cyan-400 to-blue-600", icon: "🎨" },
            { count: "3+", label: "Backend Tech", gradient: "from-emerald-400 to-green-600", icon: "⚙️" },
            { count: "6+", label: "ML Libraries", gradient: "from-orange-400 to-red-600", icon: "🤖" },
            { count: "7+", label: "Dev Tools", gradient: "from-violet-400 to-purple-600", icon: "🛠️" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative"
            >
              {/* Statistics Card - Dark Black */}
              <div className="bg-black rounded-xl p-5 border border-gray-800 hover:border-gray-600 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 text-center group-hover:scale-105">
                <div className="text-xl mb-2">{stat.icon}</div>
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.count}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
