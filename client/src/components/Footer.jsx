import React from "react";
import Logo from "/logo.png"; // Ensure this path matches your logo file location

const Footer = () => {
  return (
    <footer className="footer bg-teal-100 text-teal-800 p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Logo and Info Section */}
        <aside className="flex flex-col space-y-4">
          <div className="flex flex-col items-start space-y-3">
            <img
              src={Logo}
              alt="TypeScript Logo"
              className="w-32 md:w-28 md: mb-2 hover:opacity-90 transition-opacity"
            />
            <p className="text-teal-800 font-semibold text-lg md:text-xl leading-relaxed">
              TypeScript
              <br />
              <span className="text-teal-600 text-sm md:text-base italic">
                Sharing knowledge since 2025
              </span>
            </p>
          </div>
        </aside>

        {/* Posts Section */}
        <div className="flex flex-col space-y-4">
          <h6 className="footer-title text-xl font-bold text-teal-900">
            Posts
          </h6>
          <ul className="space-y-3">
            <li>
              <a className="link link-hover text-teal-700 hover:text-teal-900 transition-colors duration-200 text-base md:text-lg">
                Latest Blogs
              </a>
            </li>
            <li>
              <a className="link link-hover text-teal-700 hover:text-teal-900 transition-colors duration-200 text-base md:text-lg">
                Trending Topics
              </a>
            </li>
            <li>
              <a className="link link-hover text-teal-700 hover:text-teal-900 transition-colors duration-200 text-base md:text-lg">
                Tech Insights
              </a>
            </li>
            <li>
              <a className="link link-hover text-teal-700 hover:text-teal-900 transition-colors duration-200 text-base md:text-lg">
                Tutorials
              </a>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <h6 className="footer-title text-xl font-bold text-teal-900">
            About
          </h6>
          <ul className="space-y-3">
            <li>
              <a className="link link-hover text-teal-700 hover:text-teal-900 transition-colors duration-200 text-base md:text-lg">
                Our Team
              </a>
            </li>
            <li>
              <a className="link link-hover text-teal-700 hover:text-teal-900 transition-colors duration-200 text-base md:text-lg">
                Contact Us
              </a>
            </li>
            <li>
              <a className="link link-hover text-teal-700 hover:text-teal-900 transition-colors duration-200 text-base md:text-lg">
                Careers
              </a>
            </li>
            <li>
              <a className="link link-hover text-teal-700 hover:text-teal-900 transition-colors duration-200 text-base md:text-lg">
                Media Kit
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-teal-300 pt-6 text-center">
        <p className="text-sm md:text-base text-teal-600 hover:text-teal-800 transition-colors duration-200">
          &copy; 2025 TypeScript Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
