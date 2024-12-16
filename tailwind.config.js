/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "778px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        navColor: "#505F98",
        titleColor: "#37447E",
        bgBlue: "#111B47",
        infiniteNight: "#091133",
        marvellous: "#6F7CB2",
        creekFals: "#5D6970",
        footerBg: "#E7ECFF",
        velvetRobe: "#929ECC",
        iconColor: "#B0B8BC",
      },
      backgroundImage: {
        "contact-bg": "url('assets/Rectangle.png')",
      },
    },
  },
  plugins: [],
};
