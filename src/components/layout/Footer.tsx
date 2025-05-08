
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-tekk-dark-purple py-12 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tekk.ai</h3>
            <p className="text-sm text-gray-300 mb-4">
              Transform your ideas into comprehensive product specifications with AI.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/create" className="text-sm text-gray-300 hover:text-white">Create</Link></li>
              <li><Link to="/examples" className="text-sm text-gray-300 hover:text-white">Examples</Link></li>
              <li><Link to="/community" className="text-sm text-gray-300 hover:text-white">Community</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                Twitter
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Tekk.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
