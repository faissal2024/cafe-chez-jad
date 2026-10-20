import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { cream: "#FAF5EA", ivory: "#FFFCF5", beige: "#E8DCC4", caramel: "#B07A3F", coffee: "#3B2A20", ink: "#141110" },
    fontFamily: { display: ["var(--font-display)", "Georgia", "serif"], body: ["var(--font-body)", "system-ui", "sans-serif"], arabic: ["var(--font-arabic)", "system-ui", "sans-serif"] },
  } },
  plugins: [],
};
export default config;
