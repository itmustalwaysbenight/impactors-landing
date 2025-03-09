Project Structure:
├── README.md
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── CoCreate.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── EmailSubscription.tsx
│   ├── Explore.tsx
│   ├── FAQ.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── GamifiedProfile.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Investment.tsx
│   ├── Marketplace.tsx
│   ├── MarketplaceFallback.tsx
│   ├── Pricing.tsx
│   ├── RotatingHero.tsx
│   ├── Squad.tsx
│   ├── Testimonials.tsx
│   ├── TypeformSurvey.tsx
│   ├── UpcomingPilot.tsx
│   ├── Vision.tsx
│   └── WorkOpportunities.tsx
├── eslint.config.mjs
├── lib
│   ├── db.ts
│   └── utils.ts
├── next-env.d.ts
├── next.config.js
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── hero.jpeg
│   ├── index.html
│   ├── next.svg
│   ├── test.html
│   ├── vercel.svg
│   └── window.svg
├── tailwind.config.js
├── tailwind.config.ts
├── tsconfig.json
└── types
    └── mailchimp.d.ts


.cursorrules
```
1 | Dont run things!
2 | 
3 | I'll run things myself
```

eslint.config.mjs
```
1 | import { dirname } from "path";
2 | import { fileURLToPath } from "url";
3 | import { FlatCompat } from "@eslint/eslintrc";
4 | 
5 | const __filename = fileURLToPath(import.meta.url);
6 | const __dirname = dirname(__filename);
7 | 
8 | const compat = new FlatCompat({
9 |   baseDirectory: __dirname,
10 | });
11 | 
12 | const eslintConfig = [
13 |   ...compat.extends("next/core-web-vitals", "next/typescript"),
14 | ];
15 | 
16 | export default eslintConfig;
```

next.config.js
```
1 | /** @type {import('next').NextConfig} */
2 | const nextConfig = {
3 |   reactStrictMode: true,
4 |   images: {
5 |     domains: [],
6 |   },
7 |   eslint: {
8 |     // Warning: This allows production builds to successfully complete even if
9 |     // your project has ESLint errors.
10 |     ignoreDuringBuilds: true,
11 |   },
12 |   typescript: {
13 |     // !! WARN !!
14 |     // Dangerously allow production builds to successfully complete even if
15 |     // your project has type errors.
16 |     // !! WARN !!
17 |     ignoreBuildErrors: true,
18 |   },
19 |   async headers() {
20 |     return [
21 |       {
22 |         source: '/(.*)',
23 |         headers: [
24 |           {
25 |             key: 'Content-Security-Policy',
26 |             value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.typeform.com; frame-src https://*.typeform.com; connect-src 'self' https://*.typeform.com; style-src 'self' 'unsafe-inline' https://*.typeform.com; img-src 'self' data: https://*.typeform.com;"
27 |           }
28 |         ]
29 |       }
30 |     ];
31 |   }
32 | };
33 | 
34 | module.exports = nextConfig; 
```

next.config.ts
```
1 | // This file is deprecated. Using next.config.js instead.
2 | // Keeping this file to avoid deletion issues.
3 | 
4 | import type { NextConfig } from "next";
5 | 
6 | const nextConfig: NextConfig = {
7 |   /* config options here */
8 | };
9 | 
10 | export default nextConfig;
```

package.json
```
1 | {
2 |   "name": "impactors-landing-page",
3 |   "version": "0.1.0",
4 |   "private": true,
5 |   "scripts": {
6 |     "dev": "next dev",
7 |     "build": "next build",
8 |     "start": "next start",
9 |     "lint": "next lint"
10 |   },
11 |   "dependencies": {
12 |     "@mailchimp/mailchimp_marketing": "^3.0.80",
13 |     "@types/pg": "^8.11.11",
14 |     "class-variance-authority": "^0.7.1",
15 |     "clsx": "^2.1.1",
16 |     "framer-motion": "^12.4.10",
17 |     "lucide-react": "^0.479.0",
18 |     "mapbox-gl": "^2.15.0",
19 |     "next": "15.2.1",
20 |     "pg": "^8.13.3",
21 |     "react": "^19.0.0",
22 |     "react-dom": "^19.0.0",
23 |     "react-icons": "^5.0.1",
24 |     "tailwind-merge": "^3.0.2",
25 |     "tailwindcss-animate": "^1.0.7"
26 |   },
27 |   "devDependencies": {
28 |     "@eslint/eslintrc": "^3",
29 |     "@types/mapbox-gl": "^2.7.21",
30 |     "@types/node": "^20",
31 |     "@types/react": "^19",
32 |     "@types/react-dom": "^19",
33 |     "autoprefixer": "^10.4.16",
34 |     "eslint": "^9",
35 |     "eslint-config-next": "15.2.1",
36 |     "postcss": "^8.4.31",
37 |     "tailwindcss": "^3.3.5",
38 |     "typescript": "^5"
39 |   }
40 | }
```

postcss.config.mjs
```
1 | const config = {
2 |   plugins: {
3 |     tailwindcss: {},
4 |     autoprefixer: {},
5 |   },
6 | };
7 | 
8 | export default config;
```

tailwind.config.js
```
1 | /** @type {import('tailwindcss').Config} */
2 | module.exports = {
3 |   content: [
4 |     './pages/**/*.{js,ts,jsx,tsx,mdx}',
5 |     './components/**/*.{js,ts,jsx,tsx,mdx}',
6 |     './app/**/*.{js,ts,jsx,tsx,mdx}',
7 |   ],
8 |   theme: {
9 |     extend: {},
10 |   },
11 |   plugins: [],
12 | } 
```

tailwind.config.ts
```
1 | import type { Config } from 'tailwindcss';
2 | 
3 | const config: Config = {
4 |   darkMode: 'class',
5 |   content: [
6 |     './pages/**/*.{js,ts,jsx,tsx,mdx}',
7 |     './components/**/*.{js,ts,jsx,tsx,mdx}',
8 |     './app/**/*.{js,ts,jsx,tsx,mdx}',
9 |   ],
10 |   theme: {
11 |     container: {
12 |       center: true,
13 |       padding: '2rem',
14 |       screens: {
15 |         '2xl': '1400px',
16 |       },
17 |     },
18 |     extend: {
19 |       colors: {
20 |         border: 'hsl(var(--border))',
21 |         input: 'hsl(var(--input))',
22 |         ring: 'hsl(var(--ring))',
23 |         background: 'hsl(var(--background))',
24 |         foreground: 'hsl(var(--foreground))',
25 |         primary: {
26 |           DEFAULT: 'hsl(var(--primary))',
27 |           foreground: 'hsl(var(--primary-foreground))',
28 |         },
29 |         secondary: {
30 |           DEFAULT: 'hsl(var(--secondary))',
31 |           foreground: 'hsl(var(--secondary-foreground))',
32 |         },
33 |         destructive: {
34 |           DEFAULT: 'hsl(var(--destructive))',
35 |           foreground: 'hsl(var(--destructive-foreground))',
36 |         },
37 |         muted: {
38 |           DEFAULT: 'hsl(var(--muted))',
39 |           foreground: 'hsl(var(--muted-foreground))',
40 |         },
41 |         accent: {
42 |           DEFAULT: 'hsl(var(--accent))',
43 |           foreground: 'hsl(var(--accent-foreground))',
44 |         },
45 |         popover: {
46 |           DEFAULT: 'hsl(var(--popover))',
47 |           foreground: 'hsl(var(--popover-foreground))',
48 |         },
49 |         card: {
50 |           DEFAULT: 'hsl(var(--card))',
51 |           foreground: 'hsl(var(--card-foreground))',
52 |         },
53 |       },
54 |       borderRadius: {
55 |         lg: 'var(--radius)',
56 |         md: 'calc(var(--radius) - 2px)',
57 |         sm: 'calc(var(--radius) - 4px)',
58 |       },
59 |       keyframes: {
60 |         'accordion-down': {
61 |           from: { height: '0' },
62 |           to: { height: 'var(--radix-accordion-content-height)' },
63 |         },
64 |         'accordion-up': {
65 |           from: { height: 'var(--radix-accordion-content-height)' },
66 |           to: { height: '0' },
67 |         },
68 |       },
69 |       animation: {
70 |         'accordion-down': 'accordion-down 0.2s ease-out',
71 |         'accordion-up': 'accordion-up 0.2s ease-out',
72 |       },
73 |     },
74 |   },
75 |   plugins: [require('tailwindcss-animate')],
76 | };
77 | 
78 | export default config; 
```

tsconfig.json
```
1 | {
2 |   "compilerOptions": {
3 |     "target": "ES2017",
4 |     "lib": ["dom", "dom.iterable", "esnext"],
5 |     "allowJs": true,
6 |     "skipLibCheck": true,
7 |     "strict": true,
8 |     "noEmit": true,
9 |     "esModuleInterop": true,
10 |     "module": "esnext",
11 |     "moduleResolution": "bundler",
12 |     "resolveJsonModule": true,
13 |     "isolatedModules": true,
14 |     "jsx": "preserve",
15 |     "incremental": true,
16 |     "plugins": [
17 |       {
18 |         "name": "next"
19 |       }
20 |     ],
21 |     "paths": {
22 |       "@/*": ["./*"]
23 |     }
24 |   },
25 |   "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
26 |   "exclude": ["node_modules"]
27 | }
```

app/globals.css
```
1 | @tailwind base;
2 | @tailwind components;
3 | @tailwind utilities;
4 | 
5 | @layer base {
6 |   * {
7 |     margin: 0;
8 |     padding: 0;
9 |     box-sizing: border-box;
10 |   }
11 |   
12 |   body {
13 |     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
14 |       Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
15 |   }
16 | }
17 | 
18 | html {
19 |   scroll-behavior: smooth;
20 | }
21 | 
22 | @layer utilities {
23 |   /* Hide scrollbar for Chrome, Safari and Opera */
24 |   .hide-scrollbar::-webkit-scrollbar {
25 |     display: none;
26 |   }
27 |   
28 |   /* Hide scrollbar for IE, Edge and Firefox */
29 |   .hide-scrollbar {
30 |     -ms-overflow-style: none;  /* IE and Edge */
31 |     scrollbar-width: none;  /* Firefox */
32 |   }
33 | }
34 | 
35 | @keyframes fadeIn {
36 |   from { opacity: 0; transform: translateY(10px); }
37 |   to { opacity: 1; transform: translateY(0); }
38 | }
39 | 
40 | .animate-fadeIn {
41 |   animation: fadeIn 0.3s ease-in-out;
42 | }
```

app/layout.tsx
```
1 | import type { Metadata } from "next";
2 | import "./globals.css";
3 | 
4 | export const metadata: Metadata = {
5 |   title: "Impactors - Making an Impact Together",
6 |   description: "Impactors is a startup focused on making a positive impact on the world through innovative solutions.",
7 |   keywords: ["startup", "impact", "innovation", "technology", "sustainability"],
8 | };
9 | 
10 | export default function RootLayout({
11 |   children,
12 | }: Readonly<{
13 |   children: React.ReactNode;
14 | }>) {
15 |   return (
16 |     <html lang="en">
17 |       <body>
18 |         {children}
19 |       </body>
20 |     </html>
21 |   );
22 | }
```

app/page.tsx
```
1 | import Vision from '@/components/Vision';
2 | import Explore from '@/components/Explore';
3 | import GamifiedProfile from '@/components/GamifiedProfile';
4 | import MarketplaceFallback from '@/components/MarketplaceFallback';
5 | import Investment from '@/components/Investment';
6 | import CoCreate from '@/components/CoCreate';
7 | import WorkOpportunities from '@/components/WorkOpportunities';
8 | import UpcomingPilot from '@/components/UpcomingPilot';
9 | import Squad from '@/components/Squad';
10 | import Testimonials from '@/components/Testimonials';
11 | import Education from '@/components/Education';
12 | import FAQ from '@/components/FAQ';
13 | import Footer from '@/components/Footer';
14 | import EmailSubscription from '@/components/EmailSubscription';
15 | import Link from 'next/link';
16 | import RotatingHero from '@/components/RotatingHero';
17 | 
18 | export default function Home() {
19 |   return (
20 |     <main>
21 |       <header className="absolute top-0 left-0 right-0 z-50 py-7 bg-black/70 backdrop-blur-sm border-b border-white/20 shadow-lg">
22 |         <div className="container max-w-7xl mx-auto px-8">
23 |           <div className="flex justify-between items-center">
24 |             <Link href="/" className="text-2xl font-bold italic text-white">Logo</Link>
25 |             <div className="flex items-center gap-8">
26 |               <Link href="/partners" className="text-base font-medium text-white hover:text-gray-300 transition-colors">Partners</Link>
27 |               <Link href="#contact" className="px-6 py-3 text-base font-medium bg-white text-black hover:bg-gray-200 transition-colors shadow-md">Join the interest list</Link>
28 |             </div>
29 |           </div>
30 |         </div>
31 |       </header>
32 | 
33 |       <RotatingHero />
34 | 
35 |       {/* Vision Section */}
36 |       <Vision />
37 |       
38 |       {/* Explore Section */}
39 |       <Explore />
40 |       
41 |       {/* Gamified Profile Section */}
42 |       <GamifiedProfile />
43 |       
44 |       {/* Marketplace Section */}
45 |       <MarketplaceFallback />
46 |       
47 |       {/* Investment Section */}
48 |       <Investment />
49 |       
50 |       {/* Co-Create Section */}
51 |       <CoCreate />
52 |       
53 |       {/* Work Opportunities Section */}
54 |       <WorkOpportunities />
55 |       
56 |       {/* Upcoming Pilot Section */}
57 |       <UpcomingPilot />
58 |       
59 |       {/* Squad Section */}
60 |       <Squad />
61 |       
62 |       {/* Testimonials Section */}
63 |       <Testimonials />
64 |       
65 |       {/* Education Section */}
66 |       <Education />
67 |       
68 |       {/* FAQ Section */}
69 |       <FAQ />
70 |       
71 |       {/* Email Subscription Section */}
72 |       <EmailSubscription />
73 |       
74 |       {/* Footer */}
75 |       <Footer />
76 |     </main>
77 |   );
78 | }
```

public/index.html
```
1 | <!DOCTYPE html>
2 | <html lang="en">
3 | <head>
4 |   <meta charset="UTF-8">
5 |   <meta name="viewport" content="width=device-width, initial-scale=1.0">
6 |   <title>Impactors Landing Page</title>
7 |   <style>
8 |     body, html {
9 |       margin: 0;
10 |       padding: 0;
11 |       height: 100%;
12 |       font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
13 |         Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
14 |     }
15 |     * {
16 |       box-sizing: border-box;
17 |     }
18 |     .hero {
19 |       background-image: url('/hero.jpeg');
20 |       height: 100vh;
21 |       background-position: center;
22 |       background-repeat: no-repeat;
23 |       background-size: cover;
24 |       position: relative;
25 |     }
26 |     header {
27 |       position: absolute;
28 |       top: 0;
29 |       left: 0;
30 |       right: 0;
31 |       z-index: 50;
32 |       padding: 1.5rem 0;
33 |       background-color: rgba(0, 0, 0, 0.2);
34 |       border-bottom: 1px solid rgba(255, 255, 255, 0.1);
35 |     }
36 |     .container {
37 |       max-width: 1200px;
38 |       margin: 0 auto;
39 |       padding: 0 2rem;
40 |     }
41 |     .header-content {
42 |       display: flex;
43 |       justify-content: space-between;
44 |       align-items: center;
45 |     }
46 |     .logo {
47 |       font-size: 1.5rem;
48 |       font-weight: bold;
49 |       font-style: italic;
50 |       color: white;
51 |       text-decoration: none;
52 |     }
53 |     .nav {
54 |       display: flex;
55 |       align-items: center;
56 |       gap: 2rem;
57 |     }
58 |     .nav-link {
59 |       font-size: 1rem;
60 |       font-weight: 500;
61 |       color: white;
62 |       text-decoration: none;
63 |     }
64 |     .btn {
65 |       display: inline-flex;
66 |       align-items: center;
67 |       justify-content: center;
68 |       padding: 0.75rem 1.5rem;
69 |       font-size: 1rem;
70 |       font-weight: 500;
71 |       text-decoration: none;
72 |       border: none;
73 |     }
74 |     .btn-outline {
75 |       color: black;
76 |       background-color: white;
77 |     }
78 |     .btn-solid {
79 |       background-color: white;
80 |       color: black;
81 |     }
82 |     .hero-content {
83 |       position: absolute;
84 |       top: 50%;
85 |       left: 5%;
86 |       transform: translateY(-50%);
87 |       color: white;
88 |       max-width: 550px;
89 |       padding-right: 2rem;
90 |     }
91 |     .hero-title {
92 |       font-size: 3.5rem;
93 |       font-weight: bold;
94 |       margin-bottom: 1.5rem;
95 |       line-height: 1.1;
96 |       text-shadow: 0 1px 3px rgba(0,0,0,0.3);
97 |     }
98 |     .hero-text {
99 |       font-size: 1.25rem;
100 |       margin-bottom: 2.5rem;
101 |       line-height: 1.5;
102 |       text-shadow: 0 1px 2px rgba(0,0,0,0.3);
103 |     }
104 |     .contact {
105 |       padding: 5rem 0;
106 |       background-color: white;
107 |     }
108 |     .contact-header {
109 |       text-align: center;
110 |       margin-bottom: 3rem;
111 |     }
112 |     .contact-title {
113 |       font-size: 2.5rem;
114 |       font-weight: bold;
115 |       margin-bottom: 1rem;
116 |     }
117 |     .contact-text {
118 |       font-size: 1.2rem;
119 |       color: #666;
120 |       max-width: 800px;
121 |       margin: 0 auto;
122 |     }
123 |     .form-container {
124 |       max-width: 500px;
125 |       margin: 0 auto;
126 |     }
127 |     .form {
128 |       display: flex;
129 |       flex-direction: column;
130 |       gap: 1.5rem;
131 |     }
132 |     .form-group {
133 |       display: flex;
134 |       flex-direction: column;
135 |       gap: 0.5rem;
136 |     }
137 |     .form-label {
138 |       font-size: 0.875rem;
139 |       font-weight: 500;
140 |     }
141 |     .form-input {
142 |       height: 2.5rem;
143 |       padding: 0 0.75rem;
144 |       border: 1px solid #ddd;
145 |       font-size: 0.875rem;
146 |     }
147 |     .form-button {
148 |       height: 2.5rem;
149 |       background-color: black;
150 |       color: white;
151 |       border: none;
152 |       font-size: 0.875rem;
153 |       font-weight: 500;
154 |       cursor: pointer;
155 |     }
156 |   </style>
157 | </head>
158 | <body>
159 |   <header>
160 |     <div class="container">
161 |       <div class="header-content">
162 |         <a href="/" class="logo">Logo</a>
163 |         <div class="nav">
164 |           <a href="/partners" class="nav-link">Partners</a>
165 |           <a href="#contact" class="btn btn-outline">Join the interest list</a>
166 |         </div>
167 |       </div>
168 |     </div>
169 |   </header>
170 | 
171 |   <div class="hero">
172 |     <div class="hero-content">
173 |       <h1 class="hero-title">Align your digital skills with meaningful portfolio projects</h1>
174 |       <p class="hero-text">We match digital volunteers with small- and medium nonprofit organisations in lack of resources.</p>
175 |       <a href="#contact" class="btn btn-solid">Join the interest list</a>
176 |     </div>
177 |   </div>
178 | 
179 |   <section id="contact" class="contact">
180 |     <div class="container">
181 |       <div class="contact-header">
182 |         <h2 class="contact-title">Join our interest list</h2>
183 |         <p class="contact-text">Be the first to know when we match new projects with nonprofits.</p>
184 |       </div>
185 |       
186 |       <div class="form-container">
187 |         <form class="form">
188 |           <div class="form-group">
189 |             <label class="form-label">Name</label>
190 |             <input type="text" class="form-input" placeholder="Your name" required>
191 |           </div>
192 |           <div class="form-group">
193 |             <label class="form-label">Email</label>
194 |             <input type="email" class="form-input" placeholder="your.email@example.com" required>
195 |           </div>
196 |           <button type="submit" class="form-button">Join the interest list</button>
197 |         </form>
198 |       </div>
199 |     </div>
200 |   </section>
201 | </body>
202 | </html> 
```

public/test.html
```
1 | <!DOCTYPE html>
2 | <html lang="en">
3 | <head>
4 |   <meta charset="UTF-8">
5 |   <meta name="viewport" content="width=device-width, initial-scale=1.0">
6 |   <title>Image Test</title>
7 |   <style>
8 |     body, html {
9 |       margin: 0;
10 |       padding: 0;
11 |       height: 100%;
12 |     }
13 |     .hero {
14 |       background-image: url('/hero.jpeg');
15 |       height: 100%;
16 |       background-position: center;
17 |       background-repeat: no-repeat;
18 |       background-size: cover;
19 |     }
20 |     .content {
21 |       position: absolute;
22 |       top: 50%;
23 |       left: 50%;
24 |       transform: translate(-50%, -50%);
25 |       color: white;
26 |       text-align: center;
27 |     }
28 |   </style>
29 | </head>
30 | <body>
31 |   <div class="hero">
32 |     <div class="content">
33 |       <h1>Test Image</h1>
34 |       <p>This is a test to see if the image loads properly.</p>
35 |     </div>
36 |   </div>
37 | </body>
38 | </html> 
```

types/mailchimp.d.ts
```
1 | declare module '@mailchimp/mailchimp_marketing' {
2 |   export function setConfig(config: {
3 |     apiKey: string;
4 |     server: string;
5 |   }): void;
6 | 
7 |   export const lists: {
8 |     addListMember: (
9 |       listId: string,
10 |       data: {
11 |         email_address: string;
12 |         status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending';
13 |         merge_fields?: Record<string, any>;
14 |       }
15 |     ) => Promise<{
16 |       id: string;
17 |       email_address: string;
18 |       status: string;
19 |       [key: string]: any;
20 |     }>;
21 |   };
22 | } 
```

app/admin/page.tsx
```
1 | 'use client';
2 | 
3 | import { useState, useEffect } from 'react';
4 | import { useRouter } from 'next/navigation';
5 | 
6 | type Subscriber = {
7 |   id: number;
8 |   email: string;
9 |   created_at: string;
10 |   status: string;
11 | };
12 | 
13 | export default function AdminPage() {
14 |   const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
15 |   const [loading, setLoading] = useState(true);
16 |   const [error, setError] = useState<string | null>(null);
17 |   const [username, setUsername] = useState('');
18 |   const [password, setPassword] = useState('');
19 |   const [isAuthenticated, setIsAuthenticated] = useState(false);
20 |   const router = useRouter();
21 | 
22 |   const handleLogin = async (e: React.FormEvent) => {
23 |     e.preventDefault();
24 |     
25 |     try {
26 |       const credentials = btoa(`${username}:${password}`);
27 |       const response = await fetch('/api/subscribers', {
28 |         headers: {
29 |           'Authorization': `Basic ${credentials}`
30 |         }
31 |       });
32 |       
33 |       if (response.ok) {
34 |         const data = await response.json();
35 |         setSubscribers(data.subscribers);
36 |         setIsAuthenticated(true);
37 |         setError(null);
38 |       } else {
39 |         setError('Invalid credentials');
40 |       }
41 |     } catch (err) {
42 |       setError('Failed to authenticate');
43 |       console.error(err);
44 |     } finally {
45 |       setLoading(false);
46 |     }
47 |   };
48 | 
49 |   const handleExport = () => {
50 |     // Create CSV content
51 |     const csvContent = [
52 |       ['ID', 'Email', 'Date', 'Status'],
53 |       ...subscribers.map(sub => [
54 |         sub.id,
55 |         sub.email,
56 |         new Date(sub.created_at).toLocaleString(),
57 |         sub.status
58 |       ])
59 |     ].map(row => row.join(',')).join('\n');
60 |     
61 |     // Create download link
62 |     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
63 |     const url = URL.createObjectURL(blob);
64 |     const link = document.createElement('a');
65 |     link.setAttribute('href', url);
66 |     link.setAttribute('download', `subscribers_${new Date().toISOString().split('T')[0]}.csv`);
67 |     link.style.visibility = 'hidden';
68 |     document.body.appendChild(link);
69 |     link.click();
70 |     document.body.removeChild(link);
71 |   };
72 | 
73 |   if (!isAuthenticated) {
74 |     return (
75 |       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
76 |         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
77 |           <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
78 |           
79 |           {error && (
80 |             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
81 |               {error}
82 |             </div>
83 |           )}
84 |           
85 |           <form onSubmit={handleLogin}>
86 |             <div className="mb-4">
87 |               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
88 |                 Username
89 |               </label>
90 |               <input
91 |                 id="username"
92 |                 type="text"
93 |                 value={username}
94 |                 onChange={(e) => setUsername(e.target.value)}
95 |                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
96 |                 required
97 |               />
98 |             </div>
99 |             
100 |             <div className="mb-6">
101 |               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
102 |                 Password
103 |               </label>
104 |               <input
105 |                 id="password"
106 |                 type="password"
107 |                 value={password}
108 |                 onChange={(e) => setPassword(e.target.value)}
109 |                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
110 |                 required
111 |               />
112 |             </div>
113 |             
114 |             <div className="flex items-center justify-between">
115 |               <button
116 |                 type="submit"
117 |                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
118 |                 disabled={loading}
119 |               >
120 |                 {loading ? 'Logging in...' : 'Login'}
121 |               </button>
122 |             </div>
123 |           </form>
124 |         </div>
125 |       </div>
126 |     );
127 |   }
128 | 
129 |   return (
130 |     <div className="min-h-screen bg-gray-100 p-8">
131 |       <div className="max-w-6xl mx-auto">
132 |         <div className="flex justify-between items-center mb-8">
133 |           <h1 className="text-3xl font-bold">Subscribers Admin</h1>
134 |           <div className="space-x-4">
135 |             <button
136 |               onClick={handleExport}
137 |               className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
138 |             >
139 |               Export CSV
140 |             </button>
141 |             <button
142 |               onClick={() => {
143 |                 setIsAuthenticated(false);
144 |                 setUsername('');
145 |                 setPassword('');
146 |               }}
147 |               className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
148 |             >
149 |               Logout
150 |             </button>
151 |           </div>
152 |         </div>
153 |         
154 |         <div className="bg-white shadow-md rounded-lg overflow-hidden">
155 |           <table className="min-w-full divide-y divide-gray-200">
156 |             <thead className="bg-gray-50">
157 |               <tr>
158 |                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
159 |                   ID
160 |                 </th>
161 |                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
162 |                   Email
163 |                 </th>
164 |                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
165 |                   Date
166 |                 </th>
167 |                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
168 |                   Status
169 |                 </th>
170 |               </tr>
171 |             </thead>
172 |             <tbody className="bg-white divide-y divide-gray-200">
173 |               {subscribers.length === 0 ? (
174 |                 <tr>
175 |                   <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
176 |                     No subscribers found
177 |                   </td>
178 |                 </tr>
179 |               ) : (
180 |                 subscribers.map((subscriber) => (
181 |                   <tr key={subscriber.id}>
182 |                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
183 |                       {subscriber.id}
184 |                     </td>
185 |                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
186 |                       {subscriber.email}
187 |                     </td>
188 |                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
189 |                       {new Date(subscriber.created_at).toLocaleString()}
190 |                     </td>
191 |                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
192 |                       <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
193 |                         subscriber.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
194 |                       }`}>
195 |                         {subscriber.status}
196 |                       </span>
197 |                     </td>
198 |                   </tr>
199 |                 ))
200 |               )}
201 |             </tbody>
202 |           </table>
203 |         </div>
204 |       </div>
205 |     </div>
206 |   );
207 | } 
```

lib/db.ts
```
1 | import { Pool } from 'pg';
2 | 
3 | // Create a connection pool to the Neon database
4 | const pool = new Pool({
5 |   connectionString: process.env.DATABASE_URL,
6 |   ssl: {
7 |     rejectUnauthorized: false // Required for some Neon connections
8 |   }
9 | });
10 | 
11 | // Test the database connection
12 | export async function testConnection() {
13 |   const client = await pool.connect();
14 |   try {
15 |     const result = await client.query('SELECT NOW()');
16 |     console.log('Database connection successful:', result.rows[0]);
17 |     return true;
18 |   } catch (error) {
19 |     console.error('Database connection failed:', error);
20 |     return false;
21 |   } finally {
22 |     client.release();
23 |   }
24 | }
25 | 
26 | // Initialize the database table if it doesn't exist
27 | export async function initializeDatabase() {
28 |   console.log('Initializing database...');
29 |   const client = await pool.connect();
30 |   try {
31 |     await client.query(`
32 |       CREATE TABLE IF NOT EXISTS subscribers (
33 |         id SERIAL PRIMARY KEY,
34 |         email VARCHAR(255) UNIQUE NOT NULL,
35 |         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
36 |         status VARCHAR(50) DEFAULT 'active'
37 |       );
38 |     `);
39 |     console.log('Database initialized successfully');
40 |     
41 |     // Test the connection after initialization
42 |     await testConnection();
43 |   } catch (error) {
44 |     console.error('Error initializing database:', error);
45 |     throw error;
46 |   } finally {
47 |     client.release();
48 |   }
49 | }
50 | 
51 | // Add a subscriber to the database
52 | export async function addSubscriber(email: string) {
53 |   console.log(`Adding subscriber with email: ${email}`);
54 |   const client = await pool.connect();
55 |   try {
56 |     const result = await client.query(
57 |       'INSERT INTO subscribers (email) VALUES ($1) RETURNING id, email, created_at',
58 |       [email]
59 |     );
60 |     console.log('Subscriber added:', result.rows[0]);
61 |     return result.rows[0];
62 |   } catch (error) {
63 |     console.error(`Error adding subscriber ${email}:`, error);
64 |     throw error;
65 |   } finally {
66 |     client.release();
67 |   }
68 | }
69 | 
70 | // Get all subscribers
71 | export async function getSubscribers() {
72 |   const client = await pool.connect();
73 |   try {
74 |     const result = await client.query(
75 |       'SELECT id, email, created_at, status FROM subscribers ORDER BY created_at DESC'
76 |     );
77 |     return result.rows;
78 |   } catch (error) {
79 |     console.error('Error getting subscribers:', error);
80 |     throw error;
81 |   } finally {
82 |     client.release();
83 |   }
84 | }
85 | 
86 | export { pool }; 
```

lib/utils.ts
```
1 | import { type ClassValue, clsx } from "clsx";
2 | import { twMerge } from "tailwind-merge";
3 | 
4 | export const cn = (...inputs: ClassValue[]) => {
5 |   return twMerge(clsx(inputs));
6 | }; 
```

components/CoCreate.tsx
```
1 | import Image from 'next/image';
2 | 
3 | export default function CoCreate() {
4 |   return (
5 |     <section className="bg-black text-white py-24">
6 |       <div className="container max-w-7xl mx-auto px-8">
7 |         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
8 |           <div>
9 |             <p className="text-sm mb-3">Valuable connections</p>
10 |             <h2 className="text-5xl font-bold mb-8">
11 |               Co-create with like-minded?
12 |             </h2>
13 |             
14 |             <p className="text-lg mb-10">
15 |               Collaborate and co-create innovative ideas and projects with individuals who
16 |               share similar values and beliefs.
17 |             </p>
18 |             
19 |             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
20 |               <div>
21 |                 <h3 className="text-2xl font-bold mb-3">Match with new friends</h3>
22 |                 <p className="text-lg text-gray-300">
23 |                   Connect with new people who have similar interests.
24 |                 </p>
25 |               </div>
26 |               
27 |               <div>
28 |                 <h3 className="text-2xl font-bold mb-3">Bring your own squad</h3>
29 |                 <p className="text-lg text-gray-300">
30 |                   Collaborate with your study partners, friends, or colleagues.
31 |                 </p>
32 |               </div>
33 |             </div>
34 |           </div>
35 |           
36 |           <div className="relative">
37 |             <Image 
38 |               src="/images/group1.jpeg"
39 |               alt="People collaborating in an office space"
40 |               width={600}
41 |               height={600}
42 |               className="rounded-md w-full h-auto object-cover"
43 |               priority
44 |             />
45 |           </div>
46 |         </div>
47 |       </div>
48 |     </section>
49 |   );
50 | } 
```

components/Contact.tsx
```
1 | "use client";
2 | 
3 | import { useState } from 'react';
4 | 
5 | const Contact = () => {
6 |   const [email, setEmail] = useState('');
7 |   const [name, setName] = useState('');
8 |   const [submitted, setSubmitted] = useState(false);
9 | 
10 |   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
11 |     e.preventDefault();
12 |     // Form submission logic would go here
13 |     console.log('Form submitted with:', { name, email });
14 |     setSubmitted(true);
15 |     setName('');
16 |     setEmail('');
17 |   };
18 | 
19 |   return (
20 |     <section id="contact" className="py-20 bg-white">
21 |       <div className="container px-4 mx-auto">
22 |         <div className="flex flex-col items-center justify-center space-y-4 text-center">
23 |           <div className="space-y-2 max-w-3xl">
24 |             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
25 |               Join our interest list
26 |             </h2>
27 |             <p className="text-lg text-gray-600 md:text-xl">
28 |               Be the first to know when we match new projects with nonprofits.
29 |             </p>
30 |           </div>
31 |         </div>
32 |         
33 |         <div className="mx-auto max-w-md mt-10">
34 |           {submitted ? (
35 |             <div className="p-6 text-center">
36 |               <h3 className="text-lg font-medium text-green-800">Thank you for joining!</h3>
37 |               <p className="mt-2 text-sm text-green-700">
38 |                 We&apos;ve received your information and will be in touch soon.
39 |               </p>
40 |             </div>
41 |           ) : (
42 |             <form onSubmit={handleSubmit} className="space-y-4">
43 |               <div className="space-y-2">
44 |                 <label htmlFor="name" className="text-sm font-medium leading-none">
45 |                   Name
46 |                 </label>
47 |                 <input
48 |                   id="name"
49 |                   value={name}
50 |                   onChange={(e) => setName(e.target.value)}
51 |                   className="flex h-10 w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
52 |                   placeholder="Your name"
53 |                   required
54 |                 />
55 |               </div>
56 |               <div className="space-y-2">
57 |                 <label htmlFor="email" className="text-sm font-medium leading-none">
58 |                   Email
59 |                 </label>
60 |                 <input
61 |                   id="email"
62 |                   type="email"
63 |                   value={email}
64 |                   onChange={(e) => setEmail(e.target.value)}
65 |                   className="flex h-10 w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
66 |                   placeholder="your.email@example.com"
67 |                   required
68 |                 />
69 |               </div>
70 |               <button
71 |                 type="submit"
72 |                 className="inline-flex h-10 w-full items-center justify-center bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus:outline-none"
73 |               >
74 |                 Join the interest list
75 |               </button>
76 |             </form>
77 |           )}
78 |         </div>
79 |       </div>
80 |     </section>
81 |   );
82 | };
83 | 
84 | export default Contact; 
```

components/Education.tsx
```
1 | import Image from 'next/image';
2 | 
3 | export default function Education() {
4 |   return (
5 |     <section className="bg-black text-white py-24">
6 |       <div className="container max-w-7xl mx-auto px-8">
7 |         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
8 |           <div>
9 |             <p className="text-sm mb-3">AI education</p>
10 |             <h2 className="text-5xl font-bold mb-8">
11 |               Join educational classes
12 |             </h2>
13 |             
14 |             <p className="text-lg mb-10">
15 |               Join in on classes, receive access to AI tools and a educational community
16 |             </p>
17 |             
18 |             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
19 |               <div>
20 |                 <h3 className="text-2xl font-bold mb-3">Receive badges</h3>
21 |                 <p className="text-lg text-gray-300">
22 |                   Join classes and receive certifications
23 |                 </p>
24 |               </div>
25 |               
26 |               <div>
27 |                 <h3 className="text-2xl font-bold mb-3">Meet mentors</h3>
28 |                 <p className="text-lg text-gray-300">
29 |                   Meet mentors IRL
30 |                 </p>
31 |               </div>
32 |             </div>
33 |           </div>
34 |           
35 |           <div className="relative">
36 |             <Image 
37 |               src="/images/two-sitting.png"
38 |               alt="Two people sitting together working on a laptop"
39 |               width={600}
40 |               height={600}
41 |               className="rounded-md w-full h-auto object-cover"
42 |               priority
43 |             />
44 |           </div>
45 |         </div>
46 |       </div>
47 |     </section>
48 |   );
49 | } 
```

components/EmailSubscription.tsx
```
1 | "use client";
2 | 
3 | import { useState, useRef, useEffect } from 'react';
4 | import TypeformSurvey from './TypeformSurvey';
5 | 
6 | export default function EmailSubscription() {
7 |   const [email, setEmail] = useState('');
8 |   const [error, setError] = useState('');
9 |   const [success, setSuccess] = useState(false);
10 |   const [loading, setLoading] = useState(false);
11 |   const surveyRef = useRef<HTMLDivElement>(null);
12 | 
13 |   useEffect(() => {
14 |     // Scroll to the survey when it becomes visible
15 |     if (success && surveyRef.current) {
16 |       setTimeout(() => {
17 |         surveyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
18 |       }, 500); // Small delay to ensure DOM is updated
19 |     }
20 |   }, [success]);
21 | 
22 |   const validateEmail = (email: string) => {
23 |     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
24 |     return regex.test(email);
25 |   };
26 | 
27 |   const handleSubmit = async (e: React.FormEvent) => {
28 |     e.preventDefault();
29 |     
30 |     // Reset states
31 |     setError('');
32 |     setSuccess(false);
33 |     
34 |     // Validate email
35 |     if (!email.trim()) {
36 |       setError('Please enter your email address');
37 |       return;
38 |     }
39 |     
40 |     if (!validateEmail(email)) {
41 |       setError('Please enter a valid email address');
42 |       return;
43 |     }
44 |     
45 |     setLoading(true);
46 |     
47 |     try {
48 |       // Send the email to our API endpoint
49 |       console.log('Submitting email:', email);
50 |       const response = await fetch('/api/subscribe', {
51 |         method: 'POST',
52 |         headers: {
53 |           'Content-Type': 'application/json',
54 |         },
55 |         body: JSON.stringify({ email }),
56 |       });
57 |       
58 |       const data = await response.json();
59 |       console.log('Response:', data);
60 |       
61 |       if (!response.ok) {
62 |         throw new Error(data.error || 'Something went wrong');
63 |       }
64 |       
65 |       setSuccess(true);
66 |       setEmail('');
67 |     } catch (error: any) {
68 |       console.error('Subscription error:', error);
69 |       setError(error.message || 'Something went wrong. Please try again later.');
70 |     } finally {
71 |       setLoading(false);
72 |     }
73 |   };
74 | 
75 |   return (
76 |     <section id="contact" className="py-24 bg-white relative">
77 |       <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>
78 |       
79 |       <div className="container max-w-7xl mx-auto px-8 relative z-10">
80 |         <div className="max-w-3xl mx-auto">
81 |           <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
82 |             <div className="text-center mb-10">
83 |               <h2 className="text-4xl font-bold mb-6 text-black">Join our interest list</h2>
84 |               <p className="text-xl text-gray-600">
85 |                 Be the first to know when we launch and get early access to our platform.
86 |               </p>
87 |             </div>
88 |             
89 |             {success ? (
90 |               <div>
91 |                 <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8 text-center">
92 |                   <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
93 |                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
94 |                   </svg>
95 |                   <h3 className="text-green-800 font-bold text-2xl mb-2">
96 |                     Thank you for subscribing!
97 |                   </h3>
98 |                   <p className="text-green-700 text-lg mb-4">
99 |                     You're now on our interest list and will be notified when we launch.
100 |                   </p>
101 |                 </div>
102 |                 
103 |                 <div ref={surveyRef} className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8 text-center">
104 |                   <div className="flex items-center justify-center mb-4">
105 |                     <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-2">1</div>
106 |                     <div className="h-1 w-12 bg-blue-300"></div>
107 |                     <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">2</div>
108 |                   </div>
109 |                   <h3 className="text-blue-800 font-bold text-2xl mb-3">
110 |                     One more step: Quick Survey
111 |                   </h3>
112 |                   <p className="text-blue-700 text-lg mb-3">
113 |                     We'd love to learn more about you to better tailor our platform to your needs.
114 |                   </p>
115 |                   <p className="text-blue-600 font-medium mb-4">
116 |                     This short survey will take only 2-3 minutes to complete.
117 |                   </p>
118 |                   <button 
119 |                     onClick={() => {
120 |                       const surveyElement = document.querySelector('.typeform-container');
121 |                       if (surveyElement) {
122 |                         surveyElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
123 |                       }
124 |                     }}
125 |                     className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4"
126 |                   >
127 |                     Start Survey Now
128 |                   </button>
129 |                   <p className="text-gray-500 text-sm mb-4">
130 |                     Having trouble viewing the survey? Use the "Open in new tab" option at the top of the survey.
131 |                   </p>
132 |                   <div className="flex justify-center">
133 |                     <svg className="w-6 h-6 text-blue-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
134 |                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
135 |                     </svg>
136 |                   </div>
137 |                 </div>
138 |                 
139 |                 <TypeformSurvey isVisible={true} />
140 |               </div>
141 |             ) : (
142 |               <form onSubmit={handleSubmit} className="max-w-md mx-auto">
143 |                 <div className="flex flex-col gap-4">
144 |                   <div className="flex-grow">
145 |                     <input
146 |                       type="email"
147 |                       value={email}
148 |                       onChange={(e) => setEmail(e.target.value)}
149 |                       placeholder="Enter your email address"
150 |                       className={`w-full px-4 py-4 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg`}
151 |                       disabled={loading}
152 |                     />
153 |                     {error && <p className="mt-2 text-red-600 text-sm text-left">{error}</p>}
154 |                   </div>
155 |                   <button
156 |                     type="submit"
157 |                     disabled={loading}
158 |                     className="w-full px-6 py-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-70 text-lg"
159 |                   >
160 |                     {loading ? (
161 |                       <span className="flex items-center justify-center">
162 |                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
163 |                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
164 |                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
165 |                         </svg>
166 |                         Submitting...
167 |                       </span>
168 |                     ) : 'Subscribe Now'}
169 |                   </button>
170 |                 </div>
171 |                 <p className="text-gray-500 text-sm mt-4 text-center">
172 |                   We respect your privacy. Unsubscribe at any time.
173 |                 </p>
174 |               </form>
175 |             )}
176 |           </div>
177 |         </div>
178 |       </div>
179 |     </section>
180 |   );
181 | } 
```

components/Explore.tsx
```
1 | export default function Explore() {
2 |   return (
3 |     <section className="bg-[#4D5A4A] text-white py-24">
4 |       <div className="container max-w-7xl mx-auto px-8">
5 |         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
6 |           <div>
7 |             <h2 className="text-5xl font-bold mb-6 leading-tight">
8 |               Let&apos;s explore how we can make volunteering f%&#ing cool?
9 |             </h2>
10 |           </div>
11 |           
12 |           <div>
13 |             <p className="text-lg leading-relaxed">
14 |               Let&apos;s strengthening the digital infrastructure and facilitating for flexible and
15 |               rewarding experiences - while increasing valuable connections across
16 |               boarders, and enhance meaningful memories along the way.
17 |             </p>
18 |           </div>
19 |         </div>
20 |       </div>
21 |     </section>
22 |   );
23 | } 
```

components/FAQ.tsx
```
1 | "use client";
2 | 
3 | import { useState } from 'react';
4 | 
5 | type FAQItem = {
6 |   question: string;
7 |   answer: string;
8 | };
9 | 
10 | export default function FAQ() {
11 |   const [openIndex, setOpenIndex] = useState<number | null>(null);
12 | 
13 |   const faqItems: FAQItem[] = [
14 |     {
15 |       question: "What is gamified volunteering?",
16 |       answer: "Gamified volunteering is on the rise. Changing traditional volunteering into a flexible and skill building experiences. It incorporates elements of game design to motivate and reward volunteers."
17 |     },
18 |     {
19 |       question: "How do I sign up for the pilot?",
20 |       answer: "Signing up is easy! Simply click the 'Sign Up' button on our homepage and fill out the registration form. Once registered, you can soon explore non-binding volunteer opportunities that match your skills."
21 |     },
22 |     {
23 |       question: "Who can volunteer?",
24 |       answer: "Anyone can volunteer! We welcome especially individuals from all backgrounds, including students, professionals, and retirees. If you have digital skills or a passion for helping others, there's a place for you here."
25 |     },
26 |     {
27 |       question: "What skills are needed?",
28 |       answer: "We seek a diverse range of skills, including graphic design, marketing, communication, AI tools, UX/UI design, and social media expertise. Whether you're a communicator or a content creator, your talents can make a difference."
29 |     },
30 |     {
31 |       question: "Can I earn references?",
32 |       answer: "Yes, volunteering with us can help you build your professional portfolio. Many nonprofits provide references upon completion of projects. This is a great way to enhance your resume while making an impact."
33 |     },
34 |     {
35 |       question: "What is your business model?",
36 |       answer: "Recruitment. For those who want - companies, start-and scale ups can find freelance or part-time hires for thir squads."
37 |     }
38 |   ];
39 | 
40 |   const toggleAccordion = (index: number) => {
41 |     setOpenIndex(openIndex === index ? null : index);
42 |   };
43 | 
44 |   return (
45 |     <section className="bg-[#121212] text-white py-24">
46 |       <div className="container max-w-7xl mx-auto px-8">
47 |         <div className="mb-16">
48 |           <h2 className="text-5xl font-bold mb-6">FAQs</h2>
49 |           <p className="text-lg max-w-3xl">
50 |             Find answers to common questions about our platform and how to get involved.
51 |           </p>
52 |         </div>
53 |         
54 |         <div className="max-w-4xl mx-auto">
55 |           {faqItems.map((item, index) => (
56 |             <div key={index} className="border-b border-gray-800">
57 |               <button
58 |                 className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
59 |                 onClick={() => toggleAccordion(index)}
60 |               >
61 |                 <h3 className="text-xl font-bold">{item.question}</h3>
62 |                 <svg
63 |                   className={`w-6 h-6 transform ${openIndex === index ? 'rotate-180' : ''} transition-transform duration-200`}
64 |                   fill="none"
65 |                   stroke="currentColor"
66 |                   viewBox="0 0 24 24"
67 |                   xmlns="http://www.w3.org/2000/svg"
68 |                 >
69 |                   <path
70 |                     strokeLinecap="round"
71 |                     strokeLinejoin="round"
72 |                     strokeWidth={2}
73 |                     d="M19 9l-7 7-7-7"
74 |                   />
75 |                 </svg>
76 |               </button>
77 |               <div
78 |                 className={`overflow-hidden transition-all duration-300 ${
79 |                   openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
80 |                 }`}
81 |               >
82 |                 <p className="text-gray-300">{item.answer}</p>
83 |               </div>
84 |             </div>
85 |           ))}
86 |         </div>
87 |       </div>
88 |     </section>
89 |   );
90 | } 
```

components/Features.tsx
```
1 | "use client";
2 | 
3 | import { 
4 |   BarChart3, 
5 |   Rocket, 
6 |   Users, 
7 |   Zap 
8 | } from 'lucide-react';
9 | 
10 | type FeatureItem = {
11 |   icon: React.ReactNode;
12 |   title: string;
13 |   description: string;
14 | };
15 | 
16 | const featureItems: FeatureItem[] = [
17 |   {
18 |     icon: <Rocket className="h-10 w-10 text-black dark:text-white" />,
19 |     title: 'Innovative Solutions',
20 |     description: 'Our cutting-edge technology provides innovative solutions to complex problems.',
21 |   },
22 |   {
23 |     icon: <Users className="h-10 w-10 text-black dark:text-white" />,
24 |     title: 'Community Focused',
25 |     description: 'We build strong communities through collaboration and shared values.',
26 |   },
27 |   {
28 |     icon: <BarChart3 className="h-10 w-10 text-black dark:text-white" />,
29 |     title: 'Data-Driven',
30 |     description: 'Make informed decisions with our powerful analytics and insights.',
31 |   },
32 |   {
33 |     icon: <Zap className="h-10 w-10 text-black dark:text-white" />,
34 |     title: 'Fast & Efficient',
35 |     description: 'Our platform is optimized for speed and efficiency, saving you time and resources.',
36 |   },
37 | ];
38 | 
39 | const Features = () => {
40 |   return (
41 |     <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
42 |       <div className="container px-4 md:px-6">
43 |         <div className="flex flex-col items-center justify-center space-y-4 text-center">
44 |           <div className="space-y-2">
45 |             <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm">
46 |               Features
47 |             </div>
48 |             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
49 |               What We Offer
50 |             </h2>
51 |             <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
52 |               Our platform provides a comprehensive set of features designed to help you make a positive impact.
53 |             </p>
54 |           </div>
55 |         </div>
56 |         <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
57 |           {featureItems.map((item, index) => (
58 |             <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
59 |               <div className="p-2">{item.icon}</div>
60 |               <h3 className="text-xl font-bold">{item.title}</h3>
61 |               <p className="text-center text-gray-500 dark:text-gray-400">
62 |                 {item.description}
63 |               </p>
64 |             </div>
65 |           ))}
66 |         </div>
67 |       </div>
68 |     </section>
69 |   );
70 | };
71 | 
72 | export default Features; 
```

components/Footer.tsx
```
1 | "use client";
2 | 
3 | import Link from 'next/link';
4 | import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
5 | 
6 | export default function Footer() {
7 |   return (
8 |     <footer className="bg-black text-white py-16">
9 |       <div className="container max-w-7xl mx-auto px-8">
10 |         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
11 |           {/* Column 1: Logo and Contact Info */}
12 |           <div className="space-y-6">
13 |             <Link href="/" className="text-3xl font-bold italic">Logo</Link>
14 |             
15 |             <div className="mt-8">
16 |               <p className="font-bold mb-2">Address:</p>
17 |               <p>Torvgata 13, 2000 Lillestrøm</p>
18 |             </div>
19 |             
20 |             <div>
21 |               <p className="font-bold mb-2">Contact:</p>
22 |               <a href="tel:+4795752185" className="hover:underline">(+47) 95 75 21 85</a>
23 |             </div>
24 |             
25 |             <div className="flex space-x-4 mt-4">
26 |               <a href="#" className="text-white hover:text-gray-300">
27 |                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
28 |                   <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
29 |                 </svg>
30 |               </a>
31 |               <a href="#" className="text-white hover:text-gray-300">
32 |                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
33 |                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
34 |                 </svg>
35 |               </a>
36 |             </div>
37 |           </div>
38 |           
39 |           {/* Column 2: Get Involved */}
40 |           <div className="space-y-4">
41 |             <h3 className="text-lg font-bold mb-6">Get Involved</h3>
42 |             <ul className="space-y-4">
43 |               <li><Link href="#" className="hover:underline">Join Us</Link></li>
44 |               <li><Link href="#" className="hover:underline">Success stories</Link></li>
45 |             </ul>
46 |           </div>
47 |           
48 |           {/* Column 3: FAQs */}
49 |           <div className="space-y-4">
50 |             <h3 className="text-lg font-bold mb-6">FAQs</h3>
51 |             <ul className="space-y-4">
52 |               <li><Link href="#" className="hover:underline">Contact us</Link></li>
53 |               <li><Link href="#" className="hover:underline">Blog posts</Link></li>
54 |               <li><Link href="#" className="hover:underline">Events calendar</Link></li>
55 |               <li><Link href="#" className="hover:underline">Media</Link></li>
56 |             </ul>
57 |           </div>
58 |           
59 |           {/* Column 4: Empty space for alignment */}
60 |           <div></div>
61 |         </div>
62 |         
63 |         <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between">
64 |           <p className="text-gray-400">© 2024 Relume. All rights reserved.</p>
65 |           <div className="flex space-x-6 mt-4 md:mt-0">
66 |             <Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link>
67 |             <Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link>
68 |             <Link href="#" className="text-gray-400 hover:text-white">Cookies Settings</Link>
69 |           </div>
70 |         </div>
71 |       </div>
72 |     </footer>
73 |   );
74 | } 
```

components/GamifiedProfile.tsx
```
1 | "use client";
2 | 
3 | import Image from 'next/image';
4 | import { useState, useRef, TouchEvent } from 'react';
5 | 
6 | export default function GamifiedProfile() {
7 |   const [currentProfile, setCurrentProfile] = useState(0);
8 |   const containerRef = useRef<HTMLDivElement>(null);
9 |   const [touchStart, setTouchStart] = useState<number | null>(null);
10 |   const [touchEnd, setTouchEnd] = useState<number | null>(null);
11 |   
12 |   // Profile data
13 |   const profiles = [
14 |     {
15 |       image: "/images/lynette.png",
16 |       name: "Lynette",
17 |       profession: "UX/UI design",
18 |       location: "Oslo, Norway",
19 |       role: "Student",
20 |       badge: "New on platform"
21 |     },
22 |     {
23 |       image: "/images/kompis.png",
24 |       name: " Jacopo",
25 |       profession: "Graphic design",
26 |       location: "Berlin, Germany",
27 |       role: "Consultant",
28 |       badge: "Level 3"
29 |     }
30 |   ];
31 |   
32 |   // Handle touch events for swiping
33 |   const handleTouchStart = (e: TouchEvent) => {
34 |     setTouchStart(e.targetTouches[0].clientX);
35 |     setTouchEnd(null);
36 |   };
37 |   
38 |   const handleTouchMove = (e: TouchEvent) => {
39 |     setTouchEnd(e.targetTouches[0].clientX);
40 |   };
41 |   
42 |   const handleTouchEnd = () => {
43 |     if (!touchStart || !touchEnd) return;
44 |     
45 |     const distance = touchStart - touchEnd;
46 |     const isLeftSwipe = distance > 50;
47 |     const isRightSwipe = distance < -50;
48 |     
49 |     if (isLeftSwipe && currentProfile === 0) {
50 |       setCurrentProfile(1);
51 |     } else if (isRightSwipe && currentProfile === 1) {
52 |       setCurrentProfile(0);
53 |     }
54 |     
55 |     // Reset touch values
56 |     setTouchStart(null);
57 |     setTouchEnd(null);
58 |   };
59 |   
60 |   // Navigation handlers
61 |   const goToPrevProfile = () => {
62 |     if (currentProfile > 0) {
63 |       setCurrentProfile(currentProfile - 1);
64 |     }
65 |   };
66 |   
67 |   const goToNextProfile = () => {
68 |     if (currentProfile < 1) {
69 |       setCurrentProfile(currentProfile + 1);
70 |     }
71 |   };
72 |   
73 |   return (
74 |     <section className="bg-black text-white py-24">
75 |       <div className="container max-w-7xl mx-auto px-8">
76 |         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
77 |           <div className="relative">
78 |             {/* iPhone frame with profile image */}
79 |             <div className="relative max-w-[320px] mx-auto">
80 |               {/* iPhone outer frame */}
81 |               <div className="relative bg-[#111111] rounded-[40px] overflow-hidden border border-[#333333] shadow-xl" style={{ aspectRatio: '9/19' }}>
82 |                 {/* Notch */}
83 |                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30%] h-[25px] bg-[#111111] rounded-b-[14px] z-10"></div>
84 |                 
85 |                 {/* Navigation arrows - integrated into the phone frame */}
86 |                 {currentProfile > 0 && (
87 |                   <button 
88 |                     onClick={goToPrevProfile}
89 |                     className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all"
90 |                     aria-label="Previous profile"
91 |                   >
92 |                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
93 |                       <path d="M15 18l-6-6 6-6" />
94 |                     </svg>
95 |                   </button>
96 |                 )}
97 |                 
98 |                 {currentProfile < 1 && (
99 |                   <button 
100 |                     onClick={goToNextProfile}
101 |                     className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all"
102 |                     aria-label="Next profile"
103 |                   >
104 |                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
105 |                       <path d="M9 18l6-6-6-6" />
106 |                     </svg>
107 |                   </button>
108 |                 )}
109 |                 
110 |                 {/* Screen content - swipeable container */}
111 |                 <div 
112 |                   ref={containerRef}
113 |                   className="relative bg-[#f5f5f7] rounded-[32px] overflow-hidden h-full mx-[5px] my-[5px]"
114 |                   onTouchStart={handleTouchStart}
115 |                   onTouchMove={handleTouchMove}
116 |                   onTouchEnd={handleTouchEnd}
117 |                   style={{ height: 'calc(100% - 10px)' }}
118 |                 >
119 |                   {/* Profiles container with horizontal layout */}
120 |                   <div 
121 |                     className="flex transition-transform duration-300 ease-in-out h-full"
122 |                     style={{ transform: `translateX(-${currentProfile * 100}%)` }}
123 |                   >
124 |                     {/* Map through profiles */}
125 |                     {profiles.map((profile, index) => (
126 |                       <div key={index} className="min-w-full min-h-full flex flex-col relative">
127 |                         {/* Badge overlay */}
128 |                         <div className="absolute top-6 left-6 z-10">
129 |                           <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
130 |                             <p className="text-white text-sm font-medium">Badge: {profile.badge}</p>
131 |                           </div>
132 |                         </div>
133 |                         
134 |                         {/* Profile image */}
135 |                         <div className="flex-shrink-0 relative">
136 |                           <Image 
137 |                             src={profile.image}
138 |                             alt={`${profile.name}'s profile photo`}
139 |                             width={600}
140 |                             height={800}
141 |                             className="w-full h-auto"
142 |                             priority={index === 0}
143 |                           />
144 |                           
145 |                           {/* Profile info overlay */}
146 |                           <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
147 |                             <h3 className="text-2xl font-medium ml-1">{profile.name}</h3>
148 |                             <p className="text-lg">{profile.profession}</p>
149 |                             <p className="text-lg">{profile.location}</p>
150 |                             <p className="text-lg">{profile.role}</p>
151 |                           </div>
152 |                         </div>
153 |                         
154 |                         {/* Profile text */}
155 |                         <div className="text-center p-4 text-black flex-grow">
156 |                           <p className="uppercase text-xs tracking-wider mb-1 text-gray-500">YOUR PROFILE</p>
157 |                           <h3 className="text-xl font-bold mb-1">Your profile card</h3>
158 |                           <p className="text-xs text-gray-600 mb-3">
159 |                             Showcase your skills to nonprofits
160 |                           </p>
161 |                           
162 |                           <div className="text-left">
163 |                             {index === 0 ? (
164 |                               <>
165 |                                 <div className="mb-2">
166 |                                   <div className="flex items-start">
167 |                                     <span className="text-gray-400 text-xs mr-2">01</span>
168 |                                     <div>
169 |                                       <h4 className="text-sm font-semibold">What drives you</h4>
170 |                                     </div>
171 |                                   </div>
172 |                                 </div>
173 |                                 
174 |                                 <div className="mb-0">
175 |                                   <div className="flex items-start">
176 |                                     <span className="text-gray-400 text-xs mr-2">02</span>
177 |                                     <div>
178 |                                       <h4 className="text-sm font-semibold">Your long-term goals</h4>
179 |                                     </div>
180 |                                   </div>
181 |                                 </div>
182 |                               </>
183 |                             ) : (
184 |                               <>
185 |                                 <div className="mb-2">
186 |                                   <div className="flex items-start">
187 |                                     <span className="text-gray-400 text-xs mr-2">03</span>
188 |                                     <div>
189 |                                       <h4 className="text-sm font-semibold">The unique individual behind the skills</h4>
190 |                                     </div>
191 |                                   </div>
192 |                                 </div>
193 |                                 
194 |                                 <div className="mb-0">
195 |                                   <div className="flex items-start">
196 |                                     <span className="text-gray-400 text-xs mr-2">04</span>
197 |                                     <div>
198 |                                       <h4 className="text-sm font-semibold">Skills and experience</h4>
199 |                                     </div>
200 |                                   </div>
201 |                                 </div>
202 |                               </>
203 |                             )}
204 |                           </div>
205 |                         </div>
206 |                       </div>
207 |                     ))}
208 |                   </div>
209 |                 </div>
210 |                 
211 |                 {/* Swipe indicator */}
212 |                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
213 |                   <div 
214 |                     className={`w-2 h-2 rounded-full cursor-pointer ${currentProfile === 0 ? 'bg-black' : 'bg-gray-400'}`}
215 |                     onClick={() => setCurrentProfile(0)}
216 |                   ></div>
217 |                   <div 
218 |                     className={`w-2 h-2 rounded-full cursor-pointer ${currentProfile === 1 ? 'bg-black' : 'bg-gray-400'}`}
219 |                     onClick={() => setCurrentProfile(1)}
220 |                   ></div>
221 |                 </div>
222 |               </div>
223 |             </div>
224 |           </div>
225 |           
226 |           <div>
227 |             <p className="text-sm mb-3">Gamified profile</p>
228 |             <h2 className="text-5xl font-bold mb-8">
229 |               Can we unlock your potential?
230 |             </h2>
231 |             
232 |             <p className="text-lg mb-10">
233 |               Create your personal profile and include your skills, interests, availability, and
234 |               personal goals for your future.
235 |             </p>
236 |             
237 |             <div className="grid grid-cols-1 gap-10">
238 |               <div>
239 |                 <h3 className="text-2xl font-bold mb-3">Skill development</h3>
240 |                 <p className="text-lg text-gray-300">
241 |                   Improve your skills, experience and portfolio while supporting causes that
242 |                   matter to you.
243 |                 </p>
244 |               </div>
245 |               
246 |               <div>
247 |                 <h3 className="text-2xl font-bold mb-3">Networking opportunities</h3>
248 |                 <p className="text-lg text-gray-300">
249 |                   Engage with like-minded, industry professionals and mentors in your area of
250 |                   interest.
251 |                 </p>
252 |               </div>
253 |             </div>
254 |           </div>
255 |         </div>
256 |       </div>
257 |     </section>
258 |   );
259 | } 
```

components/Header.tsx
```
1 | "use client";
2 | 
3 | import Link from 'next/link';
4 | 
5 | const Header = () => {
6 |   return (
7 |     <header style={{
8 |       position: "absolute",
9 |       top: 0,
10 |       left: 0,
11 |       right: 0,
12 |       zIndex: 50,
13 |       padding: "2rem 0"
14 |     }}>
15 |       <div style={{
16 |         maxWidth: "1200px",
17 |         margin: "0 auto",
18 |         padding: "0 1rem",
19 |         display: "flex",
20 |         justifyContent: "space-between",
21 |         alignItems: "center"
22 |       }}>
23 |         <Link href="/" style={{
24 |           fontSize: "1.5rem",
25 |           fontWeight: "bold",
26 |           fontStyle: "italic",
27 |           color: "white",
28 |           textDecoration: "none"
29 |         }}>
30 |           Logo
31 |         </Link>
32 |         
33 |         <div style={{
34 |           display: "flex",
35 |           alignItems: "center",
36 |           gap: "2rem"
37 |         }}>
38 |           <Link 
39 |             href="/partners" 
40 |             style={{
41 |               fontSize: "0.875rem",
42 |               fontWeight: "500",
43 |               color: "white",
44 |               textDecoration: "none"
45 |             }}
46 |           >
47 |             Partners
48 |           </Link>
49 |           
50 |           <Link
51 |             href="#contact"
52 |             style={{
53 |               display: "inline-flex",
54 |               alignItems: "center",
55 |               justifyContent: "center",
56 |               height: "2.5rem",
57 |               padding: "0 1.5rem",
58 |               fontSize: "0.875rem",
59 |               fontWeight: "500",
60 |               color: "white",
61 |               backgroundColor: "transparent",
62 |               border: "1px solid white",
63 |               textDecoration: "none",
64 |               transition: "background-color 0.2s, color 0.2s"
65 |             }}
66 |             onMouseOver={(e) => {
67 |               e.currentTarget.style.backgroundColor = "white";
68 |               e.currentTarget.style.color = "black";
69 |             }}
70 |             onMouseOut={(e) => {
71 |               e.currentTarget.style.backgroundColor = "transparent";
72 |               e.currentTarget.style.color = "white";
73 |             }}
74 |           >
75 |             Join the interest list
76 |           </Link>
77 |         </div>
78 |       </div>
79 |     </header>
80 |   );
81 | };
82 | 
83 | export default Header; 
```

components/Hero.tsx
```
1 | "use client";
2 | 
3 | import { useState, useEffect } from 'react';
4 | import Link from 'next/link';
5 | 
6 | const heroImages = [
7 |   '/images/low-res/u9299633394_low-res_pixel_art_of_a_group_of_marketing_working_645d03de-ef84-4564-b3a1-0240f51993f6_2.png',
8 |   '/images/low-res/u9299633394_low-res_pixel_art_of_a_small_group_of_social_medi_08396967-7f40-4b24-ab24-0d76e841a003_2.png',
9 |   '/images/low-res/u9299633394_low-res_pixel_art_of_a_small_group_of_social_medi_3837f882-d8ca-4eb7-b5bc-a870b118832a_2.png',
10 |   '/images/low-res/u9299633394_low-res_pixel_art_of_a_two_people_working_on_mark_7171fcaf-5a40-4b3c-9fae-93c8a60ee96c_0.png',
11 |   '/images/low-res/u9299633394_low-res_pixel_art_of_a_diverse_couple_working_fro_b0eb278c-3614-4573-82fc-7a7e21b9bb71_0.png',
12 |   '/images/low-res/u9299633394_low-res_pixel_art_of_a_couple_working_from_a_loun_69354181-1f31-423d-a893-bf5ea21fe88a_1.png',
13 |   '/images/low-res/u9299633394_httpss.mj.runPri0aAeJu7o_Convert_to_low-res_pixel_f100555e-466b-41b1-905f-38c6af11895d_0.png',
14 |   '/images/low-res/u9299633394_httpss.mj.runc0Rd4-sWIyc_Convert_to_low-res_pixel_189a8f90-5ff8-42fa-a70a-ec53d81bbf4c_1.png'
15 | ];
16 | 
17 | // We'll use 6 images for the grid
18 | const gridImages = [
19 |   heroImages[0],
20 |   heroImages[1],
21 |   heroImages[2],
22 |   heroImages[3],
23 |   heroImages[4],
24 |   heroImages[5]
25 | ];
26 | 
27 | const Hero = () => {
28 |   // Track animation positions for each grid cell
29 |   const [positions, setPositions] = useState(Array(6).fill(50));
30 |   const [directions, setDirections] = useState(Array(6).fill('down'));
31 |   
32 |   // Handle slow up and down animation for each grid cell
33 |   useEffect(() => {
34 |     const animateBackgrounds = () => {
35 |       setPositions(prevPositions => {
36 |         return prevPositions.map((position, index) => {
37 |           // Get current direction for this cell
38 |           const direction = directions[index];
39 |           
40 |           // If we're moving down and reached near bottom
41 |           if (direction === 'down' && position >= 65) {
42 |             // Update direction for this cell
43 |             const newDirections = [...directions];
44 |             newDirections[index] = 'up';
45 |             setDirections(newDirections);
46 |             return 65;
47 |           }
48 |           // If we're moving up and reached near top
49 |           else if (direction === 'up' && position <= 35) {
50 |             // Update direction for this cell
51 |             const newDirections = [...directions];
52 |             newDirections[index] = 'down';
53 |             setDirections(newDirections);
54 |             return 35;
55 |           }
56 |           // Continue in current direction
57 |           else {
58 |             return direction === 'down' ? position + 0.05 : position - 0.05;
59 |           }
60 |         });
61 |       });
62 |     };
63 |     
64 |     const animationInterval = setInterval(animateBackgrounds, 50); // Update position every 50ms
65 |     
66 |     return () => clearInterval(animationInterval);
67 |   }, [directions]);
68 |   
69 |   // Preload images to ensure smooth transitions
70 |   useEffect(() => {
71 |     heroImages.forEach(imagePath => {
72 |       const img = new Image();
73 |       img.src = imagePath;
74 |     });
75 |   }, []);
76 | 
77 |   return (
78 |     <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
79 |       <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
80 |         <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
81 |           {/* Left side - Text content with solid green background */}
82 |           <div style={{ 
83 |             width: '50%', 
84 |             backgroundColor: '#121b12', 
85 |             display: 'flex', 
86 |             alignItems: 'center', 
87 |             justifyContent: 'center',
88 |             padding: '4rem'
89 |           }}>
90 |             <div style={{ maxWidth: '36rem' }}>
91 |               <h1 style={{ 
92 |                 fontSize: '3.5rem', 
93 |                 fontWeight: 'bold', 
94 |                 marginBottom: '1.5rem', 
95 |                 color: 'white',
96 |                 lineHeight: '1.2'
97 |               }}>
98 |                 Align your digital skills with meaningful portfolio projects
99 |               </h1>
100 |               <p style={{ 
101 |                 fontSize: '1.2rem', 
102 |                 marginBottom: '2.5rem', 
103 |                 color: 'rgba(255, 255, 255, 0.9)',
104 |                 lineHeight: '1.6'
105 |               }}>
106 |                 We match digital volunteers with small- and medium nonprofit organisations in lack of resources.
107 |               </p>
108 |               <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
109 |                 <Link
110 |                   href="#contact"
111 |                   style={{
112 |                     padding: '0.75rem 2rem',
113 |                     backgroundColor: 'white',
114 |                     color: '#121b12',
115 |                     fontWeight: '500',
116 |                     textDecoration: 'none',
117 |                     transition: 'background-color 0.2s'
118 |                   }}
119 |                 >
120 |                   Join the interest list
121 |                 </Link>
122 |                 <Link
123 |                   href="#learn-more"
124 |                   style={{
125 |                     padding: '0.75rem 2rem',
126 |                     border: '1px solid white',
127 |                     color: 'white',
128 |                     fontWeight: '500',
129 |                     textDecoration: 'none',
130 |                     transition: 'background-color 0.2s'
131 |                   }}
132 |                 >
133 |                   Learn More
134 |                 </Link>
135 |               </div>
136 |             </div>
137 |           </div>
138 |           
139 |           {/* Right side - Grid of images */}
140 |           <div style={{ 
141 |             width: '50%', 
142 |             display: 'grid', 
143 |             gridTemplateColumns: 'repeat(2, 1fr)', 
144 |             gridTemplateRows: 'repeat(3, 1fr)', 
145 |             gap: '0.5rem',
146 |             padding: '0.5rem',
147 |             backgroundColor: '#f3f4f6'
148 |           }}>
149 |             {/* Top left image */}
150 |             <div style={{ 
151 |               position: 'relative', 
152 |               overflow: 'hidden', 
153 |               gridColumn: '1 / 2', 
154 |               gridRow: '1 / 2',
155 |               backgroundColor: '#e5e7eb'
156 |             }}>
157 |               <div 
158 |                 style={{ 
159 |                   position: 'absolute',
160 |                   inset: 0,
161 |                   width: '100%',
162 |                   height: '100%',
163 |                   backgroundImage: `url('${gridImages[0]}')`,
164 |                   backgroundSize: 'cover',
165 |                   backgroundPosition: `center ${positions[0]}%`,
166 |                   transition: 'background-position 50ms linear'
167 |                 }}
168 |               />
169 |             </div>
170 |             
171 |             {/* Top right image */}
172 |             <div style={{ 
173 |               position: 'relative', 
174 |               overflow: 'hidden', 
175 |               gridColumn: '2 / 3', 
176 |               gridRow: '1 / 3',
177 |               backgroundColor: '#e5e7eb'
178 |             }}>
179 |               <div 
180 |                 style={{ 
181 |                   position: 'absolute',
182 |                   inset: 0,
183 |                   width: '100%',
184 |                   height: '100%',
185 |                   backgroundImage: `url('${gridImages[1]}')`,
186 |                   backgroundSize: 'cover',
187 |                   backgroundPosition: `center ${positions[1]}%`,
188 |                   transition: 'background-position 50ms linear'
189 |                 }}
190 |               />
191 |             </div>
192 |             
193 |             {/* Middle left image */}
194 |             <div style={{ 
195 |               position: 'relative', 
196 |               overflow: 'hidden', 
197 |               gridColumn: '1 / 2', 
198 |               gridRow: '2 / 3',
199 |               backgroundColor: '#e5e7eb'
200 |             }}>
201 |               <div 
202 |                 style={{ 
203 |                   position: 'absolute',
204 |                   inset: 0,
205 |                   width: '100%',
206 |                   height: '100%',
207 |                   backgroundImage: `url('${gridImages[2]}')`,
208 |                   backgroundSize: 'cover',
209 |                   backgroundPosition: `center ${positions[2]}%`,
210 |                   transition: 'background-position 50ms linear'
211 |                 }}
212 |               />
213 |             </div>
214 |             
215 |             {/* Bottom left image */}
216 |             <div style={{ 
217 |               position: 'relative', 
218 |               overflow: 'hidden', 
219 |               gridColumn: '1 / 2', 
220 |               gridRow: '3 / 4',
221 |               backgroundColor: '#e5e7eb'
222 |             }}>
223 |               <div 
224 |                 style={{ 
225 |                   position: 'absolute',
226 |                   inset: 0,
227 |                   width: '100%',
228 |                   height: '100%',
229 |                   backgroundImage: `url('${gridImages[3]}')`,
230 |                   backgroundSize: 'cover',
231 |                   backgroundPosition: `center ${positions[3]}%`,
232 |                   transition: 'background-position 50ms linear'
233 |                 }}
234 |               />
235 |             </div>
236 |             
237 |             {/* Bottom right image */}
238 |             <div style={{ 
239 |               position: 'relative', 
240 |               overflow: 'hidden', 
241 |               gridColumn: '2 / 3', 
242 |               gridRow: '3 / 4',
243 |               backgroundColor: '#e5e7eb'
244 |             }}>
245 |               <div 
246 |                 style={{ 
247 |                   position: 'absolute',
248 |                   inset: 0,
249 |                   width: '100%',
250 |                   height: '100%',
251 |                   backgroundImage: `url('${gridImages[4]}')`,
252 |                   backgroundSize: 'cover',
253 |                   backgroundPosition: `center ${positions[4]}%`,
254 |                   transition: 'background-position 50ms linear'
255 |                 }}
256 |               />
257 |             </div>
258 |           </div>
259 |         </div>
260 |       </div>
261 |     </div>
262 |   );
263 | };
264 | 
265 | export default Hero; 
```

components/Investment.tsx
```
1 | export default function Investment() {
2 |   return (
3 |     <section className="bg-[#4D5A4A] text-white py-24">
4 |       <div className="container max-w-7xl mx-auto px-8">
5 |         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
6 |           <div>
7 |             <h2 className="text-5xl font-bold mb-6 leading-tight">
8 |               How can we invest in your future?
9 |             </h2>
10 |           </div>
11 |           
12 |           <div>
13 |             <p className="text-lg leading-relaxed">
14 |               To build a robust portfolio, it is essential to gain valuable experience while
15 |               simultaneously expanding your professional network. Engaging in various
16 |               projects will not only showcase your skills but also help you connect with
17 |               industry professionals and peers who can provide support and opportunities
18 |               for collaboration.
19 |             </p>
20 |           </div>
21 |         </div>
22 |       </div>
23 |     </section>
24 |   );
25 | } 
```

components/Marketplace.tsx
```
1 | "use client";
2 | 
3 | import { useEffect, useRef, useState } from 'react';
4 | import mapboxgl from 'mapbox-gl';
5 | import 'mapbox-gl/dist/mapbox-gl.css';
6 | 
7 | // This would normally be in an environment variable
8 | // For demo purposes only - you should use your own token from https://account.mapbox.com/
9 | // Sign up for a free account and replace this with your own token
10 | const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGVtb3VzZXIiLCJhIjoiY2xvNXE2aTNlMGN2aDJrcGR5ZDFkaHl4ZSJ9.2-9gC8yzJLYRDXlvKuYLrw';
11 | 
12 | type ProjectMarker = {
13 |   id: number;
14 |   count: number;
15 |   lat: number;
16 |   lng: number;
17 |   color: string;
18 | };
19 | 
20 | export default function Marketplace() {
21 |   const mapContainer = useRef<HTMLDivElement>(null);
22 |   const map = useRef<mapboxgl.Map | null>(null);
23 |   const [mapLoaded, setMapLoaded] = useState(false);
24 | 
25 |   // Sample project markers for the map
26 |   const projectMarkers: ProjectMarker[] = [
27 |     { id: 1, count: 7, lat: 59.9139, lng: 10.7522, color: '#d63384' }, // Oslo center
28 |     { id: 2, count: 2, lat: 59.9039, lng: 10.7322, color: '#dc3545' },
29 |     { id: 3, count: 3, lat: 59.9239, lng: 10.7622, color: '#dc3545' },
30 |     { id: 4, count: 4, lat: 59.9339, lng: 10.7422, color: '#dc3545' },
31 |     { id: 5, count: 5, lat: 59.9189, lng: 10.7722, color: '#d63384' },
32 |     { id: 6, count: 6, lat: 59.9039, lng: 10.8022, color: '#d63384' },
33 |     { id: 7, count: 7, lat: 59.9439, lng: 10.7922, color: '#d63384' },
34 |     { id: 8, count: 10, lat: 59.9289, lng: 10.7822, color: '#d63384' },
35 |     { id: 9, count: 18, lat: 59.9389, lng: 10.8122, color: '#d63384' },
36 |   ];
37 | 
38 |   useEffect(() => {
39 |     if (!mapContainer.current || map.current) return;
40 | 
41 |     mapboxgl.accessToken = MAPBOX_TOKEN;
42 |     
43 |     map.current = new mapboxgl.Map({
44 |       container: mapContainer.current,
45 |       style: 'mapbox://styles/mapbox/dark-v11',
46 |       center: [10.7522, 59.9139], // Oslo coordinates
47 |       zoom: 12,
48 |     });
49 | 
50 |     map.current.on('load', () => {
51 |       setMapLoaded(true);
52 |     });
53 | 
54 |     return () => {
55 |       map.current?.remove();
56 |     };
57 |   }, []);
58 | 
59 |   // Add markers when map is loaded
60 |   useEffect(() => {
61 |     if (!map.current || !mapLoaded) return;
62 | 
63 |     projectMarkers.forEach((marker) => {
64 |       // Create a DOM element for the marker
65 |       const el = document.createElement('div');
66 |       el.className = 'marker';
67 |       el.style.width = '40px';
68 |       el.style.height = '40px';
69 |       el.style.borderRadius = '50%';
70 |       el.style.backgroundColor = marker.color;
71 |       el.style.display = 'flex';
72 |       el.style.justifyContent = 'center';
73 |       el.style.alignItems = 'center';
74 |       el.style.color = 'white';
75 |       el.style.fontWeight = 'bold';
76 |       el.style.cursor = 'pointer';
77 |       el.innerText = marker.count.toString();
78 | 
79 |       // Add marker to map
80 |       if (map.current) {
81 |         new mapboxgl.Marker(el)
82 |           .setLngLat([marker.lng, marker.lat])
83 |           .addTo(map.current);
84 |       }
85 |     });
86 |   }, [mapLoaded, projectMarkers]);
87 | 
88 |   return (
89 |     <section className="bg-black text-white py-24">
90 |       <div className="container max-w-7xl mx-auto px-8">
91 |         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
92 |           <div>
93 |             <p className="text-sm mb-3">Meaningful marketplace</p>
94 |             <h2 className="text-5xl font-bold mb-8">
95 |               Engaging and meaningful projects
96 |             </h2>
97 |             
98 |             <p className="text-lg mb-10">
99 |               Prompt or filter your way through engaging projects that resonates with your
100 |               personal needs, wants and what you want to achieve.
101 |             </p>
102 |             
103 |             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
104 |               <div>
105 |                 <h3 className="text-2xl font-bold mb-3">Flexible and remote</h3>
106 |                 <p className="text-lg text-gray-300">
107 |                   Choose projects based on your own schedule and contribute from where you
108 |                   feel inspired.
109 |                 </p>
110 |               </div>
111 |               
112 |               <div>
113 |                 <h3 className="text-2xl font-bold mb-3">UNs sustainability goals</h3>
114 |                 <p className="text-lg text-gray-300">
115 |                   Match your skills and interests with small and medium organizations in lack of
116 |                   talented resources.
117 |                 </p>
118 |               </div>
119 |             </div>
120 |           </div>
121 |           
122 |           <div className="relative">
123 |             <div className="bg-gray-900 rounded-lg p-4">
124 |               <div className="mb-4">
125 |                 <div className="mb-4">
126 |                   <label htmlFor="postalCode" className="block text-sm font-medium mb-1">POSTNUMMERE</label>
127 |                   <input 
128 |                     type="text" 
129 |                     id="postalCode"
130 |                     placeholder="Søkeverdier..."
131 |                     className="w-full p-2 bg-gray-800 text-white rounded"
132 |                   />
133 |                 </div>
134 |                 
135 |                 <div>
136 |                   <p className="block text-sm font-medium mb-2">VELG OMRÅDER</p>
137 |                   <div className="grid grid-cols-2 gap-2">
138 |                     {['OSLO', 'ASKER', 'SKI', 'DRAMMEN', 'LØRENSKOG', 'BÆRUM', 'SKEDSMO', 'JESSHEIM', 'KOLBOTN'].map((area) => (
139 |                       <div key={area} className="flex items-center">
140 |                         <input 
141 |                           type="checkbox" 
142 |                           id={area} 
143 |                           className="mr-2"
144 |                         />
145 |                         <label htmlFor={area} className="text-sm">{area}</label>
146 |                       </div>
147 |                     ))}
148 |                   </div>
149 |                 </div>
150 |               </div>
151 |               
152 |               <div 
153 |                 ref={mapContainer} 
154 |                 className="w-full h-[400px] rounded-lg overflow-hidden"
155 |               />
156 |               
157 |               <div className="mt-4">
158 |                 <div className="relative">
159 |                   <input 
160 |                     type="text" 
161 |                     placeholder="Søkested i Norge" 
162 |                     className="w-full p-2 pl-8 bg-gray-800 text-white rounded"
163 |                   />
164 |                   <svg 
165 |                     className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" 
166 |                     fill="none" 
167 |                     stroke="currentColor" 
168 |                     viewBox="0 0 24 24" 
169 |                     xmlns="http://www.w3.org/2000/svg"
170 |                   >
171 |                     <path 
172 |                       strokeLinecap="round" 
173 |                       strokeLinejoin="round" 
174 |                       strokeWidth={2} 
175 |                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
176 |                     />
177 |                   </svg>
178 |                 </div>
179 |               </div>
180 |             </div>
181 |           </div>
182 |         </div>
183 |       </div>
184 |     </section>
185 |   );
186 | } 
```

components/MarketplaceFallback.tsx
```
1 | "use client";
2 | 
3 | import Image from 'next/image';
4 | import { useState, useEffect, useRef } from 'react';
5 | 
6 | export default function MarketplaceFallback() {
7 |   const [selectedJob, setSelectedJob] = useState<string | null>(null);
8 |   const [searchQuery, setSearchQuery] = useState<string>('');
9 |   const [expandedJob, setExpandedJob] = useState<string | null>(null);
10 |   const [isDetailView, setIsDetailView] = useState(false);
11 |   const [scrollPosition, setScrollPosition] = useState(0);
12 |   const [isScrolling, setIsScrolling] = useState(false);
13 |   const [showTooltip, setShowTooltip] = useState(false);
14 |   const scrollRef = useRef<HTMLDivElement>(null);
15 |   const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
16 |   const tooltipTimeout = useRef<NodeJS.Timeout | null>(null);
17 |   
18 |   // Job listings data
19 |   const allJobs = [
20 |     {
21 |       id: 'ux-designer',
22 |       title: 'UX Designer',
23 |       match: '85%',
24 |       description: 'Create user-centered designs for nonprofit websites',
25 |       details: 'View Details',
26 |       skills: ['UI Design', 'User Research', 'Wireframing', 'Prototyping'],
27 |       organization: 'Environmental Defense Fund',
28 |       duration: '2-4 weeks',
29 |       location: 'Remote'
30 |     },
31 |     {
32 |       id: 'graphic-designer',
33 |       title: 'Graphic Designer',
34 |       match: '92%',
35 |       description: 'Design visual assets for environmental campaigns',
36 |       details: 'View Details',
37 |       skills: ['Adobe Creative Suite', 'Illustration', 'Brand Design', 'Typography'],
38 |       organization: 'Ocean Conservation Alliance',
39 |       duration: '1-3 weeks',
40 |       location: 'Remote'
41 |     },
42 |     {
43 |       id: 'frontend-developer',
44 |       title: 'Frontend Developer',
45 |       match: '88%',
46 |       description: 'Build responsive interfaces for community organizations',
47 |       details: 'View Details',
48 |       skills: ['React', 'JavaScript', 'CSS', 'Responsive Design'],
49 |       organization: 'Community Action Network',
50 |       duration: '3-6 weeks',
51 |       location: 'Remote'
52 |     },
53 |     {
54 |       id: 'web-developer',
55 |       title: 'Web Developer',
56 |       match: '85%',
57 |       description: 'Develop websites for social impact organizations',
58 |       details: 'View Details',
59 |       skills: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
60 |       organization: 'Education for All',
61 |       duration: '2-5 weeks',
62 |       location: 'Remote'
63 |     },
64 |     {
65 |       id: 'content-strategist',
66 |       title: 'Content Strategist',
67 |       match: '79%',
68 |       description: 'Plan content for advocacy groups',
69 |       details: 'View Details',
70 |       skills: ['Content Planning', 'SEO', 'Copywriting', 'Social Media'],
71 |       organization: 'Human Rights Watch',
72 |       duration: '2-3 weeks',
73 |       location: 'Remote'
74 |     }
75 |   ];
76 | 
77 |   // Filter jobs based on search query
78 |   const [filteredJobs, setFilteredJobs] = useState(allJobs);
79 | 
80 |   useEffect(() => {
81 |     if (searchQuery.trim() === '') {
82 |       setFilteredJobs(allJobs);
83 |     } else {
84 |       const query = searchQuery.toLowerCase();
85 |       const filtered = allJobs.filter(job => 
86 |         job.title.toLowerCase().includes(query) || 
87 |         job.description.toLowerCase().includes(query) ||
88 |         job.skills.some(skill => skill.toLowerCase().includes(query))
89 |       );
90 |       setFilteredJobs(filtered);
91 |     }
92 |   }, [searchQuery]);
93 | 
94 |   // Handle scroll events with debounce
95 |   const handleScroll = () => {
96 |     if (scrollRef.current) {
97 |       // Update position immediately for smooth UI
98 |       setScrollPosition(scrollRef.current.scrollTop);
99 |       
100 |       // Set scrolling state
101 |       setIsScrolling(true);
102 |       
103 |       // Clear any existing timeout
104 |       if (scrollTimeout.current) {
105 |         clearTimeout(scrollTimeout.current);
106 |       }
107 |       
108 |       // Set a timeout to mark scrolling as finished
109 |       scrollTimeout.current = setTimeout(() => {
110 |         setIsScrolling(false);
111 |       }, 100);
112 |     }
113 |   };
114 | 
115 |   // Handle job click
116 |   const handleJobClick = (jobId: string) => {
117 |     setExpandedJob(jobId);
118 |     setSelectedJob(jobId);
119 |     setIsDetailView(true);
120 |     
121 |     // Reset scroll position when entering detail view
122 |     if (scrollRef.current) {
123 |       scrollRef.current.scrollTop = 0;
124 |     }
125 |   };
126 | 
127 |   // Handle back button click
128 |   const handleBackClick = () => {
129 |     setIsDetailView(false);
130 |     // Small delay to make the transition smoother
131 |     setTimeout(() => {
132 |       setExpandedJob(null);
133 |     }, 100);
134 |   };
135 | 
136 |   // Handle apply button click
137 |   const handleApplyClick = () => {
138 |     setShowTooltip(true);
139 |     
140 |     // Clear any existing timeout
141 |     if (tooltipTimeout.current) {
142 |       clearTimeout(tooltipTimeout.current);
143 |     }
144 |     
145 |     // Hide tooltip after 3 seconds
146 |     tooltipTimeout.current = setTimeout(() => {
147 |       setShowTooltip(false);
148 |     }, 3000);
149 |   };
150 | 
151 |   // Get the selected job data
152 |   const selectedJobData = allJobs.find(job => job.id === expandedJob);
153 | 
154 |   // Determine if header should be compact
155 |   const isHeaderCompact = scrollPosition > 20;
156 | 
157 |   return (
158 |     <section className="bg-black text-white py-24">
159 |       <div className="container max-w-7xl mx-auto px-8">
160 |         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
161 |           <div>
162 |             <p className="text-sm mb-3">Meaningful marketplace</p>
163 |             <h2 className="text-5xl font-bold mb-8">
164 |               Engaging and meaningful projects
165 |             </h2>
166 |             
167 |             <p className="text-lg mb-10">
168 |               Prompt or filter your way through engaging projects that resonates with your
169 |               personal needs, wants and what you want to achieve.
170 |             </p>
171 |             
172 |             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
173 |               <div>
174 |                 <h3 className="text-2xl font-bold mb-3">Flexible and remote</h3>
175 |                 <p className="text-lg text-gray-300">
176 |                   Choose projects based on your own schedule and contribute from where you
177 |                   feel inspired.
178 |                 </p>
179 |               </div>
180 |               
181 |               <div>
182 |                 <h3 className="text-2xl font-bold mb-3">UNs sustainability goals</h3>
183 |                 <p className="text-lg text-gray-300">
184 |                   Match your skills and interests with small and medium organizations in lack of
185 |                   talented resources.
186 |                 </p>
187 |               </div>
188 |             </div>
189 |           </div>
190 |           
191 |           <div className="relative">
192 |             {/* iPhone frame with job browsing */}
193 |             <div className="relative max-w-[320px] mx-auto">
194 |               {/* iPhone outer frame */}
195 |               <div className="relative bg-[#111111] rounded-[40px] overflow-hidden border border-[#333333] shadow-xl" style={{ aspectRatio: '9/19' }}>
196 |                 {/* Notch */}
197 |                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30%] h-[25px] bg-[#111111] rounded-b-[14px] z-10"></div>
198 |                 
199 |                 {/* Screen content */}
200 |                 <div className="relative bg-[#121212] rounded-[32px] overflow-hidden mx-[5px] my-[5px]" style={{ height: 'calc(100% - 10px)' }}>
201 |                   {/* Main content area with scroll */}
202 |                   <div 
203 |                     ref={scrollRef}
204 |                     className="h-full overflow-y-auto hide-scrollbar"
205 |                     onScroll={handleScroll}
206 |                   >
207 |                     {/* Header - collapsible on scroll */}
208 |                     <div 
209 |                       className={`sticky top-0 z-10 bg-[#121212] ${
210 |                         isScrolling ? 'transition-none' : 'transition-all duration-300'
211 |                       }`}
212 |                       style={{
213 |                         paddingLeft: '1.5rem',
214 |                         paddingRight: '1.5rem',
215 |                         paddingTop: isDetailView ? '1rem' : isHeaderCompact ? '1rem' : '2rem',
216 |                         paddingBottom: isDetailView ? '1rem' : isHeaderCompact ? '0.5rem' : '1rem',
217 |                         borderBottom: isDetailView ? '1px solid #2a2a2a' : 'none'
218 |                       }}
219 |                     >
220 |                       {isDetailView ? (
221 |                         <div className="flex items-center">
222 |                           <button 
223 |                             onClick={handleBackClick}
224 |                             className="mr-3 p-1 rounded-full hover:bg-[#2a2a2a] transition-colors"
225 |                           >
226 |                             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
227 |                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
228 |                             </svg>
229 |                           </button>
230 |                           <h3 className="text-white text-lg font-bold">Job Details</h3>
231 |                         </div>
232 |                       ) : (
233 |                         <>
234 |                           <h3 
235 |                             className="text-white font-bold"
236 |                             style={{
237 |                               fontSize: '2rem',
238 |                               lineHeight: '1.2',
239 |                               marginBottom: isHeaderCompact ? '0' : '0.5rem',
240 |                               transform: isHeaderCompact ? 'translateY(0)' : 'translateY(0)',
241 |                               transition: isScrolling ? 'none' : 'all 0.3s ease'
242 |                             }}
243 |                           >
244 |                             Find Your Match
245 |                           </h3>
246 |                           
247 |                           <div 
248 |                             style={{
249 |                               height: isHeaderCompact ? '0' : 'auto',
250 |                               opacity: isHeaderCompact ? 0 : 1,
251 |                               overflow: 'hidden',
252 |                               marginBottom: isHeaderCompact ? '0' : '1rem',
253 |                               transition: isScrolling ? 'none' : 'all 0.3s ease'
254 |                             }}
255 |                           >
256 |                             <p className="text-gray-400 text-lg">
257 |                               Search for opportunities based on your skills
258 |                             </p>
259 |                           </div>
260 |                           
261 |                           <div 
262 |                             className="relative"
263 |                             style={{
264 |                               marginTop: isHeaderCompact ? '0.5rem' : '0',
265 |                               transition: isScrolling ? 'none' : 'all 0.3s ease'
266 |                             }}
267 |                           >
268 |                             <input 
269 |                               type="text" 
270 |                               value={searchQuery}
271 |                               onChange={(e) => setSearchQuery(e.target.value)}
272 |                               placeholder="Search skills, roles..." 
273 |                               className="w-full bg-[#1a1a1a] text-white rounded-lg py-3 px-4 pl-11 border border-[#2a2a2a]"
274 |                             />
275 |                             <div className="absolute inset-y-0 left-4 flex items-center">
276 |                               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
277 |                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
278 |                               </svg>
279 |                             </div>
280 |                           </div>
281 |                         </>
282 |                       )}
283 |                     </div>
284 |                     
285 |                     {/* Content area */}
286 |                     {isDetailView && selectedJobData ? (
287 |                       // Detailed job view
288 |                       <div className="p-6 animate-fadeIn">
289 |                         <div className="mb-4">
290 |                           <div className="flex justify-between items-start mb-3">
291 |                             <h2 className="text-white text-2xl font-bold">{selectedJobData.title}</h2>
292 |                             <span className="text-sm px-3 py-1 rounded bg-[#4d5a4a] text-white">{selectedJobData.match} match</span>
293 |                           </div>
294 |                           <p className="text-gray-300 text-base mb-6">{selectedJobData.description}</p>
295 |                           
296 |                           <div className="space-y-6">
297 |                             <div>
298 |                               <h3 className="uppercase text-sm text-gray-500 mb-2">ORGANIZATION</h3>
299 |                               <p className="text-white text-lg">{selectedJobData.organization}</p>
300 |                             </div>
301 |                             
302 |                             <div>
303 |                               <h3 className="uppercase text-sm text-gray-500 mb-2">DURATION</h3>
304 |                               <p className="text-white text-lg">{selectedJobData.duration}</p>
305 |                             </div>
306 |                             
307 |                             <div>
308 |                               <h3 className="uppercase text-sm text-gray-500 mb-2">LOCATION</h3>
309 |                               <p className="text-white text-lg">{selectedJobData.location}</p>
310 |                             </div>
311 |                             
312 |                             <div>
313 |                               <h3 className="uppercase text-sm text-gray-500 mb-3">SKILLS</h3>
314 |                               <div className="flex flex-wrap gap-2">
315 |                                 {selectedJobData.skills.map((skill, index) => (
316 |                                   <span 
317 |                                     key={index} 
318 |                                     className="text-base px-4 py-2 rounded-full bg-[#1d1d1d] text-white"
319 |                                   >
320 |                                     {skill}
321 |                                   </span>
322 |                                 ))}
323 |                               </div>
324 |                             </div>
325 |                             
326 |                             <div>
327 |                               <h3 className="uppercase text-sm text-gray-500 mb-2">ABOUT THE ROLE</h3>
328 |                               <p className="text-white text-base mb-3">
329 |                                 As a {selectedJobData.title} for {selectedJobData.organization}, you'll be working on impactful projects that make a real difference. This role is perfect for someone who wants to apply their skills in a meaningful way.
330 |                               </p>
331 |                               <p className="text-white text-base">
332 |                                 The project requires expertise in {selectedJobData.skills.join(', ')}. You'll be working remotely with a dedicated team of professionals who are passionate about their mission.
333 |                               </p>
334 |                             </div>
335 |                           </div>
336 |                         </div>
337 |                         
338 |                         <div className="sticky bottom-0 pt-4 pb-2 bg-[#121212]">
339 |                           <div className="relative">
340 |                             <button 
341 |                               onClick={handleApplyClick}
342 |                               className="w-full py-3 bg-[#4d5a4a] text-white rounded-lg text-base font-medium hover:bg-[#5d6a5a] transition-colors flex items-center justify-center"
343 |                             >
344 |                               <span>Join Interest List</span>
345 |                               <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
346 |                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
347 |                               </svg>
348 |                             </button>
349 |                             
350 |                             {/* Tooltip */}
351 |                             {showTooltip && (
352 |                               <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-[90%] bg-[#2a2a2a] text-white p-3 rounded-lg shadow-lg animate-fadeIn">
353 |                                 <p className="text-sm text-center">
354 |                                   Applications aren't open yet. Join our interest list to be notified when this position becomes available.
355 |                                 </p>
356 |                                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-[#2a2a2a]"></div>
357 |                               </div>
358 |                             )}
359 |                           </div>
360 |                           
361 |                           <p className="text-center text-gray-400 text-xs mt-3">
362 |                             Coming soon - Applications opening in Q2 2024
363 |                           </p>
364 |                         </div>
365 |                       </div>
366 |                     ) : (
367 |                       // Job listings view
368 |                       <div>
369 |                         <div className="border-t border-[#1a1a1a]"></div>
370 |                         
371 |                         <div className="p-6 pt-4">
372 |                           <p className="uppercase text-sm tracking-wider mb-4 text-gray-500">MATCHING OPPORTUNITIES</p>
373 |                           
374 |                           {filteredJobs.length === 0 ? (
375 |                             <div className="text-center py-8">
376 |                               <p className="text-gray-400">No matching opportunities found</p>
377 |                               <p className="text-gray-500 text-sm mt-2">Try adjusting your search criteria</p>
378 |                             </div>
379 |                           ) : (
380 |                             <div className="space-y-4">
381 |                               {filteredJobs.map((job) => (
382 |                                 <div 
383 |                                   key={job.id}
384 |                                   className="bg-[#1a1a1a] rounded-lg cursor-pointer transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
385 |                                   onClick={() => handleJobClick(job.id)}
386 |                                 >
387 |                                   <div className="p-5">
388 |                                     <div className="flex justify-between items-start mb-2">
389 |                                       <h4 className="text-white text-xl font-semibold">{job.title}</h4>
390 |                                       <span className="text-sm px-3 py-1 rounded bg-[#4d5a4a] text-white">{job.match} match</span>
391 |                                     </div>
392 |                                     <p className="text-gray-400 text-base mb-3">{job.description}</p>
393 |                                     <p className="text-[#6d8a6d] text-sm font-medium">{job.details}</p>
394 |                                   </div>
395 |                                 </div>
396 |                               ))}
397 |                             </div>
398 |                           )}
399 |                         </div>
400 |                       </div>
401 |                     )}
402 |                   </div>
403 |                 </div>
404 |               </div>
405 |             </div>
406 |           </div>
407 |         </div>
408 |       </div>
409 |     </section>
410 |   );
411 | }
412 | 
413 | // Add this to your globals.css file if not already there
414 | // @keyframes fadeIn {
415 | //   from { opacity: 0; }
416 | //   to { opacity: 1; }
417 | // }
418 | // 
419 | // .animate-fadeIn {
420 | //   animation: fadeIn 0.3s ease-in-out;
421 | // } 
```

components/Pricing.tsx
```
1 | "use client";
2 | 
3 | import { Check } from 'lucide-react';
4 | import Link from 'next/link';
5 | import { cn } from '@/lib/utils';
6 | 
7 | type PricingTier = {
8 |   name: string;
9 |   description: string;
10 |   price: string;
11 |   features: string[];
12 |   cta: string;
13 |   highlighted?: boolean;
14 | };
15 | 
16 | const pricingTiers: PricingTier[] = [
17 |   {
18 |     name: 'Starter',
19 |     description: 'Perfect for individuals and small teams just getting started.',
20 |     price: '$29',
21 |     features: [
22 |       'Basic analytics dashboard',
23 |       'Up to 5 team members',
24 |       'Community forum access',
25 |       'Email support',
26 |     ],
27 |     cta: 'Get Started',
28 |   },
29 |   {
30 |     name: 'Pro',
31 |     description: 'Ideal for growing organizations with specific needs.',
32 |     price: '$79',
33 |     features: [
34 |       'Advanced analytics dashboard',
35 |       'Up to 20 team members',
36 |       'Priority community forum access',
37 |       'Email and chat support',
38 |       'Custom integrations',
39 |       'API access',
40 |     ],
41 |     cta: 'Get Started',
42 |     highlighted: true,
43 |   },
44 |   {
45 |     name: 'Enterprise',
46 |     description: 'For large organizations with complex requirements.',
47 |     price: 'Custom',
48 |     features: [
49 |       'Full-featured analytics dashboard',
50 |       'Unlimited team members',
51 |       'Dedicated community forum',
52 |       '24/7 priority support',
53 |       'Custom integrations',
54 |       'API access',
55 |       'Dedicated account manager',
56 |       'Custom reporting',
57 |     ],
58 |     cta: 'Contact Us',
59 |   },
60 | ];
61 | 
62 | const Pricing = () => {
63 |   return (
64 |     <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
65 |       <div className="container px-4 md:px-6">
66 |         <div className="flex flex-col items-center justify-center space-y-4 text-center">
67 |           <div className="space-y-2">
68 |             <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm">
69 |               Pricing
70 |             </div>
71 |             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
72 |               Simple, Transparent Pricing
73 |             </h2>
74 |             <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
75 |               Choose the plan that&apos;s right for you and start making an impact today.
76 |             </p>
77 |           </div>
78 |         </div>
79 |         <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-8">
80 |           {pricingTiers.map((tier, index) => (
81 |             <div 
82 |               key={index} 
83 |               className={cn(
84 |                 "flex flex-col justify-between rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm",
85 |                 tier.highlighted && "border-black ring-1 ring-black dark:border-white dark:ring-white"
86 |               )}
87 |             >
88 |               <div className="space-y-4">
89 |                 <h3 className="text-xl font-bold">{tier.name}</h3>
90 |                 <p className="text-sm text-gray-500 dark:text-gray-400">{tier.description}</p>
91 |                 <div className="flex items-baseline">
92 |                   <span className="text-3xl font-bold">{tier.price}</span>
93 |                   {tier.price !== 'Custom' && <span className="ml-1 text-gray-500 dark:text-gray-400">/month</span>}
94 |                 </div>
95 |                 <ul className="space-y-2 text-sm">
96 |                   {tier.features.map((feature, featureIndex) => (
97 |                     <li key={featureIndex} className="flex items-center">
98 |                       <Check className="mr-2 h-4 w-4 text-black dark:text-white" />
99 |                       <span>{feature}</span>
100 |                     </li>
101 |                   ))}
102 |                 </ul>
103 |               </div>
104 |               <Link
105 |                 href="#contact"
106 |                 className={cn(
107 |                   "mt-6 inline-flex h-10 w-full items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50",
108 |                   tier.highlighted
109 |                     ? "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
110 |                     : "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
111 |                 )}
112 |               >
113 |                 {tier.cta}
114 |               </Link>
115 |             </div>
116 |           ))}
117 |         </div>
118 |       </div>
119 |     </section>
120 |   );
121 | };
122 | 
123 | export default Pricing; 
```

components/RotatingHero.tsx
```
1 | "use client";
2 | 
3 | import { useState, useEffect } from 'react';
4 | import Link from 'next/link';
5 | 
6 | const heroImages = [
7 |   '/images/low-res/u9299633394_low-res_pixel_art_of_a_group_of_marketing_working_645d03de-ef84-4564-b3a1-0240f51993f6_2.png',
8 |   '/images/low-res/u9299633394_low-res_pixel_art_of_a_small_group_of_social_medi_08396967-7f40-4b24-ab24-0d76e841a003_2.png',
9 |   '/images/low-res/u9299633394_low-res_pixel_art_of_a_small_group_of_social_medi_3837f882-d8ca-4eb7-b5bc-a870b118832a_2.png',
10 |   '/images/low-res/u9299633394_low-res_pixel_art_of_a_two_people_working_on_mark_7171fcaf-5a40-4b3c-9fae-93c8a60ee96c_0.png',
11 |   '/images/low-res/u9299633394_low-res_pixel_art_of_a_diverse_couple_working_fro_b0eb278c-3614-4573-82fc-7a7e21b9bb71_0.png',
12 |   '/images/low-res/u9299633394_low-res_pixel_art_of_a_couple_working_from_a_loun_69354181-1f31-423d-a893-bf5ea21fe88a_1.png',
13 |   '/images/low-res/u9299633394_httpss.mj.runPri0aAeJu7o_Convert_to_low-res_pixel_f100555e-466b-41b1-905f-38c6af11895d_0.png',
14 |   '/images/low-res/u9299633394_httpss.mj.runc0Rd4-sWIyc_Convert_to_low-res_pixel_189a8f90-5ff8-42fa-a70a-ec53d81bbf4c_1.png'
15 | ];
16 | 
17 | // We'll use 6 images for the grid
18 | const gridImages = [
19 |   heroImages[0],
20 |   heroImages[1],
21 |   heroImages[2],
22 |   heroImages[3],
23 |   heroImages[4],
24 |   heroImages[5]
25 | ];
26 | 
27 | export default function RotatingHero() {
28 |   // Track animation positions for each grid cell
29 |   const [positions, setPositions] = useState(Array(6).fill(50));
30 |   const [directions, setDirections] = useState(Array(6).fill('down'));
31 |   
32 |   // Handle slow up and down animation for each grid cell
33 |   useEffect(() => {
34 |     const animateBackgrounds = () => {
35 |       setPositions(prevPositions => {
36 |         return prevPositions.map((position, index) => {
37 |           // Get current direction for this cell
38 |           const direction = directions[index];
39 |           
40 |           // If we're moving down and reached near bottom
41 |           if (direction === 'down' && position >= 65) {
42 |             // Update direction for this cell
43 |             const newDirections = [...directions];
44 |             newDirections[index] = 'up';
45 |             setDirections(newDirections);
46 |             return 65;
47 |           }
48 |           // If we're moving up and reached near top
49 |           else if (direction === 'up' && position <= 35) {
50 |             // Update direction for this cell
51 |             const newDirections = [...directions];
52 |             newDirections[index] = 'down';
53 |             setDirections(newDirections);
54 |             return 35;
55 |           }
56 |           // Continue in current direction
57 |           else {
58 |             return direction === 'down' ? position + 0.05 : position - 0.05;
59 |           }
60 |         });
61 |       });
62 |     };
63 |     
64 |     const animationInterval = setInterval(animateBackgrounds, 50); // Update position every 50ms
65 |     
66 |     return () => clearInterval(animationInterval);
67 |   }, [directions]);
68 |   
69 |   // Preload images to ensure smooth transitions
70 |   useEffect(() => {
71 |     heroImages.forEach(imagePath => {
72 |       const img = new Image();
73 |       img.src = imagePath;
74 |     });
75 |   }, []);
76 |   
77 |   return (
78 |     <div className="flex flex-col md:flex-row h-screen">
79 |       {/* Left side - Text content with solid green background */}
80 |       <div className="w-full md:w-1/2 bg-[#121b12] flex items-center justify-center p-8 md:p-16">
81 |         <div className="max-w-xl">
82 |           <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
83 |             Align your digital skills with meaningful portfolio projects
84 |           </h1>
85 |           <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed">
86 |             We match digital volunteers with small- and medium nonprofit organisations in lack of resources.
87 |           </p>
88 |           <div className="flex flex-wrap gap-4">
89 |             <Link 
90 |               href="#contact" 
91 |               className="px-8 py-3 bg-white text-[#121b12] font-medium hover:bg-white/90 transition-colors"
92 |             >
93 |               Join the interest list
94 |             </Link>
95 |             <Link 
96 |               href="#learn-more" 
97 |               className="px-8 py-3 border border-white text-white font-medium hover:bg-white/10 transition-colors"
98 |             >
99 |               Learn More
100 |             </Link>
101 |           </div>
102 |         </div>
103 |       </div>
104 |       
105 |       {/* Right side - Grid of images */}
106 |       <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-3 gap-2 p-2 bg-gray-100">
107 |         {/* Top left image */}
108 |         <div className="relative overflow-hidden col-span-1 row-span-1 bg-gray-200">
109 |           <div 
110 |             className="absolute inset-0 w-full h-full"
111 |             style={{ 
112 |               backgroundImage: `url('${gridImages[0]}')`,
113 |               backgroundSize: 'cover',
114 |               backgroundPosition: `center ${positions[0]}%`,
115 |               transition: 'background-position 50ms linear'
116 |             }}
117 |           />
118 |         </div>
119 |         
120 |         {/* Top right image */}
121 |         <div className="relative overflow-hidden col-span-1 row-span-2 bg-gray-200">
122 |           <div 
123 |             className="absolute inset-0 w-full h-full"
124 |             style={{ 
125 |               backgroundImage: `url('${gridImages[1]}')`,
126 |               backgroundSize: 'cover',
127 |               backgroundPosition: `center ${positions[1]}%`,
128 |               transition: 'background-position 50ms linear'
129 |             }}
130 |           />
131 |         </div>
132 |         
133 |         {/* Middle left image */}
134 |         <div className="relative overflow-hidden col-span-1 row-span-1 bg-gray-200">
135 |           <div 
136 |             className="absolute inset-0 w-full h-full"
137 |             style={{ 
138 |               backgroundImage: `url('${gridImages[2]}')`,
139 |               backgroundSize: 'cover',
140 |               backgroundPosition: `center ${positions[2]}%`,
141 |               transition: 'background-position 50ms linear'
142 |             }}
143 |           />
144 |         </div>
145 |         
146 |         {/* Bottom left image */}
147 |         <div className="relative overflow-hidden col-span-1 row-span-1 bg-gray-200">
148 |           <div 
149 |             className="absolute inset-0 w-full h-full"
150 |             style={{ 
151 |               backgroundImage: `url('${gridImages[3]}')`,
152 |               backgroundSize: 'cover',
153 |               backgroundPosition: `center ${positions[3]}%`,
154 |               transition: 'background-position 50ms linear'
155 |             }}
156 |           />
157 |         </div>
158 |         
159 |         {/* Bottom right image */}
160 |         <div className="relative overflow-hidden col-span-1 row-span-1 bg-gray-200">
161 |           <div 
162 |             className="absolute inset-0 w-full h-full"
163 |             style={{ 
164 |               backgroundImage: `url('${gridImages[4]}')`,
165 |               backgroundSize: 'cover',
166 |               backgroundPosition: `center ${positions[4]}%`,
167 |               transition: 'background-position 50ms linear'
168 |             }}
169 |           />
170 |         </div>
171 |       </div>
172 |     </div>
173 |   );
174 | } 
```

components/Squad.tsx
```
1 | import Image from 'next/image';
2 | import Link from 'next/link';
3 | 
4 | type TeamMember = {
5 |   name: string;
6 |   role: string;
7 |   mainRole: string;
8 |   background: string;
9 |   image: string;
10 |   linkedin?: string;
11 |   website?: string;
12 | };
13 | 
14 | export default function Squad() {
15 |   const teamMembers: TeamMember[] = [
16 |     {
17 |       name: "Hans Henrik",
18 |       role: "Co-founder CTO and AI",
19 |       mainRole: "Role: Product architecture, AI development and technical growth.",
20 |       background: "Background: AI specialist with focus on generative models and cutting-edge AI tools. Passionate about creating alternative, functional social media platforms. Entrepreneurship experience with multiple tech ventures.",
21 |       image: "/images/hh.jpeg",
22 |       linkedin: "#",
23 |       website: "#"
24 |     },
25 |     {
26 |       name: "Hilde Vanvik",
27 |       role: "Co-founder, chairwoman of the board and NGOs",
28 |       mainRole: "Role: Approval of nonprofits, agreements, communication and development of recruitment flow.",
29 |       background: "Background: Head of communication CARE Norway, Recruitment, CSR Director of THE BODY Shop Norway, board member roles, entrepreneurship, mentoring and multiple voluntary roles.",
30 |       image: "/images/hilde.png",
31 |       linkedin: "#"
32 |     },
33 |     {
34 |       name: "Joakim Brur Engen Johannessen",
35 |       role: "Founder, product and community",
36 |       mainRole: "Role: Product, growth, storyteller and community.",
37 |       background: "Background: Entrepreneurship, Initiator WalkWithImpact, Partner CGO Styrefabrikk, Business development Unioc, Community builder Monument Music, advisory roles, mentoring and multiple voluntary roles.",
38 |       image: "/images/brur.png",
39 |       linkedin: "#",
40 |       website: "#"
41 |     }
42 |   ];
43 | 
44 |   return (
45 |     <section className="bg-black text-white py-24">
46 |       <div className="container max-w-7xl mx-auto px-8">
47 |         <div className="mb-16">
48 |           <p className="text-sm mb-3">Initiators</p>
49 |           <h2 className="text-5xl font-bold mb-6">Founding squad</h2>
50 |           <p className="text-lg max-w-3xl">
51 |             3 steps forward. 1 step back. Repeat. The world could be how we choose to shape it.
52 |           </p>
53 |         </div>
54 |         
55 |         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
56 |           {teamMembers.map((member, index) => (
57 |             <div key={index} className="mb-12">
58 |               <div className="w-full aspect-square mb-6 relative overflow-hidden">
59 |                 <Image 
60 |                   src={member.image} 
61 |                   alt={member.name}
62 |                   fill
63 |                   style={{ objectFit: 'cover' }}
64 |                   className="rounded-sm"
65 |                 />
66 |               </div>
67 |               
68 |               <h3 className="text-xl font-bold">{member.name}</h3>
69 |               <p className="text-gray-400 mb-4">{member.role}</p>
70 |               <p className="text-sm text-gray-300 mb-2">{member.mainRole}</p>
71 |               <p className="text-sm text-gray-300 mb-6">{member.background}</p>
72 |               
73 |               <div className="flex space-x-3">
74 |                 {member.linkedin && (
75 |                   <a href={member.linkedin} className="text-gray-400 hover:text-white" aria-label="LinkedIn">
76 |                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
77 |                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
78 |                     </svg>
79 |                   </a>
80 |                 )}
81 |                 {member.website && (
82 |                   <a href={member.website} className="text-gray-400 hover:text-white" aria-label="Website">
83 |                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
84 |                       <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10 12c0 .685-.07 1.354-.202 2h-3.853c.121-1.283.129-2.621 0-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278 2.435.977 4.397 2.882 5.448 5.278zm-5.554 0h-2.605v-5.658c1.215 1.46 2.117 3.41 2.605 5.658zm-4.605-5.658v5.658h-2.605c.488-2.248 1.39-4.198 2.605-5.658zm0 7.658v4h-2.93c-.146-1.421-.146-2.577 0-4h2.93zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658h2.605zm2 5.658v-5.658h2.605c-.488 2.248-1.39 4.198-2.605 5.658zm0-7.658v-4h2.93c.146 1.421.146 2.577 0 4h-2.93zm-4.711-11.278c-.896 1.527-1.565 3.318-1.948 5.278h-3.5c1.051-2.396 3.013-4.301 5.448-5.278zm-6.087 7.278h3.853c-.121 1.283-.129 2.621 0 4h-3.853c-.132-.646-.202-1.315-.202-2s.07-1.354.202-2zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278-2.435-.977-4.397-2.882-5.448-5.278zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5c-1.051 2.396-3.013 4.301-5.448 5.278z" />
85 |                     </svg>
86 |                   </a>
87 |                 )}
88 |               </div>
89 |             </div>
90 |           ))}
91 |         </div>
92 |       </div>
93 |     </section>
94 |   );
95 | } 
```

components/Testimonials.tsx
```
1 | "use client";
2 | 
3 | type TestimonialItem = {
4 |   quote: string;
5 |   author: string;
6 |   role: string;
7 |   avatar?: string;
8 | };
9 | 
10 | const testimonialItems: TestimonialItem[] = [
11 |   {
12 |     quote: "Impactors has completely transformed how we approach our sustainability initiatives. Their platform is intuitive and the results speak for themselves.",
13 |     author: "Sarah Johnson",
14 |     role: "CEO, GreenTech Solutions",
15 |   },
16 |   {
17 |     quote: "The analytics and insights provided by Impactors have been invaluable for our organization. We've seen a 40% increase in community engagement.",
18 |     author: "Michael Chen",
19 |     role: "Community Director, Urban Renewal",
20 |   },
21 |   {
22 |     quote: "Working with Impactors has been a game-changer for our non-profit. Their team is responsive, and the platform is exactly what we needed.",
23 |     author: "Aisha Patel",
24 |     role: "Founder, Education First",
25 |   },
26 | ];
27 | 
28 | type Testimonial = {
29 |   content: string;
30 |   author: string;
31 |   role: string;
32 | };
33 | 
34 | export default function Testimonials() {
35 |   const testimonials: Testimonial[] = [
36 |     {
37 |       content: "We consider voluntary resources fundamental to our efforts. Maintaining a database of volunteer contributors, where skills, expertise, and availability can be searched, would greatly reduce the time and financial costs associated with recruitment and organizational resources.",
38 |       author: "Trude Jacobsen",
39 |       role: "Founder, Dråpen i havet"
40 |     },
41 |     {
42 |       content: "This platform will simplify the process of identifying the appropriate skills for both small and large tasks, while also making it easier for interested resources to connect with us.",
43 |       author: "Elisabeth Reiersen",
44 |       role: "Managing director, Sabona"
45 |     }
46 |   ];
47 | 
48 |   return (
49 |     <section className="bg-[#4D5A4A] text-white py-24">
50 |       <div className="container max-w-7xl mx-auto px-8">
51 |         <div className="mb-16">
52 |           <h2 className="text-5xl font-bold mb-6">Testimonials</h2>
53 |           <p className="text-lg max-w-3xl">
54 |             From small- and medium grassroots nonprofits in search for new talent
55 |           </p>
56 |         </div>
57 |         
58 |         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
59 |           {testimonials.map((testimonial, index) => (
60 |             <div key={index} className="flex flex-col">
61 |               <div className="flex mb-4">
62 |                 {[...Array(5)].map((_, i) => (
63 |                   <svg 
64 |                     key={i} 
65 |                     className="w-6 h-6 text-white" 
66 |                     fill="currentColor" 
67 |                     viewBox="0 0 24 24"
68 |                   >
69 |                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
70 |                   </svg>
71 |                 ))}
72 |               </div>
73 |               
74 |               <p className="text-lg mb-8">
75 |                 {testimonial.content}
76 |               </p>
77 |               
78 |               <div className="mt-auto flex items-center">
79 |                 <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
80 |                   <svg 
81 |                     className="w-6 h-6 text-gray-500" 
82 |                     fill="currentColor" 
83 |                     viewBox="0 0 24 24"
84 |                   >
85 |                     <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
86 |                   </svg>
87 |                 </div>
88 |                 <div>
89 |                   <p className="font-bold">{testimonial.author}</p>
90 |                   <p className="text-sm text-gray-300">{testimonial.role}</p>
91 |                 </div>
92 |               </div>
93 |             </div>
94 |           ))}
95 |         </div>
96 |       </div>
97 |     </section>
98 |   );
99 | } 
```

components/TypeformSurvey.tsx
```
1 | "use client";
2 | 
3 | import { useEffect, useState } from 'react';
4 | 
5 | interface TypeformSurveyProps {
6 |   isVisible: boolean;
7 | }
8 | 
9 | export default function TypeformSurvey({ isVisible }: TypeformSurveyProps) {
10 |   const [iframeHeight, setIframeHeight] = useState(700);
11 | 
12 |   useEffect(() => {
13 |     // Set iframe height based on viewport height
14 |     const updateHeight = () => {
15 |       const viewportHeight = window.innerHeight;
16 |       setIframeHeight(Math.max(700, viewportHeight * 0.8)); // At least 700px or 80% of viewport
17 |     };
18 | 
19 |     updateHeight();
20 |     window.addEventListener('resize', updateHeight);
21 |     return () => window.removeEventListener('resize', updateHeight);
22 |   }, []);
23 | 
24 |   if (!isVisible) return null;
25 | 
26 |   return (
27 |     <div className="typeform-wrapper">
28 |       <div className="bg-white p-4 rounded-t-lg border-t border-l border-r border-blue-200 flex items-center justify-between">
29 |         <div className="flex items-center">
30 |           <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
31 |             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
32 |           </svg>
33 |           <h4 className="text-lg font-medium text-blue-800">Impactors Community Survey</h4>
34 |         </div>
35 |         <a 
36 |           href="https://pxm2nddova4.typeform.com/to/QQrtYKY5" 
37 |           target="_blank" 
38 |           rel="noopener noreferrer"
39 |           className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
40 |         >
41 |           <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
42 |             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
43 |           </svg>
44 |           Open in new tab
45 |         </a>
46 |       </div>
47 |       <div className="typeform-container rounded-b-lg overflow-hidden border border-blue-200 shadow-lg">
48 |         <iframe
49 |           title="Impactors Survey"
50 |           id="typeform-full"
51 |           width="100%"
52 |           height={`${iframeHeight}px`}
53 |           frameBorder="0"
54 |           allow="camera; microphone; autoplay; encrypted-media; fullscreen; geolocation"
55 |           src="https://pxm2nddova4.typeform.com/to/QQrtYKY5?typeform-embed=embed-fullpage"
56 |           style={{ border: 0 }}
57 |         ></iframe>
58 |       </div>
59 |     </div>
60 |   );
61 | } 
```

components/UpcomingPilot.tsx
```
1 | export default function UpcomingPilot() {
2 |   return (
3 |     <section className="bg-[#4D5A4A] text-white py-24">
4 |       <div className="container max-w-7xl mx-auto px-8">
5 |         <div className="mb-16">
6 |           <p className="text-sm mb-3">Upcoming pilot</p>
7 |           <h2 className="text-5xl font-bold mb-8">
8 |             Would you like to see this happen?
9 |           </h2>
10 |           
11 |           <p className="text-lg max-w-3xl">
12 |             Note. Prior to developing the technical and gamified platform - we aim to understand how to
13 |             perform various parts manually, before building it.
14 |           </p>
15 |         </div>
16 |         
17 |         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
18 |           {/* Step 1 */}
19 |           <div>
20 |             <h3 className="text-xl font-bold mb-2">Step 1</h3>
21 |             <h4 className="text-2xl font-bold mb-4">Let's validate demand</h4>
22 |             <p className="text-base text-gray-200">
23 |               Join the waiting list and assist us in validating the demand for a gamified and
24 |               engaging and volunteering platform.
25 |             </p>
26 |           </div>
27 |           
28 |           {/* Step 2 */}
29 |           <div>
30 |             <h3 className="text-xl font-bold mb-2">Step 2</h3>
31 |             <h4 className="text-2xl font-bold mb-4">Can we gather insight?</h4>
32 |             <p className="text-base text-gray-200">
33 |               Assist in collecting fundamental insights that will be utilized for grant proposals,
34 |               product creation, marketing efforts and investor conversations.
35 |             </p>
36 |           </div>
37 |           
38 |           {/* Step 3 */}
39 |           <div>
40 |             <h3 className="text-xl font-bold mb-2">Step 3</h3>
41 |             <h4 className="text-2xl font-bold mb-4">Join the first pilot?</h4>
42 |             <p className="text-base text-gray-200">
43 |               Participate in the upcoming pilot and level up your future self, increase network,
44 |               resource-limited grassroots nonprofits, and the advancement of the platform.
45 |             </p>
46 |           </div>
47 |           
48 |           {/* Step 4 */}
49 |           <div>
50 |             <h3 className="text-xl font-bold mb-2">Step 4</h3>
51 |             <h4 className="text-2xl font-bold mb-4">Develop game</h4>
52 |             <p className="text-base text-gray-200">
53 |               Keep leveling up your personal portfolio by continuous working on skills, receive
54 |               constructive references, and connect with fellow creative individuals.
55 |             </p>
56 |           </div>
57 |         </div>
58 |       </div>
59 |     </section>
60 |   );
61 | } 
```

components/Vision.tsx
```
1 | import Image from 'next/image';
2 | 
3 | export default function Vision() {
4 |   return (
5 |     <section className="bg-black text-white py-24">
6 |       <div className="container max-w-7xl mx-auto px-8">
7 |         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
8 |           <div>
9 |             <p className="text-sm mb-3">Our vision</p>
10 |             <h2 className="text-5xl font-bold mb-8">Gamified volunteering</h2>
11 |             
12 |             <p className="text-lg mb-6">
13 |               Volunteering is a powerful force in addressing pressing social, economic and
14 |               environmental challenges.
15 |             </p>
16 |             
17 |             <p className="text-lg mb-6">
18 |               We believe in democratizing access and lowering the threshold to engaging
19 |               volunteer opportunities - by bridging the gap between grassroots nonprofits
20 |               in lack of resources, and talented volunteers eager to make a difference.
21 |             </p>
22 |             
23 |             <p className="text-lg mb-16">
24 |               From anywhere, at any time.
25 |             </p>
26 |             
27 |             <div className="grid grid-cols-2 gap-12">
28 |               <div>
29 |                 <h3 className="text-5xl font-bold mb-2">860 million</h3>
30 |                 <p className="text-sm text-gray-300">
31 |                   People volunteer at least once a month (2024)
32 |                 </p>
33 |               </div>
34 |               
35 |               <div>
36 |                 <h3 className="text-5xl font-bold mb-2">15%</h3>
37 |                 <p className="text-sm text-gray-300">
38 |                   Of the global population aged 15 years or older (2024)
39 |                 </p>
40 |               </div>
41 |             </div>
42 |           </div>
43 |           
44 |           <div className="relative">
45 |             <Image 
46 |               src="/images/brur.png"
47 |               alt="Smiling volunteer"
48 |               width={600}
49 |               height={600}
50 |               className="rounded-md w-full h-auto"
51 |               priority
52 |             />
53 |           </div>
54 |         </div>
55 |       </div>
56 |     </section>
57 |   );
58 | } 
```

components/WorkOpportunities.tsx
```
1 | import Image from 'next/image';
2 | 
3 | export default function WorkOpportunities() {
4 |   return (
5 |     <section className="bg-black text-white py-24">
6 |       <div className="container max-w-7xl mx-auto px-8">
7 |         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
8 |           <div className="relative order-2 md:order-1">
9 |             <div className="relative w-full h-[600px]">
10 |               <Image 
11 |                 src="/images/group2.jpeg"
12 |                 alt="People working together in a bright space"
13 |                 fill
14 |                 style={{ 
15 |                   objectFit: 'cover',
16 |                   objectPosition: 'center 60%', // Show more of the bottom part
17 |                   transform: 'scaleX(-1)' // Flip horizontally
18 |                 }}
19 |                 className="rounded-md"
20 |                 priority
21 |               />
22 |             </div>
23 |           </div>
24 |           
25 |           <div className="order-1 md:order-2">
26 |             <p className="text-sm mb-3">Increased position in the marketplace</p>
27 |             <h2 className="text-5xl font-bold mb-8">
28 |               Attract work opportunities
29 |             </h2>
30 |             
31 |             <p className="text-lg mb-10">
32 |               We connect your skills, interests, needs and wants with existing companies
33 |               looking for passionate and skilled talent
34 |             </p>
35 |             
36 |             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
37 |               <div>
38 |                 <h3 className="text-2xl font-bold mb-3">Freelance projects</h3>
39 |                 <p className="text-lg text-gray-300">
40 |                   Increase your relevance for small and medium freelance opportunities.
41 |                 </p>
42 |               </div>
43 |               
44 |               <div>
45 |                 <h3 className="text-2xl font-bold mb-3">Part-time positions</h3>
46 |                 <p className="text-lg text-gray-300">
47 |                   Connect with professionals and mentors from startup and scale up companies.
48 |                 </p>
49 |               </div>
50 |             </div>
51 |           </div>
52 |         </div>
53 |       </div>
54 |     </section>
55 |   );
56 | } 
```

app/api/check-mailchimp/route.ts
```
1 | import { NextResponse } from 'next/server';
2 | import mailchimp from '@mailchimp/mailchimp_marketing';
3 | 
4 | // Configure Mailchimp
5 | mailchimp.setConfig({
6 |   apiKey: 'f6896ac0ad9ef6d1403dd6bd47b629c0-us4',
7 |   server: 'us4',
8 | });
9 | 
10 | export async function GET() {
11 |   try {
12 |     // @ts-ignore - The type definitions are incomplete
13 |     const response = await mailchimp.ping.get();
14 |     
15 |     // Get all lists
16 |     // @ts-ignore - The type definitions are incomplete
17 |     const listsResponse = await mailchimp.lists.getAllLists();
18 |     
19 |     return NextResponse.json({
20 |       ping: response,
21 |       lists: listsResponse.lists?.map((list: any) => ({
22 |         id: list.id,
23 |         name: list.name,
24 |         memberCount: list.stats?.member_count
25 |       })) || []
26 |     });
27 |   } catch (error: any) {
28 |     console.error('Mailchimp error:', error);
29 |     
30 |     return NextResponse.json({
31 |       error: error.message || 'Unknown error',
32 |       status: error.status,
33 |       response: error.response?.text
34 |     }, { status: 500 });
35 |   }
36 | } 
```

app/api/get-audience/route.ts
```
1 | import { NextResponse } from 'next/server';
2 | import mailchimp from '@mailchimp/mailchimp_marketing';
3 | 
4 | // Configure Mailchimp with your API key
5 | mailchimp.setConfig({
6 |   apiKey: 'f6896ac0ad9ef6d1403dd6bd47b629c0-us4',
7 |   server: 'us4',
8 | });
9 | 
10 | export async function GET() {
11 |   try {
12 |     // Get all lists/audiences
13 |     // @ts-ignore - The type definitions are incomplete
14 |     const response = await mailchimp.lists.getList();
15 |     
16 |     return NextResponse.json(
17 |       { 
18 |         success: true,
19 |         lists: response
20 |       },
21 |       { status: 200 }
22 |     );
23 |   } catch (error: any) {
24 |     console.error('Mailchimp error:', error);
25 |     
26 |     return NextResponse.json(
27 |       { error: 'Failed to fetch Mailchimp audiences' },
28 |       { status: 500 }
29 |     );
30 |   }
31 | } 
```

app/api/init-db/route.ts
```
1 | import { NextResponse } from 'next/server';
2 | import { pool } from '@/lib/db';
3 | 
4 | export async function GET() {
5 |   try {
6 |     console.log('Starting database initialization...');
7 |     const client = await pool.connect();
8 |     
9 |     try {
10 |       // Begin transaction
11 |       await client.query('BEGIN');
12 |       
13 |       // Create subscribers table if it doesn't exist
14 |       await client.query(`
15 |         CREATE TABLE IF NOT EXISTS subscribers (
16 |           id SERIAL PRIMARY KEY,
17 |           email VARCHAR(255) UNIQUE NOT NULL,
18 |           created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
19 |           status VARCHAR(50) DEFAULT 'active'
20 |         );
21 |       `);
22 |       
23 |       // Check if the table was created successfully
24 |       const tableCheck = await client.query(`
25 |         SELECT EXISTS (
26 |           SELECT FROM information_schema.tables 
27 |           WHERE table_schema = 'public'
28 |           AND table_name = 'subscribers'
29 |         );
30 |       `);
31 |       
32 |       const tableExists = tableCheck.rows[0].exists;
33 |       
34 |       // Commit transaction
35 |       await client.query('COMMIT');
36 |       
37 |       return NextResponse.json({
38 |         success: true,
39 |         message: 'Database initialized successfully',
40 |         tableExists,
41 |         timestamp: new Date().toISOString()
42 |       });
43 |     } catch (error: any) {
44 |       // Rollback transaction on error
45 |       await client.query('ROLLBACK');
46 |       throw error;
47 |     } finally {
48 |       client.release();
49 |     }
50 |   } catch (error: any) {
51 |     console.error('Error initializing database:', error);
52 |     
53 |     return NextResponse.json({
54 |       success: false,
55 |       error: error.message || 'Unknown error',
56 |       timestamp: new Date().toISOString()
57 |     }, { status: 500 });
58 |   }
59 | } 
```

app/api/subscribe/route.ts
```
1 | import { NextResponse } from 'next/server';
2 | import { addSubscriber, initializeDatabase } from '@/lib/db';
3 | 
4 | // Initialize the database when the API is first loaded
5 | initializeDatabase().catch(console.error);
6 | 
7 | export async function POST(request: Request) {
8 |   try {
9 |     // Log the request for debugging
10 |     console.log('Received subscription request');
11 |     
12 |     const { email } = await request.json();
13 |     console.log('Email received:', email);
14 | 
15 |     if (!email || !email.includes('@')) {
16 |       console.log('Invalid email format');
17 |       return NextResponse.json(
18 |         { error: 'Please provide a valid email address' },
19 |         { status: 400 }
20 |       );
21 |     }
22 | 
23 |     try {
24 |       // Store the email in the database
25 |       console.log('Attempting to add subscriber to database');
26 |       const subscriber = await addSubscriber(email);
27 |       console.log('Subscriber added successfully:', subscriber);
28 |       
29 |       return NextResponse.json(
30 |         { 
31 |           success: true, 
32 |           message: 'Email subscribed successfully',
33 |           subscriber
34 |         },
35 |         { status: 200 }
36 |       );
37 |     } catch (error: any) {
38 |       // Handle duplicate email error
39 |       if (error.code === '23505') { // PostgreSQL unique violation error code
40 |         console.log('Duplicate email error:', email);
41 |         return NextResponse.json(
42 |           { error: 'You are already subscribed to our mailing list.' },
43 |           { status: 400 }
44 |         );
45 |       }
46 |       
47 |       console.error('Database error:', error);
48 |       throw error;
49 |     }
50 |   } catch (error: any) {
51 |     console.error('Subscription error:', error);
52 |     
53 |     return NextResponse.json(
54 |       { 
55 |         error: 'Failed to subscribe. Please try again later.',
56 |         details: error.message || 'Unknown error'
57 |       },
58 |       { status: 500 }
59 |     );
60 |   }
61 | } 
```

app/api/subscribers/route.ts
```
1 | import { NextResponse } from 'next/server';
2 | import { getSubscribers } from '@/lib/db';
3 | 
4 | // Basic authentication middleware
5 | function isAuthenticated(request: Request) {
6 |   // Get the Authorization header
7 |   const authHeader = request.headers.get('Authorization');
8 |   
9 |   if (!authHeader || !authHeader.startsWith('Basic ')) {
10 |     return false;
11 |   }
12 |   
13 |   // Decode the base64 credentials
14 |   try {
15 |     const base64Credentials = authHeader.split(' ')[1];
16 |     const credentials = atob(base64Credentials);
17 |     const [username, password] = credentials.split(':');
18 |     
19 |     // Check against environment variables or hardcoded values for demo
20 |     // In production, use environment variables
21 |     const expectedUsername = process.env.ADMIN_USERNAME || 'admin';
22 |     const expectedPassword = process.env.ADMIN_PASSWORD || 'impactors2024';
23 |     
24 |     return username === expectedUsername && password === expectedPassword;
25 |   } catch (error) {
26 |     console.error('Authentication error:', error);
27 |     return false;
28 |   }
29 | }
30 | 
31 | export async function GET(request: Request) {
32 |   // Check authentication
33 |   if (!isAuthenticated(request)) {
34 |     return new Response('Unauthorized', {
35 |       status: 401,
36 |       headers: {
37 |         'WWW-Authenticate': 'Basic realm="Subscribers Admin", charset="UTF-8"'
38 |       }
39 |     });
40 |   }
41 |   
42 |   try {
43 |     const subscribers = await getSubscribers();
44 |     
45 |     return NextResponse.json({ 
46 |       success: true,
47 |       count: subscribers.length,
48 |       subscribers
49 |     });
50 |   } catch (error: any) {
51 |     console.error('Error fetching subscribers:', error);
52 |     
53 |     return NextResponse.json(
54 |       { 
55 |         error: 'Failed to fetch subscribers',
56 |         details: error.message || 'Unknown error'
57 |       },
58 |       { status: 500 }
59 |     );
60 |   }
61 | } 
```

app/api/test-db/route.ts
```
1 | import { NextResponse } from 'next/server';
2 | import { testConnection, pool } from '@/lib/db';
3 | 
4 | export async function GET() {
5 |   try {
6 |     // Test the database connection
7 |     const connectionSuccessful = await testConnection();
8 |     
9 |     // Get the connection string (with password masked)
10 |     const connectionString = process.env.DATABASE_URL || '';
11 |     const maskedConnectionString = connectionString.replace(/:[^:@]*@/, ':****@');
12 |     
13 |     // Get pool status
14 |     const poolStatus = {
15 |       totalCount: pool.totalCount,
16 |       idleCount: pool.idleCount,
17 |       waitingCount: pool.waitingCount
18 |     };
19 |     
20 |     return NextResponse.json({
21 |       success: connectionSuccessful,
22 |       message: connectionSuccessful ? 'Database connection successful' : 'Database connection failed',
23 |       connectionString: maskedConnectionString,
24 |       poolStatus,
25 |       timestamp: new Date().toISOString()
26 |     });
27 |   } catch (error: any) {
28 |     console.error('Error testing database connection:', error);
29 |     
30 |     return NextResponse.json({
31 |       success: false,
32 |       error: error.message || 'Unknown error',
33 |       timestamp: new Date().toISOString()
34 |     }, { status: 500 });
35 |   }
36 | } 
```

app/api/test-subscribe/route.ts
```
1 | import { NextResponse } from 'next/server';
2 | import { pool } from '@/lib/db';
3 | 
4 | export async function GET(request: Request) {
5 |   // Get email from query parameter
6 |   const { searchParams } = new URL(request.url);
7 |   const email = searchParams.get('email');
8 |   
9 |   if (!email) {
10 |     return NextResponse.json({
11 |       success: false,
12 |       error: 'Email parameter is required',
13 |       usage: 'Add ?email=your@email.com to the URL'
14 |     }, { status: 400 });
15 |   }
16 |   
17 |   try {
18 |     const client = await pool.connect();
19 |     
20 |     try {
21 |       // Try to insert the email
22 |       const result = await client.query(
23 |         'INSERT INTO subscribers (email) VALUES ($1) RETURNING id, email, created_at',
24 |         [email]
25 |       );
26 |       
27 |       return NextResponse.json({
28 |         success: true,
29 |         message: 'Test subscriber added successfully',
30 |         subscriber: result.rows[0],
31 |         timestamp: new Date().toISOString()
32 |       });
33 |     } catch (error: any) {
34 |       // Handle duplicate email error
35 |       if (error.code === '23505') { // PostgreSQL unique violation error code
36 |         return NextResponse.json({
37 |           success: false,
38 |           error: 'Email already exists in the database',
39 |           email
40 |         }, { status: 400 });
41 |       }
42 |       
43 |       throw error;
44 |     } finally {
45 |       client.release();
46 |     }
47 |   } catch (error: any) {
48 |     console.error('Error in test subscription:', error);
49 |     
50 |     return NextResponse.json({
51 |       success: false,
52 |       error: error.message || 'Unknown error',
53 |       timestamp: new Date().toISOString()
54 |     }, { status: 500 });
55 |   }
56 | } 
```
