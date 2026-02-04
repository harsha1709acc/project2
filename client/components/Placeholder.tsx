import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaceholderProps {
  title: string;
  description?: string;
}

const Placeholder = ({ title, description }: PlaceholderProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-sky-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Lightbulb size={40} className="text-sky-600" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{title}</h1>

          <p className="text-xl text-slate-600 mb-8">
            {description ||
              "This page is coming soon. Let me know if you'd like me to add content here!"}
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

export default Placeholder;
