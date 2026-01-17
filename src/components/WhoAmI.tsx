"use client";

import React from "react";

const Who: React.FC = () => {
  return (
    <section className="relative px-[2vw] lg:px-[5vw] py-20 overflow-hidden w-full">
      <div className="w-full mx-auto max-w-7xl">
        
        {/* Professional About Me Card */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-none px-1">
            {/* Professional Card Container */}
            <div className="relative bg-black backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl border border-gray-800 hover:border-gray-600 hover:shadow-2xl">
              
              {/* Profile Section */}
              <div className="flex flex-col lg:flex-row items-stretch">
                
                {/* Left Side - Profile Card */}
                <div className="lg:w-1/3 flex justify-center items-center py-8 lg:py-12">
                  {/* Profile Card Container */}
                  <div className="relative">
                    
                    {/* Border */}
                    <div className="border-overlay h-[329px] w-[265px] bg-transparent rounded-[10px] absolute top-[5px] left-[5px] z-20 pointer-events-none"></div>
                    
                    {/* Card */}
                    <div 
                      className="profile-card h-[339px] w-[275px] bg-black rounded-[10px] overflow-hidden shadow-[0_70px_63px_-60px_#000000] flex justify-center items-center relative"
                      style={{
                        backgroundImage: "url('/avatar.jpg')",
                        backgroundColor: '#000000'
                      }}
                    >
                      
                      {/* Content Overlay */}
                      <div className="relative z-10 w-full h-full">
                        {/* Name */}
                        <h2 className="absolute top-10 left-5 text-white text-xl font-bold m-5" style={{ fontFamily: 'Orbitron, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                          LOKESH
                        </h2>
                        
                        {/* Social Icons */}
                        <div className="icons absolute top-[220px] left-5 h-[130px] w-[50px] flex flex-col items-center justify-around fill-white text-white">
                          <a href="https://github.com/lokesh-username" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github text-white text-lg cursor-pointer hover:scale-125 transition-transform"></i>
                          </a>
                          <a href="https://linkedin.com/in/lokesh-profile" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in text-white text-lg cursor-pointer hover:scale-125 transition-transform"></i>
                          </a>
                          <a href="mailto:lokesh@example.com">
                            <i className="fas fa-envelope text-white text-lg cursor-pointer hover:scale-125 transition-transform"></i>
                          </a>
                          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp text-white text-lg cursor-pointer hover:scale-125 transition-transform"></i>
                          </a>
                        </div>
                      </div>
                      
                    </div>
                    
                    {/* Check Resume Button */}
                    <div className="flex justify-center mt-6">
                      <a
                        href="/resume.pdf"
                        download="Lokesh_Resume.pdf"
                        className="inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300 hover:bg-black active:bg-black focus:bg-black focus:outline-none focus:ring-0 hover:shadow-lg hover:scale-105 border border-gray-800"
                      >
                        <i className="fas fa-eye"></i>
                        Check Resume
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Side - About Me Content */}
                <div className="lg:w-2/3 p-6 lg:p-12 flex flex-col justify-center">
                  {/* About Me Header */}
                  <div className="mb-8">
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                      About Me
                    </h1>
                    <div className="w-24 h-1 bg-white rounded-full"></div>
                  </div>

                  {/* About Me Content */}
                  <div className="space-y-6 text-white leading-relaxed text-lg">
                    <p>
                      I am an engineering student passionate about building intelligent, scalable, and user-focused software solutions with real-world impact. I specialize in Software Engineering, Full-Stack Development, and Web Development, with strong proficiency in Python, SQL, and modern web technologies.
                    </p>
                    
                    <p>
                      I focus on designing and developing applications that automate workflows, improve system efficiency, and deliver seamless digital experiences. I prioritize writing clean, efficient, and maintainable code while following modern software engineering principles and best practices.
                    </p>

                    <p>
                      Driven by curiosity and continuous learning, I aim to build reliable, future-ready software systems that are practical, efficient, and impactful.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Who;