import React from 'react';
import { shape, object, node, string } from 'prop-types';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';

import { getFontImport } from '../../utils/fonts';
import { isHomePath, pathToTitleCase, getEdgePaths } from '../../utils/paths';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import GlobalStyle from './layout.css';

const {
  metadata: { desc: siteDescription },
  pages,
  colors: { theme: themeColor },
} = require('../../data/config.json');

const getRouteLinks = (edges) => {
  const allPaths = getEdgePaths(edges);
  const paths = pages
    .map((page) => `/${page.toLowerCase()}/`)
    .filter((page) => allPaths.includes(page));
  return paths;
};

const TemplateWrapper = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteLookup {
        site {
          siteMetadata {
            title
          }
        }
        allSitePage {
          edges {
            node {
              path
            }
          }
        }
      }
    `}
    render={(data) => (
      <Wrapper>
        <GlobalStyle />
        <Helmet
          defaultTitle={data.site.siteMetadata.title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        >
          <title>{pathToTitleCase(location.pathname)}</title>
          <meta name="description" content={siteDescription} />

          {/* Fonts */}
          {/* eslint-disable react/jsx-props-no-spreading */}
          <link {...getFontImport()} />
          {/* eslint-enable react/jsx-props-no-spreading */}

          {/* Favicons */}
          <link rel="icon" sizes="32x32" href={withPrefix('/favicon-32x32.png')} />
          <link rel="icon" sizes="16x16" href={withPrefix('/favicon-16x16.png')} />
          <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/apple-touch-icon.png')} />
          <link rel="mask-icon" color={themeColor} href={withPrefix('/safari-pinned-tab.svg')} />

          {/* Cloudflare Analytics */}
          <script src='https://static.cloudflareinsights.com/beacon.min.js' 
                  data-cf-beacon='{"token": "84c979ca91574da6bd382f7062ce5002"}'
                  defer>
          </script>
        </Helmet>
        <Header
          routes={getRouteLinks(data.allSitePage.edges)}
          home={isHomePath(location.pathname)}
        />
        <Content title={pathToTitleCase(location.pathname)}>{children}</Content>
        <Footer />
      </Wrapper>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: node.isRequired,
  location: shape({
    hash: string,
    pathname: string,
    search: string,
    state: object,
  }).isRequired,
};

TemplateWrapper.defaultProps = {};

export default TemplateWrapper;
