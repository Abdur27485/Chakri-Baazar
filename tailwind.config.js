const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "HomeBanner": "url('https://st4.depositphotos.com/14101486/28582/i/450/depositphotos_285825536-stock-photo-human-resources-crm-and-recruitment.jpg')"
      }
    },
  },
  plugins: [],
});
