"use client";

import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-black border-t border-gray-700 py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nachukuppam Lokesh. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with Next.js, React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;