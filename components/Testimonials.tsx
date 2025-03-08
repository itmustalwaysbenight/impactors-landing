"use client";

type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
};

const testimonialItems: TestimonialItem[] = [
  {
    quote: "Impactors has completely transformed how we approach our sustainability initiatives. Their platform is intuitive and the results speak for themselves.",
    author: "Sarah Johnson",
    role: "CEO, GreenTech Solutions",
  },
  {
    quote: "The analytics and insights provided by Impactors have been invaluable for our organization. We've seen a 40% increase in community engagement.",
    author: "Michael Chen",
    role: "Community Director, Urban Renewal",
  },
  {
    quote: "Working with Impactors has been a game-changer for our non-profit. Their team is responsive, and the platform is exactly what we needed.",
    author: "Aisha Patel",
    role: "Founder, Education First",
  },
];

type Testimonial = {
  content: string;
  author: string;
  role: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      content: "We consider voluntary resources fundamental to our efforts. Maintaining a database of volunteer contributors, where skills, expertise, and availability can be searched, would greatly reduce the time and financial costs associated with recruitment and organizational resources.",
      author: "Trude Jacobsen",
      role: "Founder, Dråpen i havet"
    },
    {
      content: "This platform will simplify the process of identifying the appropriate skills for both small and large tasks, while also making it easier for interested resources to connect with us.",
      author: "Elisabeth Reiersen",
      role: "Managing director, Sabona"
    }
  ];

  return (
    <section className="bg-[#4D5A4A] text-white py-24">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-6">Testimonials</h2>
          <p className="text-lg max-w-3xl">
            From small- and medium grassroots nonprofits in search for new talent
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-6 h-6 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-lg mb-8">
                {testimonial.content}
              </p>
              
              <div className="mt-auto flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-gray-500" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 