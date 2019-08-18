import styled from "styled-components";
import { Text } from "rebass";

export const MainBody = styled.main`
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  margin: 1rem;
`;

export const BannerText = styled(Text)`
  font-family: ${props => props.theme.fontFamily.primary};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeight.bold};
  margin-bottom: 1rem;
`;
