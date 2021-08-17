import styled from "styled-components";

export interface SearchResultTypes {
  keyword: string;
}

export const InputBox = styled.div`
  background-color: pink;
  width: 50%;
  padding: 10px;
  display: flex;
  border-radius: 50px;
  background: ${(props) => props.theme.bg_color};
  border: 1px solid gray;
  height: 60px;
  align-items: center;
  input {
    width: 95%;
    background: none;
    border: none;
    outline: none;
    font-size: 20px;
  }
  @media only screen and (max-width: 700px) {
    input {
      width: 82%;
    }
  }
`;

export const SearchResults = styled.div`
  height: ${(props:SearchResultTypes) => (props.keyword ? "40vh" : 0)};
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  background: rgb(244, 244, 244);
  background: linear-gradient(
    0deg,
    rgba(244, 244, 244, 0) 0%,
    rgba(0, 0, 0, 0.06766456582633051) 70%,
    rgba(136, 136, 136, 0.0760679271708683) 88%,
    rgba(0, 0, 0, 0.227328431372549) 100%
    );
    z-index: 7;
  section {
    background: white;
    width: 90vw;
    border-radius: 0px 0px 20px 20px;
    padding: ${(props) => (props.keyword ? "10px" : 0)};
  }
  @media only screen and (max-width: 700px) {
    section {
      width: 98vw;
    }
  }
`;
