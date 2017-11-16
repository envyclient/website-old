import { css, injectGlobal } from 'styled-components';

import { measurements, colors, opacities } from '../data/values.styles';

const selectionStyle = css`
  background: ${colors.primary};
  color: ${colors.secondary};
  text-shadow: none;
`;

const index = injectGlobal`
  ::-moz-selection {
    ${selectionStyle}
  }

  ::selection {
    ${selectionStyle}
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
    /* For SVG anchors */
    fill: currentColor;
    /* TODO: This is only a temporary change to distinguish between regular text and anchors */
    opacity: ${opacities.primary};
  }
`;

export default index;
