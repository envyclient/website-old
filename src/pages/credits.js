import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout/layout';

import CardList from '../components/CardList';
import Card, { Title, Info } from '../components/Card';

import SocialIcon from '../components/SocialIcon';

import creditImages from '../data/credits.jpg';
import { measurements, colors, effects, transitions } from '../data/values.css';

const { credits } = require('../data/config.json');

const CreditAvatar = styled.img`
  display: block;
  max-width: calc(100vw - (${measurements.padding.container} * 4));
  ${transitions.set('filter', 'transform')};
  will-change: filter, transform;
`;

const CreditDetails = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 50%;
  background: ${colors.secondary};
  transform: translateY(100%);
  padding: 0 ${measurements.padding.container};
  ${transitions.set('transform')};
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: inherit;
    border-top: solid ${measurements.unit} ${colors.primary};
    left: 0;
    top: 0;
    transform: skewY(-10deg);
    transform-origin: left top;
  }
`;

const CreditIcon = styled(SocialIcon)`
  margin: 0.5em;
`;

const CreditContainer = styled(Card)`
  padding: 0;
  margin: ${measurements.padding.container};
  border-radius: ${measurements.border.circle};
  will-change: contents;

  &:hover {
    & > ${CreditAvatar} {
      filter: ${effects.blurScale.blur};
      transform: ${effects.blurScale.scale};
    }

    & > ${CreditDetails} {
      transform: translateY(0);
    }
  }
`;

const CreditsPage = ({ children, location }) => (
  <Layout children={children} location={location}>
    <CardList>
      {credits.map(({ id, name, desc, social }) => (
        <CreditContainer key={id}>
          <CreditAvatar className="credit__avatar" src={creditImages[id]} alt={name} />
          <CreditDetails className="credit__details">
            <Title>{name}</Title>
            <Info>{desc}</Info>
            <div>
              {social.map((props) => (
                <CreditIcon key={props.id} {...props} />
              ))}
            </div>
          </CreditDetails>
        </CreditContainer>
      ))}
    </CardList>
  </Layout>
);

export default CreditsPage;
