import Image from 'next/image';

export default function Education() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm mb-3">AI education</p>
            <h2 className="text-5xl font-bold mb-8">
              Join educational classes
            </h2>
            
            <p className="text-lg mb-10">
              Join in on classes, receive access to AI tools and a educational community
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-3">Receive badges</h3>
                <p className="text-lg text-gray-300">
                  Join classes and receive certifications
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">Meet mentors</h3>
                <p className="text-lg text-gray-300">
                  Meet mentors IRL
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Image 
              src="/images/two-sitting.png"
              alt="Two people sitting together working on a laptop"
              width={600}
              height={600}
              className="rounded-md w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 