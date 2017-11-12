import { injectGlobal } from 'styled-components';

import { colors, measurements } from '../data/values.styles';

const index = injectGlobal`
  ::selection {
    background: ${colors.primary};
    color: ${colors.secondary};
    text-shadow: none;
  }

  /*
    Accounts for content under fixed header with site anchors
    (Might not work with the padding on Content, but we don't use anchors on this site anyways)
  */
  :target::before {
    content: '';
    display: block;
    visibility: hidden;
    height: ${measurements.height.header};
    margin-top: ${`-${measurements.height.header}`};
  }

  html {
    box-sizing: border-box;
    background: ${colors.primary};
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
    /* TODO: This is only a temporary change to distinguish between regular text and anchors */
    opacity: 0.87;
  }
`;

export default index;
