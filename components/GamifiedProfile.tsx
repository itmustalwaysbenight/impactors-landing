import Image from 'next/image';

export default function GamifiedProfile() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image 
              src="/images/greenhouse.jpeg"
              alt="Person smiling while working on laptop"
              width={600}
              height={600}
              className="rounded-md w-full h-auto"
              priority
            />
          </div>
          
          <div>
            <p className="text-sm mb-3">Gamified profile</p>
            <h2 className="text-5xl font-bold mb-8">
              Can we unlock your potential?
            </h2>
            
            <p className="text-lg mb-10">
              Create your personal profile and include your skills, interests, availability, and
              personal goals for your future.
            </p>
            
            <div className="grid grid-cols-1 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-3">Skill development</h3>
                <p className="text-lg text-gray-300">
                  Improve your skills, experience and portfolio while supporting causes that
                  matter to you.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">Networking opportunities</h3>
                <p className="text-lg text-gray-300">
                  Engage with like-minded, industry professionals and mentors in your area of
                  interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 