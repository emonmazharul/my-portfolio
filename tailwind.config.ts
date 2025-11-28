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
       colors: {
          primary: "#14b8a6",     // teal-500
          primaryDark: "#0d9488", // teal-600
          background: "#0a0a0a",
          surface: "#111",
        }
          },
  },
  plugins: [],
};

export default config;