"use client";

import { BiLinkExternal } from "react-icons/bi";
import { FC, useState } from "react";
import { FaGithub, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { generateIconUrl } from "../lib/utils";
import { PROJECTS } from "../data/projects";

const MainProjects: FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const toggleExpanded = (projectId: string) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  const isExpanded = (projectId: string) => expandedProjects.has(projectId);

  return (
    <section className="px-[2vw] lg:px-[8vw] py-16">
      <div className="text-center mb-10 md:mb-20">
        <h1 className="text-5xl lg:text-6xl text-white font-bold mb-4">My Best Projects</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Showcasing innovative solutions and technical excellence
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {PROJECTS.map((project) => {
          const expanded = isExpanded(project.id);
          const shouldShowReadMore = project.description.length > 120;
          
          return (
            <div
              key={project.id}
              className="relative flex bg-black border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 group h-72 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              {/* Left: Image */}
              <div className="w-2/5 relative overflow-hidden">
                <Image
                  src={project.image.url}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  style={{
                    transform: project.image.url.includes('face-emotion-recognition') 
                      ? 'scale(1.0)' 
                      : project.image.url.includes('fireverse') 
                      ? 'scale(1.05)' 
                      : project.image.url.includes('smart-attendance')
                      ? 'scale(1.0)'
                      : 'scale(1)',
                    objectPosition: project.image.url.includes('smart-attendance') 
                      ? 'center 10%' 
                      : project.image.url.includes('face-emotion-recognition')
                      ? '55% center'
                      : 'center'
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Right: Content */}
              <div className="w-3/5 p-6 flex flex-col h-full relative">
                {/* Top Section */}
                <div>
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 shrink-0">
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-blue-400 transition-colors"
                          title="Live Demo"
                        >
                          <BiLinkExternal size={20} />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        title="View Code"
                      >
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {shouldShowReadMore && (
                    <button
                      onClick={() => toggleExpanded(project.id)}
                      className="text-xs text-blue-400 hover:text-blue-300 mt-1 font-medium flex items-center gap-1"
                    >
                      Read More
                    </button>
                  )}
                </div>

                {/* Bottom Section: Tech Stack Icons */}
                <div className="mt-auto pt-4 border-t border-gray-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <div key={tech} className="relative group/icon bg-gray-900 p-1.5 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors" title={tech}>
                        <Image
                          src={generateIconUrl(tech, 20, 20)}
                          alt={tech}
                          width={20}
                          height={20}
                          className="opacity-70 group-hover/icon:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-xs font-medium text-gray-500 px-2">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Slide-up Full Description Overlay */}
              <div 
                className={`absolute inset-0 bg-black/95 backdrop-blur-md p-6 transition-transform duration-500 ease-in-out z-20 flex flex-col ${
                  expanded ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                <div className="flex justify-between items-center mb-4 shrink-0">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpanded(project.id);
                    }}
                    className="text-gray-400 hover:text-white p-2 hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
                <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar">
                  <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-wrap">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MainProjects;
