import Image from 'next/image';
import Link from 'next/link';

type TeamMember = {
  name: string;
  role: string;
  mainRole: string;
  background: string;
  image: string;
  linkedin?: string;
  website?: string;
};

export default function Squad() {
  const teamMembers: TeamMember[] = [
    {
      name: "Hans Henrik",
      role: "Co-founder CTO and AI",
      mainRole: "Role: Product architecture, AI development and technical growth.",
      background: "Background: AI specialist with focus on generative models and cutting-edge AI tools. Passionate about creating alternative, functional social media platforms. Entrepreneurship experience with multiple tech ventures.",
      image: "/images/hh.jpeg",
      linkedin: "#",
      website: "#"
    },
    {
      name: "Hilde Vanvik",
      role: "Co-founder, chairwoman of the board and NGOs",
      mainRole: "Role: Approval of nonprofits, agreements, communication and development of recruitment flow.",
      background: "Background: Head of communication CARE Norway, Recruitment, CSR Director of THE BODY Shop Norway, board member roles, entrepreneurship, mentoring and multiple voluntary roles.",
      image: "/images/hilde.png",
      linkedin: "#"
    },
    {
      name: "Joakim Brur Engen Johannessen",
      role: "Founder, product and community",
      mainRole: "Role: Product, growth, storyteller and community.",
      background: "Background: Entrepreneurship, Initiator WalkWithImpact, Partner CGO Styrefabrikk, Business development Unioc, Community builder Monument Music, advisory roles, mentoring and multiple voluntary roles.",
      image: "/images/brur.png",
      linkedin: "#",
      website: "#"
    }
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-sm mb-3">Initiators</p>
          <h2 className="text-5xl font-bold mb-6">Founding squad</h2>
          <p className="text-lg max-w-3xl">
            3 steps forward. 1 step back. Repeat. The world could be how we choose to shape it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="mb-12">
              <div className="w-full aspect-square mb-6 relative overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-sm"
                />
              </div>
              
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-400 mb-4">{member.role}</p>
              <p className="text-sm text-gray-300 mb-2">{member.mainRole}</p>
              <p className="text-sm text-gray-300 mb-6">{member.background}</p>
              
              <div className="flex space-x-3">
                {member.linkedin && (
                  <a href={member.linkedin} className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
                {member.website && (
                  <a href={member.website} className="text-gray-400 hover:text-white" aria-label="Website">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10 12c0 .685-.07 1.354-.202 2h-3.853c.121-1.283.129-2.621 0-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278 2.435.977 4.397 2.882 5.448 5.278zm-5.554 0h-2.605v-5.658c1.215 1.46 2.117 3.41 2.605 5.658zm-4.605-5.658v5.658h-2.605c.488-2.248 1.39-4.198 2.605-5.658zm0 7.658v4h-2.93c-.146-1.421-.146-2.577 0-4h2.93zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658h2.605zm2 5.658v-5.658h2.605c-.488 2.248-1.39 4.198-2.605 5.658zm0-7.658v-4h2.93c.146 1.421.146 2.577 0 4h-2.93zm-4.711-11.278c-.896 1.527-1.565 3.318-1.948 5.278h-3.5c1.051-2.396 3.013-4.301 5.448-5.278zm-6.087 7.278h3.853c-.121 1.283-.129 2.621 0 4h-3.853c-.132-.646-.202-1.315-.202-2s.07-1.354.202-2zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278-2.435-.977-4.397-2.882-5.448-5.278zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5c-1.051 2.396-3.013 4.301-5.448 5.278z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 