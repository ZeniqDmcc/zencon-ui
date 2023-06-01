const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'primary': ['SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ["Open Sans"],
      'secondary': ['SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'Hanson': ['hanson', 'sans-serif'],
      'HeronSans': ['heronSans', 'sans-serif'],
      'HeronSansCond': ['herosanscond', 'sans-serif'],
    },
    screens: {
      "xs": "400px",
      // 'smol': {'max': '850px'},
      'smol': {'max': '1170px'},
      '1700px': {'max': '1700px'},
      '1600px': {'max': '1600px'},
      '1440px': {'max': '1440px'},
      'laptop': {'max':'1468px'},
      '1280px': {'max':'1280px'},
      '1024px': {'max':'1024px'},
      '940px': {'max':'940px'},
      '800px': {'max':'800px'},
      '767px': {'max':'767px'},
      '640px': {'max':'640px'},
      '480px': {'max':'480px'},
      '380px': {'max':'380px'},
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "primary-btn": "#FFDC80",
        "footerBg": "#0A1717",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
        'heroBg': "url('./public/assets/projects_hero_bg.png')"
      },
      aspectRatio: {
        '1.1/1': '1.1 / 1'
      },
      zIndex: {
        'behind': '-1',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-home': {
          'background-image': "url('./assets/Assets_home/bg-home-new.jpg')",
        },
        '.bg-mobile': {
          'background-image': "url('./assets/Assets_home/mobile 480.png')",
          'backgroundRepeat': 'no-repeat',
          'background-position-x': "center",
        },
        '.rio023': {
          'background-image': "url('./assets/map.svg')",
          'background-position-x': "center",
        },
        '.past__edition__1': {
          'background-image': "url('./assets/Assets_home/pastEdition1.png')",
        },
        '.past__edition__2': {
          'background-image': "url('./assets/Assets_home/pastEdition2.png')",
        },
        '.past__edition__3': {
          'background-image': "url('./assets/Assets_home/pastEdition3.png')",
        },
        '.vanue1': {
          'background-image': "url('./assets/Assets_home/venue1.png')",
        },
        '.vanue2': {
          'background-image': "url('./assets/Assets_home/venue2.png')",
        },
        '.vanue3': {
          'background-image': "url('./assets/Assets_home/venue3.png')",
        },
        '.banner-right-bg': {
          'backgroundImage': "url('./assets/Assets_home/SideBannerImage.svg')",
          'backgroundPositionX': 'right 0',
          'backgroundPositionY': '50px',
          'backgroundRepeat': 'no-repeat'
        },
        '.rio-left-bg': {
          'backgroundImage': "url('./assets/Assets_home/sideRio023.svg')",
          'backgroundPositionX': 'left',
          'backgroundRepeat': 'no-repeat'
        },
        '.bg-join': {
          'backgroundImage': "url('./assets/Assets_home/sideWhatDoNeed.svg')",
          'backgroundPositionX': 'left',
          'backgroundRepeat': 'no-repeat',
          'backgroundPositionY': '150px'
        },
        '.bg-pastEvent': {
          'backgroundImage': "url('./assets/Assets_home/SideBannerImage.svg')",
          'backgroundPositionX': 'right',
          'backgroundRepeat': 'no-repeat',
          'backgroundPositionY': '300px'
        },
        '.bg-ecoSystem': {
          'backgroundImage': "url('./assets/Assets_home/dash_big.svg')",
          'backgroundPositionX': '',
          'backgroundRepeat': 'no-repeat',
        },
        '.bg-development': {
          'backgroundImage': "url('./assets/Assets_home/sideDevelopment.svg')",
          'backgroundPositionX': 'right',
          'backgroundRepeat': 'no-repeat',
        },
        '.bg-zencon68': {
          'backgroundImage': "url('./assets/Assets_home/sideChallenges.svg')",
          'backgroundPositionX': 'right',
          'backgroundRepeat': 'no-repeat',
        },
        '.bg-aboutZeniq': {
          'backgroundImage': "url('./assets/Assets_home/sideAboutZeniq.svg')",
          'backgroundPositionX': 'left',
          'backgroundRepeat': 'no-repeat',
        },
        '.bg-moreInfo': {
          'backgroundImage': "url('./assets/Assets_home/sidebox_white.svg'), url('./assets/Assets_home/rio023vertical.svg')",
          'backgroundPositionX': 'right, right 100px',
          'backgroundPositionY': 'bottom 40%, bottom 15%',
          'backgroundRepeat': 'no-repeat',
        },
        '.div-with-dots::before' : {
          'content': 'aaaaaaaaaaaaaaaaaa',
          'display': 'block',
          'list-style-type': 'disc',
          'margin-left': '10px',
        },
        // '.bg-gradient': {
        //   'backgroundImage': "url('./assets/Assets_home/bg_grad.svg')",
        //   'backgroundPosition': 'center',
        //   'backgroundRepeat': 'no-repeat',
        //   'backgroundSize': '100%'
        // },
      })
    }
  ],
};
