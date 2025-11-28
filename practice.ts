// tailwind.config.ts
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    // Include all files that use Tailwind classes (adjust these paths as needed)
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      // 1. Custom Font Families
      fontFamily: {
        // Montserrat for Headings
        heading: ['Montserrat', ...defaultTheme.fontFamily.sans],
        // Source Sans Pro for Body Text
        body: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
      // 2. Custom Color Palette
      colors: {
        'electric-teal': '#00CED1', // Your suggested primary accent color
        'off-white': '#F5F5F5',    // Suggested background color
      },
    },
  },
  plugins: [],
};

export default config;