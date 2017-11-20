import React from 'react';
import styled, { css } from 'styled-components';

import { logo } from '../data/icons.svg';
import { measurements, colors, opacities, fonts } from '../data/values.css';

import splashBg from '../images/index/splash-bg.jpg';

const { metadata: { title, label, owner } } = require('../data/config.json');

const imageBackgroundStyle = css`
  background-color: transparent;
  background-image: url(${splashBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Subtract header and top/bottom container padding heights from viewport */
  height: calc(100vh - (${measurements.height.header} + (${measurements.padding.container} * 2)));
  background: transparent;
  color: ${colors.secondary};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100vh;
    z-index: -1;
    ${imageBackgroundStyle}
    filter: brightness(${opacities.secondary});
    opacity: ${opacities.primary};
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;

const IndexPage = () => (
  <IndexContainer>
    {logo}
    {/* TODO: Prototype, not final */}
    <div>
      <h1
        style={{
          margin: 0,
          display: 'block',
          fontSize: fonts.sizes[32],
          opacity: opacities.primary,
          textTransform: 'uppercase',
        }}
      >
        {title}
      </h1>
      <p
        style={{
          margin: 0,
          display: 'block',
          fontSize: fonts.sizes[16],
          opacity: opacities.secondary,
          textTransform: 'lowercase',
        }}
      >
        Developed by <strong style={{ textTransform: 'none' }}>{owner}</strong>
      </p>
      <a
        href="http://ad.envyclient.com/1"
        role="button"
        style={{ margin: measurements.padding.container, display: 'block' }}
      >
        Download <strong>{label}</strong>
      </a>
    </div>
  </IndexContainer>
);

export default IndexPage;
