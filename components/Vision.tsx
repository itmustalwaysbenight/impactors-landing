import Image from 'next/image';

export default function Vision() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm mb-3">Our vision</p>
            <h2 className="text-5xl font-bold mb-8">Gamified volunteering</h2>
            
            <p className="text-lg mb-6">
              Volunteering is a powerful force in addressing pressing social, economic and
              environmental challenges.
            </p>
            
            <p className="text-lg mb-6">
              We believe in lowering barriers to voluntary opportunities - by bridging the gap between grassroots nonprofits in lack of resources, and talented volunteers eager to make a difference.
            </p>
            
            <p className="text-lg mb-16">
              From anywhere, at any time.
            </p>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-5xl font-bold mb-2">860 million</h3>
                <p className="text-sm text-gray-300">
                  People volunteer at least once a month (2024)
                </p>
              </div>
              
              <div>
                <h3 className="text-5xl font-bold mb-2">15%</h3>
                <p className="text-sm text-gray-300">
                  Of the global population aged 15 years or older (2024)
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Image 
              src="/images/brur.png"
              alt="Smiling volunteer"
              width={600}
              height={600}
              className="rounded-md w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 