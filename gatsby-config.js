'use strict'

module.exports = {
  siteMetadata: {
    title: 'Chonnipa K.',
    description: 'My resume'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Oswald:400,600,700', 'Lato:400,700']
      }
    }
  ]
}
