import React, { ReactElement, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { _Header, IconBtn } from "./Header.styles";
import SearchInput from "../SearchInput/SearchInput";
import { SearchResults } from "../SearchInput/SearchInput.styles";

interface Props {
  toggleSideNav: Function;
}

export default function Header({ toggleSideNav }: Props): ReactElement {
  const [keyword, setKeyword] = useState('');
  const handleKeyworkSearch = (e: React.ChangeEvent) => {
    setKeyword((e.target as HTMLTextAreaElement).value);
  };

  return (
    <div className='fixed-top'>
      <_Header className="shadow">
        <div style={{ alignSelf: "center" }}>
          <IconBtn onClick={() => toggleSideNav()}>
            <GiHamburgerMenu />
          </IconBtn>
        </div>
        <SearchInput onChange={handleKeyworkSearch} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconBtn>
            <ImCart />
          </IconBtn>
          <IconBtn style={{ marginLeft: "10px" }}>
            <FaUserAlt />
          </IconBtn>
        </div>
      </_Header>
      <SearchResults keyword={keyword}>
        <section>
          <h3>{keyword}</h3>
        </section>
      </SearchResults>
    </div>
  );
}
