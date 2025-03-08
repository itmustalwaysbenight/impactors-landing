import Image from 'next/image';

export default function WorkOpportunities() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative w-full h-[600px]">
              <Image 
                src="/images/group2.jpeg"
                alt="People working together in a bright space"
                fill
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center 60%', // Show more of the bottom part
                  transform: 'scaleX(-1)' // Flip horizontally
                }}
                className="rounded-md"
                priority
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <p className="text-sm mb-3">Increased position in the marketplace</p>
            <h2 className="text-5xl font-bold mb-8">
              Attract work opportunities
            </h2>
            
            <p className="text-lg mb-10">
              We connect your skills, interests, needs and wants with existing companies
              looking for passionate and skilled talent
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-3">Freelance projects</h3>
                <p className="text-lg text-gray-300">
                  Increase your relevance for small and medium freelance opportunities.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">Part-time positions</h3>
                <p className="text-lg text-gray-300">
                  Connect with professionals and mentors from startup and scale up companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 