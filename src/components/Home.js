import React, { Fragment } from 'react';
import { Flex, Image, Text, Link } from 'rebass';
import styled from 'styled-components';
import logo from '../assets/UnfilteredBuild_Logo.png';
import {
  MAILTO,
  DROP_NOTE,
  UNFILTERED_HEADER,
  UNFILTERED_DESCRIPTION,
  UNFILTERED_TAGLINE,
} from '../constants';
import { useSpring } from 'react-spring';

import { BannerText, TaglineText } from './StyledComponents';
import NavBar from './NavBar';

const Home = () => {
  // const props = useSpring({ opacity: 0, from: { opacity: 1 } });
  return (
    <Fragment>
      <MainWrapper>
        {/* <animated.h1 style={props}>hello</animated.h1> */}
        <NavBar />
        <Image src={logo} width={[1 / 3, 1 / 4, 1 / 5]} mb={[2, 2, 3]} />
        <BannerText fontSize={[4, 4, 6]}>{UNFILTERED_HEADER}</BannerText>

        <TaglineText fontSize={[1, 2, 4]} m={[]} textAlign="center">
          {UNFILTERED_TAGLINE}
        </TaglineText>
        <ContentWrapper fontSize={[2, 4, 5]} m={[4]} textAlign="center">
          {UNFILTERED_DESCRIPTION}
        </ContentWrapper>
        <ContentWrapper fontSize={[1, 2, 3]}>{DROP_NOTE}</ContentWrapper>
        <MailTo fontSize={[1, 2, 3]} href={`mailto:${MAILTO}`} color="grey">
          <em>{MAILTO}</em>
        </MailTo>
      </MainWrapper>
    </Fragment>
  );
};

const MainWrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ContentWrapper = styled(Text)`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : props.theme.fontWeight.medium};
`;

const MailTo = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.jet};
  opacity: 0.6;

  :hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.black};
    opacity: 1;
  }
`;

export default Home;
