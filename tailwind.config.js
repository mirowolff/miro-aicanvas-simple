/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Miro design tokens will be added here
        'miro-primary': 'var(--background-primary-prominent)',
        'miro-bg-layout': 'var(--background-neutrals-layout)',
        'miro-text': 'var(--text-neutrals)',
        'miro-text-subtle': 'var(--text-neutrals-subtle)',
        'miro-border': 'var(--border-neutrals)',
      },
      spacing: {
        'miro-topbar-height': '48px',
        'miro-toolbar-width': '48px',
      },
      borderRadius: {
        'miro': '8px',
      },
      boxShadow: {
        'miro-card': '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}