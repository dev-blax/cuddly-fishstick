//const withMT = require("@material-tailwind/react/utils/withMT");
const withMT = require('@material-tailwind/react/utils/withMT')
 
module.exports = withMT({
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      'dtbi-orange': '#f9a72b',
      'dtbi-blue': '#161d4c'
    },
  },
  plugins: [
    require('preline/plugin')
  ],
});