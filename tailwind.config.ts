import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        primary: "#00033A",
        secondary: "#081FA0",
        tertiary: "#126FFF",
        "light-800": "#272727",
        "light-1": "#F7F7F4",
        "light-100": "#E4E4E4",
        "violet-900": "#7729F4",
        "violet-600": "#6918CD",
        "primary-positive": "#126FFF",
        "credential-black-accent": "#00033A",
        "gray-light": "#F8F9FA",
        "gray-dark": "#343A40",
      },
      fontSize: {
        twoxs: ["1rem", "1.5rem"],
        fourxs: ["0.875rem", "1rem"],
        fivexs: ["0.75rem", "1rem"],
      },
    },
  },
  plugins: [],
};
export default config;
