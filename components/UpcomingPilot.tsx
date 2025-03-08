export default function UpcomingPilot() {
  return (
    <section className="bg-[#4D5A4A] text-white py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-sm mb-3">Upcoming pilot</p>
          <h2 className="text-5xl font-bold mb-8">
            Would you like to see this happen?
          </h2>
          
          <p className="text-lg max-w-3xl">
            Note. Prior to developing the technical and gamified platform - we aim to understand how to
            perform various parts manually, before building it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div>
            <h3 className="text-xl font-bold mb-2">Step 1</h3>
            <h4 className="text-2xl font-bold mb-4">Let's validate demand</h4>
            <p className="text-base text-gray-200">
              Join the waiting list and assist us in validating the demand for a gamified and
              engaging and volunteering platform.
            </p>
          </div>
          
          {/* Step 2 */}
          <div>
            <h3 className="text-xl font-bold mb-2">Step 2</h3>
            <h4 className="text-2xl font-bold mb-4">Can we gather insight?</h4>
            <p className="text-base text-gray-200">
              Assist in collecting fundamental insights that will be utilized for grant proposals,
              product creation, marketing efforts and investor conversations.
            </p>
          </div>
          
          {/* Step 3 */}
          <div>
            <h3 className="text-xl font-bold mb-2">Step 3</h3>
            <h4 className="text-2xl font-bold mb-4">Join the first pilot?</h4>
            <p className="text-base text-gray-200">
              Participate in the upcoming pilot and level up your future self, increase network,
              resource-limited grassroots nonprofits, and the advancement of the platform.
            </p>
          </div>
          
          {/* Step 4 */}
          <div>
            <h3 className="text-xl font-bold mb-2">Step 4</h3>
            <h4 className="text-2xl font-bold mb-4">Develop game</h4>
            <p className="text-base text-gray-200">
              Keep leveling up your personal portfolio by continuous working on skills, receive
              constructive references, and connect with fellow creative individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 