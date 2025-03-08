import Image from 'next/image';

export default function CoCreate() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm mb-3">Valuable connections</p>
            <h2 className="text-5xl font-bold mb-8">
              Co-create with like-minded?
            </h2>
            
            <p className="text-lg mb-10">
              Collaborate and co-create innovative ideas and projects with individuals who
              share similar values and beliefs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-3">Match with new friends</h3>
                <p className="text-lg text-gray-300">
                  Connect with new people who have similar interests.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">Bring your own squad</h3>
                <p className="text-lg text-gray-300">
                  Collaborate with your study partners, friends, or colleagues.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Image 
              src="/images/group1.jpeg"
              alt="People collaborating in an office space"
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