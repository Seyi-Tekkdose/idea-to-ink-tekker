
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Layout, Users } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-tekk-purple">Tekk.ai</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-gray-600 hover:text-tekk-purple transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/create" 
              className="text-sm font-medium text-gray-600 hover:text-tekk-purple transition-colors flex items-center gap-1"
            >
              <FileText className="h-4 w-4" />
              Create
            </Link>
            <Link 
              to="/examples" 
              className="text-sm font-medium text-gray-600 hover:text-tekk-purple transition-colors flex items-center gap-1"
            >
              <Layout className="h-4 w-4" />
              Examples
            </Link>
            <Link 
              to="/community" 
              className="text-sm font-medium text-gray-600 hover:text-tekk-purple transition-colors flex items-center gap-1"
            >
              <Users className="h-4 w-4" />
              Community
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/sign-in">
            <Button variant="outline" size="sm" className="border-tekk-purple text-tekk-purple">
              Sign In
            </Button>
          </Link>
          <Link to="/sign-up">
            <Button size="sm" className="bg-tekk-purple hover:bg-tekk-secondary-purple text-white">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
