
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { FileText, Layout as LayoutIcon, Pencil } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tekk-soft-purple to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-tekk-purple to-tekk-secondary-purple bg-clip-text text-transparent">
              Transform Your Ideas into Reality
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Tekk.ai turns your concepts into comprehensive Product Requirement Documents, 
              Functional Requirement Documents, and visually stunning Mockup Designs.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/create">
                <Button 
                  className="bg-tekk-purple hover:bg-tekk-secondary-purple text-white font-semibold px-8 py-6 text-lg"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/examples">
                <Button 
                  variant="outline" 
                  className="border-tekk-purple text-tekk-purple font-semibold px-8 py-6 text-lg"
                >
                  View Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Tekk.ai Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-tekk-soft-purple w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-tekk-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">PRD Generation</h3>
              <p className="text-gray-600">
                Create comprehensive Product Requirement Documents that outline your vision, goals, and success metrics.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-tekk-soft-purple w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <LayoutIcon className="text-tekk-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">FRD Creation</h3>
              <p className="text-gray-600">
                Generate detailed Functional Requirement Documents that break down technical specifications and implementation details.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-tekk-soft-purple w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Pencil className="text-tekk-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mockup Design</h3>
              <p className="text-gray-600">
                Visualize your product with professionally designed mockups that bring your concept to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-tekk-dark-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Next Great Idea?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are using Tekk.ai to transform their ideas into market-ready products.
          </p>
          <Link to="/create">
            <Button className="bg-tekk-purple hover:bg-tekk-secondary-purple text-white font-semibold px-8 py-6 text-lg">
              Start Creating Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Tekk.ai saved us weeks of planning and documentation. The PRD it generated was comprehensive and ready to use with minimal edits."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-tekk-purple text-white flex items-center justify-center font-semibold">JS</div>
                <div className="ml-3">
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-sm text-gray-500">Product Manager, TechStart</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The mockup designs were incredibly detailed and helped us secure funding for our startup. Tekk.ai is a game-changer!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-tekk-purple text-white flex items-center justify-center font-semibold">MJ</div>
                <div className="ml-3">
                  <p className="font-medium">Michael Johnson</p>
                  <p className="text-sm text-gray-500">Founder, InnovateCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
