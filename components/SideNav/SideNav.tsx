import React, { ReactElement } from "react";
import styled from "styled-components";
import { BiHomeCircle } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

interface Props {}

export const SideNavComponent = styled.aside`
  height: 100%;
  width: 290px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  display: block;
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
  border-bottom: 1px solid ${(props) => props.theme.accent_color};
  svg {
      cursor: pointer;
      &:hover {
          color: ${props => props.theme.theme_color2}
      }
  };
  h6,
  svg {
    margin: 0px;
    font-size: 20px;
    color: ${(props) => props.theme.accent_color};
  }
`;

export default function SideNav({}: Props): ReactElement {
  return (
    <SideNavComponent className="shadow">
      <SideNavHeading>
        <h6>Menu</h6>
        <IoClose size={30} />
      </SideNavHeading>
      <EachNavItem href="/">
        <BiHomeCircle />
        <span>Home</span>
      </EachNavItem>
      <EachNavItem href="/">
        <BiHomeCircle />
        <span>About Us</span>
      </EachNavItem>
      <EachNavItem href="/">
        <BiHomeCircle />
        <span>Logout</span>
      </EachNavItem>
    </SideNavComponent>
  );
}
