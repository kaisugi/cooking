/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'accent-blue': '#2563eb',
        'accent-green': '#22c55e',
        'text-dark': '#2c3e50',
        'text-muted': '#1e293b',
      }
    },
  },
  plugins: [],
}
