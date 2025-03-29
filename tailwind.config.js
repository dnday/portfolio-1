// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // pastikan ini sesuai dengan struktur proyek kamu
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],  // Menambahkan font Inter sebagai default
        },
      },
    },
    plugins: [],
  };
  