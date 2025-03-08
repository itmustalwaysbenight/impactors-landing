"use client";

import { 
  BarChart3, 
  Rocket, 
  Users, 
  Zap 
} from 'lucide-react';

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const featureItems: FeatureItem[] = [
  {
    icon: <Rocket className="h-10 w-10 text-black dark:text-white" />,
    title: 'Innovative Solutions',
    description: 'Our cutting-edge technology provides innovative solutions to complex problems.',
  },
  {
    icon: <Users className="h-10 w-10 text-black dark:text-white" />,
    title: 'Community Focused',
    description: 'We build strong communities through collaboration and shared values.',
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-black dark:text-white" />,
    title: 'Data-Driven',
    description: 'Make informed decisions with our powerful analytics and insights.',
  },
  {
    icon: <Zap className="h-10 w-10 text-black dark:text-white" />,
    title: 'Fast & Efficient',
    description: 'Our platform is optimized for speed and efficiency, saving you time and resources.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What We Offer
            </h2>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides a comprehensive set of features designed to help you make a positive impact.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          {featureItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
              <div className="p-2">{item.icon}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 