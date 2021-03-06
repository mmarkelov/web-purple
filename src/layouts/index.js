import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { Flex } from 'grid-styled'
import { YMInitializer } from 'react-yandex-metrika'

import faviconICO from '../../static/favicon/favicon.ico'
import appleFavicon from '../../static/favicon/apple-touch-icon.png'
import favicon16 from '../../static/favicon/favicon-16x16.png'
import favicon32 from '../../static/favicon/favicon-32x32.png'
import safariPinnedTab from '../../static/favicon/safari-pinned-tab.svg'
// import manifest from '../../static/favicon/manifest.json'

import { sizes } from '../utils/css-utils'
import Header from '../components/header'
import Footer from '../components/footer'

const theme = {
  grape: '#432867',
  warmGrey: '#a1a1a1',
  greyishBrown: '#545454',
  lipstick: '#e62270',
  vividPurple: '#9012fe',
  vividPurpleTwo: '#9013fe',
  cerise: '#ee2a7b',
  warmPurple: '#662d91',
  rouge: '#b21d3d',
  rosePink: '#f290b7',
  liliac: '#c788fe',

  breakpoints: Object.values(sizes)
    .slice(1)
    .map(s => `${s / 16}em`),
}

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Flex flexDirection="column">
      <Helmet>
        <title>WebPurple</title>
        <link
          href="https://fonts.googleapis.com/css?family=Oxygen|Rubik"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href={appleFavicon} />
        <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
        <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
        {/*<link rel="manifest" href={manifest} />*/}
        <link rel="mask-icon" href={safariPinnedTab} color="#5bbad5" />
        <link rel="shortcut icon" href={faviconICO} />
        <meta name="theme-color" content="#ffffff" />
        <script type="application/ld+json">
          {`
          {
            "@context": "http://www.schema.org",
            "@type": "Organization",
            "name": "WebPurple",
            "url": "http://www.webpurple.net/",
            "description": "Ryazan front-end community"
          }
        `}
        </script>
      </Helmet>
      {process.env.NODE_ENV === 'production' && (
        <YMInitializer
          accounts={['39965000']}
          options={{
            id: 39965000,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
            trackHash: true,
          }}
        />
      )}
      <Header />
      <main>{children()}</main>
      <Footer />
    </Flex>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
