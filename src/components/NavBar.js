import React from 'react';
import { Flex, Image, Text, Box } from 'rebass';
import { Link as ReachLink } from '@reach/router';
import styled from 'styled-components';

import data from '../data';

const NavBar = () => {
  return (
    <NavBarWrapper>
      <FlexWrapper>{selectedLink()}</FlexWrapper>
    </NavBarWrapper>
  );
};

const selectedLink = () => {
  return data.map((item) => {
    let active;
    if (item.type === 'external') {
      return (
        <LinkWrapper m={[2, 3, 3]}>
          <StyledExternalLink
            key={item.name}
            target="__blank"
            href={`${item.url}`}
          >
            {item.name}
          </StyledExternalLink>
        </LinkWrapper>
      );
    } else {
      return (
        <LinkWrapper m={[2, 3, 3]}>
          <StyledLink active={active} key={item.name} to={`${item.url}`}>
            {item.name}
          </StyledLink>
        </LinkWrapper>
      );
    }
  });
};

const NavBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 10vh;
  width: 100%;
`;

const FlexWrapper = styled(Flex)`
  margin-right: 50px;
`;
const StyledLink = styled(ReachLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  opacity: 1;

  &[aria-current] {
    color: ${(props) => props.theme.colors.grey};
    opacity: 1;
    border-bottom: solid 2px ${(props) => props.theme.colors.grey};
  }

  :hover {
    border-bottom: solid 2px ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.grey};
    opacity: 1;
  }
`;

const StyledExternalLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  opacity: 1;

  &[aria-current] {
    color: ${(props) => props.theme.colors.grey};
    opacity: 1;
    border-bottom: solid 2px ${(props) => props.theme.colors.grey};
  }

  :hover {
    border-bottom: solid 2px ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.grey};
    opacity: 1;
  }
`;

const LinkWrapper = styled(Box)``;

export default NavBar;
