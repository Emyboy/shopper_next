import React, { ReactElement } from "react";
import { BiHomeCircle } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import {
  EachNavItem,
  SideNavComponent,
  SideNavHeading,
} from "./SideNav.styled";

export interface SideNavProps {
  show: boolean;
  toggleSideNav?: Function;
  // children: ReactElement[] | ReactElement;
}

export default function SideNav({
  show,
  toggleSideNav,
}: SideNavProps): ReactElement {
  return (
    <SideNavComponent className="shadow" show={show}>
      <SideNavHeading>
        <h6>Menu</h6>
        {/* <IoClose size={30} onClick={toggleSideNav} /> */}
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
