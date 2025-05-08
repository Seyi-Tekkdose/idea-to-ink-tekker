
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-tekk-soft-purple to-white py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-tekk-purple to-tekk-secondary-purple bg-clip-text text-transparent">404</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">Oops! We couldn't find the page you're looking for.</p>
          <Link to="/">
            <Button className="bg-tekk-purple hover:bg-tekk-secondary-purple text-white px-6 py-5 text-lg">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
