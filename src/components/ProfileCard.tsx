"use client";

import { FC } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";

const ProfileCard: FC = () => {
  return (
    <section className="flex justify-center items-center min-h-screen py-20 px-4 bg-black">
      <div className="container max-w-6xl mx-auto flex justify-center">
        
        {/* Modern Profile Card */}
        <div className="w-full max-w-md">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-2xl hover:shadow-blue-900/20">
            
            {/* Profile Header with Image */}
            <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden bg-gray-800">
                    <Image
                      src="/avatar.jpg"
                      alt="Lokesh Profile"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="pt-20 pb-8 px-8 text-center">
              {/* Name & Title */}
              <h2 className="text-3xl font-bold text-white mb-2">
                Lokesh Nachukuppam
              </h2>
              <p className="text-blue-400 font-medium mb-2">
                Computer Science Student
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Machine Learning Enthusiast | Full Stack Developer
              </p>

              {/* Email */}
              <a 
                href="mailto:lokesh.nachukuppam@gmail.com"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors mb-6"
              >
                <FaEnvelope className="text-lg" />
                <span className="text-sm">lokesh.nachukuppam@gmail.com</span>
              </a>

              {/* Divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto my-6 rounded-full"></div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-6">
                <a
                  href="https://github.com/lokeshnachukuppam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <FaGithub className="text-white text-xl" />
                </a>
                <a
                  href="https://linkedin.com/in/lokeshnachukuppam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin className="text-white text-xl" />
                </a>
                <a
                  href="https://leetcode.com/lokeshnachukuppam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <SiLeetcode className="text-white text-xl" />
                </a>
              </div>

              {/* Download Resume Button */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-900/50"
              >
                <FaFileDownload className="text-lg" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProfileCard;