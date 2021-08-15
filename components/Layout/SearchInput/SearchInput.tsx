import React, { ReactElement } from "react";
import { IconBtn } from "../Header/Header.styles";
import { FaSearch } from "react-icons/fa";
import { InputBox, } from './SearchInput.styles';

interface Props {
  onChange: React.ChangeEventHandler;
}


export default function SearchInput({
  onChange
}: Props): ReactElement {
  return (
    <>
      <InputBox>
        <input placeholder="Search.." onChange={onChange} />
        <IconBtn>
          <FaSearch />
        </IconBtn>
      </InputBox>
    </>
  );
}
