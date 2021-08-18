import styled from "styled-components";
import { SideNavProps } from "./SideNav";

export const SideNavComponent = styled.aside`
  height: 100%;
  width: ${(props: SideNavProps) => (props.show ? "290px" : "0px")};
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  display: block;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: ${(props) => props.theme.theme_color};
  a:hover {
    color: ${(props) => props.theme.theme_color2};
  }
`;

export const EachNavItem = styled.a`
  display: flex;
  color: ${(props) => props.theme.accent_color};
  font-size: 25px;
  margin-bottom: 5px;
  text-decoration: none;
  padding: 5%;
  border-radius: 0px 50px 50px 0px;
  svg {
    align-self: center;
  }
  & span {
    margin-left: 20px;
  }
  &:hover {
    background-color: ${(props) => props.theme.theme_color_dark};
  }
`;

export const SideNavHeading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5% 10% 5% 10%;
  margin-bottom: 20px;
  svg {
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.theme_color2};
    }
  }
  h6,
  svg {
    margin: 0px;
    font-size: 20px;
    color: ${(props) => props.theme.accent_color};
  }
`;
