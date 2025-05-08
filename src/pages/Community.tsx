
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageSquare, Award, Calendar } from "lucide-react";

const Community = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-tekk-soft-purple to-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Community</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Connect with fellow creators, get feedback on your ideas, 
            and collaborate with product experts.
          </p>
          <Link to="/sign-up">
            <Button className="bg-tekk-purple hover:bg-tekk-secondary-purple text-white px-8 py-6 text-lg">
              Become a Member
            </Button>
          </Link>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Community Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <Card className="border-t-4 border-t-tekk-purple">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-tekk-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">Network</h3>
                <p className="text-gray-600">
                  Connect with like-minded innovators and entrepreneurs who share your passion.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="border-t-4 border-t-tekk-purple">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <MessageSquare className="h-12 w-12 text-tekk-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">Feedback</h3>
                <p className="text-gray-600">
                  Get valuable insights and feedback on your ideas from industry experts.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="border-t-4 border-t-tekk-purple">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-tekk-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">Resources</h3>
                <p className="text-gray-600">
                  Access exclusive tutorials, templates, and tools to accelerate your product development.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 4 */}
            <Card className="border-t-4 border-t-tekk-purple">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Calendar className="h-12 w-12 text-tekk-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">Events</h3>
                <p className="text-gray-600">
                  Participate in virtual workshops, hackathons, and networking events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Membership Tiers</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the membership level that's right for you and start your journey with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <Card className="flex flex-col h-full">
              <CardContent className="pt-6 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Free</h3>
                  <div className="text-3xl font-bold mb-2">$0</div>
                  <p className="text-sm text-gray-500">No credit card required</p>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>3 document generations per month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Community forum access</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Basic document templates</span>
                  </li>
                </ul>
                <Link to="/sign-up" className="mt-auto">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro Tier */}
            <Card className="flex flex-col h-full border-2 border-tekk-purple relative">
              <div className="absolute top-0 right-0 bg-tekk-purple text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                Popular
              </div>
              <CardContent className="pt-6 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Pro</h3>
                  <div className="text-3xl font-bold mb-2">$29</div>
                  <p className="text-sm text-gray-500">per month, billed annually</p>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Unlimited document generations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Priority community support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Advanced document templates</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Expert review (1 per month)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Monthly workshops</span>
                  </li>
                </ul>
                <Link to="/sign-up" className="mt-auto">
                  <Button className="w-full bg-tekk-purple hover:bg-tekk-secondary-purple">Upgrade to Pro</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Enterprise Tier */}
            <Card className="flex flex-col h-full">
              <CardContent className="pt-6 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold mb-2">Custom</div>
                  <p className="text-sm text-gray-500">Contact for pricing</p>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Unlimited expert reviews</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Advanced analytics</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto">
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-tekk-dark-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Start turning your ideas into reality with support from our community of experts and innovators.
          </p>
          <Link to="/sign-up">
            <Button className="bg-tekk-purple hover:bg-tekk-secondary-purple text-white px-8 py-6 text-lg">
              Join Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
