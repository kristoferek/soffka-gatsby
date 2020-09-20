const path = require('path');

module.exports = {
  siteTitle: 'Soffka - porady na zdrady',
  siteTitleShort: 'Soffka',
  siteDescription:
    'Wsparcie psychologiczne przy niewierności, rozstaniu, naprawie związku.',
  siteUrl: 'https://soffka.pl',
  themeColor: '#fff',
  backgroundColor: '#004715',
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: 'gatsbyjs',
    fbAppId: '966242223397117',
  },
};
