import Navbar from "../../components/Navbar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#0F111A] text-white flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 lg:px-8 py-16">
        <Link to="/" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
          <h1 className="text-4xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">About Us</h1>
          <p className="text-lg text-white/70 mb-8 border-b border-white/10 pb-8">Learn more about Jample Life and our mission.</p>
          
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>Welcome to the About Us page. This section will contain detailed information regarding our operations, guidelines, and benefits tailored to help you succeed in the Jample Life network.</p>
            <p className="p-4 bg-white/5 border border-white/10 rounded-lg italic">We are currently updating our documentation for this section to provide you with the most comprehensive and modern experience possible. Please check back soon for the full content.</p>
            
            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl"></div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Need immediate assistance?</h3>
              <p className="text-white/80 relative z-10">If you have specific questions about about us, please feel free to reach out to our network support team at any time.</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0F111A] py-8 mt-auto z-50 relative">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-white/60">© 2026 Jample Life. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
