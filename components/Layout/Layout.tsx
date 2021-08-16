import React, { ReactElement, useState } from "react";
import Header from "./Header/Header";
import SideNav from "./SideNav/SideNav";

interface Props {
  children: ReactElement[] | ReactElement;
}

export default function Layout({ children }: Props): ReactElement {
  const [showSideNav, setShowSideNav] = useState<boolean>(false);
  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div>
      <Header toggleSideNav={toggleSideNav} />
      <div>{children}</div>
      <SideNav show={showSideNav} toggleSideNav={toggleSideNav} />
    </div>
  );
}
