// import React from "react";
// import { Flex, Image, Text, Box } from "rebass";
// import { Link as ReachLink } from "@reach/router";
// import styled from "styled-components";
// import logo from "../assets/resonate_logo_transx.png";

// import { NAV_ITEMS } from "../constants";

// const NavBar = () => {
//   return (
//     <NavBarWrapper>
//       <Flex>
//         {NAV_ITEMS.map(item => {
//           let active;
//           return (
//             <LinkWrapper m={[2, 3, 3]}>
//               <StyledLink key={item.name} active={active} to={`${item.url}`}>
//                 {item.name}
//               </StyledLink>
//             </LinkWrapper>
//           );
//         })}
//       </Flex>
//       <Image src={logo} width={[1 / 20]} />
//     </NavBarWrapper>
//   );
// };

// const NavBarWrapper = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: 10vh;
//   width: 100%;
// `;

// const StyledLink = styled(ReachLink)`
//   text-decoration: none;
//   color: ${props => props.theme.colors.darkBlue};
//   font-family: ${props => props.theme.fontFamily.secondary};
//   font-weight: ${props => props.theme.fontWeight.bold};
//   opacity: 0.6;

//   &[aria-current] {
//     color: ${props => props.theme.colors.darkBlue};
//     opacity: 1;
//     border-bottom: solid 2px ${props => props.theme.colors.darkBlue};
//   }

//   :hover {
//     border-bottom: solid 2px ${props => props.theme.colors.darkBlue};
//     color: ${props => props.theme.colors.darkBlue};
//     opacity: 1;
//   }
// `;

// const LinkWrapper = styled(Box)``;

// export default NavBar;
