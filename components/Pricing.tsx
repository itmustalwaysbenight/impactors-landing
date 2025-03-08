"use client";

import { Check } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type PricingTier = {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small teams just getting started.',
    price: '$29',
    features: [
      'Basic analytics dashboard',
      'Up to 5 team members',
      'Community forum access',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    description: 'Ideal for growing organizations with specific needs.',
    price: '$79',
    features: [
      'Advanced analytics dashboard',
      'Up to 20 team members',
      'Priority community forum access',
      'Email and chat support',
      'Custom integrations',
      'API access',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex requirements.',
    price: 'Custom',
    features: [
      'Full-featured analytics dashboard',
      'Unlimited team members',
      'Dedicated community forum',
      '24/7 priority support',
      'Custom integrations',
      'API access',
      'Dedicated account manager',
      'Custom reporting',
    ],
    cta: 'Contact Us',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that&apos;s right for you and start making an impact today.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={cn(
                "flex flex-col justify-between rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm",
                tier.highlighted && "border-black ring-1 ring-black dark:border-white dark:ring-white"
              )}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{tier.description}</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="ml-1 text-gray-500 dark:text-gray-400">/month</span>}
                </div>
                <ul className="space-y-2 text-sm">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-black dark:text-white" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="#contact"
                className={cn(
                  "mt-6 inline-flex h-10 w-full items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50",
                  tier.highlighted
                    ? "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                    : "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                )}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 