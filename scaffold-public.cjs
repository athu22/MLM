const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'AboutUs', path: 'src/pages/public/AboutUs.tsx', title: 'About Us', desc: 'Learn more about Jample Life and our mission.' },
  { name: 'Vision', path: 'src/pages/public/Vision.tsx', title: 'Our Vision', desc: 'Discover our vision for the future of networking.' },
  { name: 'Management', path: 'src/pages/public/Management.tsx', title: 'Management', desc: 'Meet the team behind Jample Life.' },
  { name: 'LegalDocuments', path: 'src/pages/public/LegalDocuments.tsx', title: 'Legal Documents', desc: 'Official compliance and regulatory information.' },
  { name: 'BusinessPlan', path: 'src/pages/public/BusinessPlan.tsx', title: 'Business Plan', desc: 'How to build your network and grow your business.' },
  { name: 'Compensation', path: 'src/pages/public/Compensation.tsx', title: 'Compensation', desc: 'Detailed breakdown of our binary MLM compensation plan.' },
  { name: 'RanksRewards', path: 'src/pages/public/RanksRewards.tsx', title: 'Ranks & Rewards', desc: 'Climb the ladder and achieve exciting rewards.' },
];

const dirPath = path.join(process.cwd(), 'src/pages/public');
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

pages.forEach(page => {
  const content = `import Navbar from "../../components/Navbar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ${page.name} = () => {
  return (
    <div className="min-h-screen bg-[#0F111A] text-white flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 lg:px-8 py-16">
        <Link to="/" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
          <h1 className="text-4xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">${page.title}</h1>
          <p className="text-lg text-white/70 mb-8 border-b border-white/10 pb-8">${page.desc}</p>
          
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>Welcome to the ${page.title} page. This section will contain detailed information regarding our operations, guidelines, and benefits tailored to help you succeed in the Jample Life network.</p>
            <p className="p-4 bg-white/5 border border-white/10 rounded-lg italic">We are currently updating our documentation for this section to provide you with the most comprehensive and modern experience possible. Please check back soon for the full content.</p>
            
            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl"></div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Need immediate assistance?</h3>
              <p className="text-white/80 relative z-10">If you have specific questions about ${page.title.toLowerCase()}, please feel free to reach out to our network support team at any time.</p>
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

export default ${page.name};
`;

  fs.writeFileSync(path.join(process.cwd(), page.path), content);
  console.log(`Created ${page.path}`);
});
