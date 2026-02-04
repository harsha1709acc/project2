import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-9xl font-bold text-sky-200 mb-4">404</div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Page Not Found</h1>

          <p className="text-xl text-slate-600 mb-8">
            Sorry, the page you're looking for doesn't exist. Let me help you get back on track.
          </p>

          <Link to="/">
            <Button size="lg" className="gap-2">
              <ArrowLeft size={20} />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
