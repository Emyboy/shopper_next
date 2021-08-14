import React, { ReactElement } from "react";
import styled from "styled-components";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

interface Props {
  toggleSideNav: Function;
}

export const _Header = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const IconBtn = styled.button`
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.accent_color};
  cursor: pointer;
  background-color: white;
  svg {
    color: ${(props) => props.theme.theme_color};
  }
`;

export default function Header({ toggleSideNav }: Props): ReactElement {
  return (
    <_Header className="shadow">
      <IconBtn onClick={toggleSideNav}>
        <HiOutlineMenuAlt2 />
      </IconBtn>
      <div style={{ display: "flex" }}>
        <IconBtn>
          <BiSearchAlt />
        </IconBtn>
        <IconBtn style={{ marginLeft: "10px" }}>
          <FaRegUser />
        </IconBtn>
      </div>
    </_Header>
  );
}
