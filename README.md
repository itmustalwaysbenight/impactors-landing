# Impactors Landing Page

A modern, responsive landing page for Impactors, a startup focused on making a positive impact on the world through innovative solutions.

## Features

- Responsive design that works on all devices
- Modern UI with Tailwind CSS
- Smooth animations and transitions
- Accessible components
- Dark mode support

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/impactors-landing-page.git
cd impactors-landing-page
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
impactors-landing-page/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── Contact.tsx       # Contact section
│   ├── Features.tsx      # Features section
│   ├── Footer.tsx        # Footer component
│   ├── Header.tsx        # Header component
│   ├── Hero.tsx          # Hero section
│   ├── Pricing.tsx       # Pricing section
│   └── Testimonials.tsx  # Testimonials section
├── lib/                  # Utility functions
│   └── utils.ts          # Utility functions
├── public/               # Static assets
│   └── images/           # Images
└── ...                   # Other configuration files
```

## Customization

- Update the content in each component to match your brand
- Replace placeholder images in the `public/images` directory
- Adjust colors in `globals.css` to match your brand colors

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fimpactors-landing-page)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
