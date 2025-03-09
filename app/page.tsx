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
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import Link from 'next/link';
import RotatingHero from '@/components/RotatingHero';

export default function Home() {
  return (
    <main>
      <header className="absolute top-0 left-0 right-0 z-50 py-7 bg-black/70 backdrop-blur-sm border-b border-white/20 shadow-lg">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold italic text-white">Logo</Link>
            <div className="flex items-center gap-8">
              <Link href="/partners" className="text-base font-medium text-white hover:text-gray-300 transition-colors">Partners</Link>
              <Link href="#contact" className="px-6 py-3 text-base font-medium bg-white text-black hover:bg-gray-200 transition-colors shadow-md">Join the interest list</Link>
            </div>
          </div>
        </div>
      </header>

      <RotatingHero />

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
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Email Subscription Section */}
      <EmailSubscription />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
