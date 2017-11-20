import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import Divider from '../../components/Divider';

import { measurements, colors, opacities, fonts, shadows } from '../../data/values.css';

/* TODO: Temporary animation to give content a lift animation when refreshed */
const contentLiftAnimation = keyframes`
  from {
    transform: translateY(${measurements.height.header});
  }
  to {
    transform: translateY(0);
  }
`;

const ContentContainer = styled.main`
  flex: 1 0 auto;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: ${measurements.padding.container};
  /* Account for fixed header height */
  padding-top: calc(${measurements.height.header} + ${measurements.padding.container});
  ${shadows.box[16]}
  background: ${props => (props.transparent ? 'transparent' : colors.background)};

  /* TODO: Application for temporary animation to give content a lift animation when refreshed */
  /* animation: 1s 0s 1 ease-out ${contentLiftAnimation}; */
`;

const TitleContainer = styled.div`
  margin-bottom: ${measurements.padding.container};
`;

const Title = styled.h1`
  margin: 0.5em 0;
  font-size: ${fonts.sizes[32]};
  font-weight: bold;
  text-transform: lowercase;
  white-space: nowrap;
  overflow-x: auto;
  color: ${colors.primary};
  opacity: ${opacities.primary};

  &::before,
  &::after {
    /* space - em dash - space */
    content: '\\0020\\2014\\0020';
  }
`;

const isHome = title => title === '';

const Content = ({ children, title }) => (
  <ContentContainer transparent={isHome(title)}>
    {/* Include title as header if given */}
    {!isHome(title) && (
      <TitleContainer>
        <Title>{title}</Title>
        <Divider baseColor={colors.primary} />
      </TitleContainer>
    )}
    {children}
  </ContentContainer>
);

Content.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Content.defaultProps = {
  title: '',
};

export default Content;
