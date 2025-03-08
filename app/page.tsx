import Vision from '@/components/Vision';
import Explore from '@/components/Explore';
import GamifiedProfile from '@/components/GamifiedProfile';
import MarketplaceFallback from '@/components/MarketplaceFallback';
import Investment from '@/components/Investment';
import CoCreate from '@/components/CoCreate';
import WorkOpportunities from '@/components/WorkOpportunities';
import UpcomingPilot from '@/components/UpcomingPilot';
import Squad from '@/components/Squad';
import Testimonials from '@/components/Testimonials';
import Education from '@/components/Education';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header className="absolute top-0 left-0 right-0 z-50 py-6 bg-black/20 border-b border-white/10">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold italic text-white">Logo</Link>
            <div className="flex items-center gap-8">
              <Link href="/partners" className="text-base font-medium text-white">Partners</Link>
              <Link href="#contact" className="px-6 py-3 text-base font-medium bg-white text-black">Join the interest list</Link>
            </div>
          </div>
        </div>
      </header>

      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpeg')" }}>
        <div className="absolute top-1/2 left-[5%] transform -translate-y-1/2 text-white max-w-[550px] pr-8">
          <h1 className="text-5xl font-bold mb-6 leading-tight shadow-sm">
            Align your digital skills with meaningful portfolio projects
          </h1>
          <p className="text-xl mb-10 leading-relaxed shadow-sm">
            We match digital volunteers with small- and medium nonprofit organisations in lack of resources.
          </p>
          <Link href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-white text-black">
            Join the interest list
          </Link>
        </div>
      </div>

      {/* Vision Section */}
      <Vision />
      
      {/* Explore Section */}
      <Explore />
      
      {/* Gamified Profile Section */}
      <GamifiedProfile />
      
      {/* Marketplace Section */}
      <MarketplaceFallback />
      
      {/* Investment Section */}
      <Investment />
      
      {/* Co-Create Section */}
      <CoCreate />
      
      {/* Work Opportunities Section */}
      <WorkOpportunities />
      
      {/* Upcoming Pilot Section */}
      <UpcomingPilot />
      
      {/* Squad Section */}
      <Squad />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Education Section */}
      <Education />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Email Subscription Section */}
      <EmailSubscription />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
