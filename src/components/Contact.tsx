"use client";

import { FC } from "react";
import Image from "next/image";
import { SOCIAL_LINKS } from "../data/social-links";

const Contact: FC = () => {
  return (
    <section className="py-20 px-[5vw] bg-black">
      <div className="max-w-2xl mx-auto">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact Me
          </h1>
          <p className="text-gray-300 text-xl font-light mb-4 max-w-2xl mx-auto">
            Let's connect! Drop me a message below 💬
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-600"></div>
            <a 
              href="mailto:lokesh.nachukuppam@gmail.com" 
              className="text-blue-400 hover:text-blue-300 transition-all duration-300 text-lg font-medium hover:scale-105 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              lokesh.nachukuppam@gmail.com
            </a>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-600"></div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 mb-12 hover:border-purple-500/50 transition-all duration-500 shadow-2xl hover:shadow-purple-900/20">
          <form action="mailto:lokesh.nachukuppam@gmail.com" method="post" encType="text/plain" className="space-y-5">
            {/* Your Name */}
            <div className="group">
              <label htmlFor="name" className="block text-white font-semibold mb-2 text-sm uppercase tracking-wide">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                placeholder=""
              />
            </div>

            {/* Your Email */}
            <div className="group">
              <label htmlFor="email" className="block text-white font-semibold mb-2 text-sm uppercase tracking-wide">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                placeholder=""
              />
            </div>

            {/* Your Message */}
            <div className="group">
              <label htmlFor="message" className="block text-white font-semibold mb-2 text-sm uppercase tracking-wide">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project or just say hi!"
              ></textarea>
            </div>

            {/* Send Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-purple-900/50 hover:scale-[1.02] group"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Find me elsewhere</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 bg-black border border-gray-800 hover:border-gray-600 p-4 rounded-xl transition-all duration-300 min-w-[100px] hover:scale-105 hover:shadow-xl hover:shadow-blue-900/10"
              >
                <Image
                  className="w-[40px] h-[40px] rounded-full"
                  src={item.icon}
                  alt={`${item.title} social media icon`}
                  width={40}
                  height={40}
                />
                <span className="text-sm text-gray-400">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
