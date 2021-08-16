import styled from "styled-components";

export const _Header = styled.div`
  background-color: ${props => props.theme.accent_color};
  padding: 10px;
  z-index: 10;
  justify-content: space-between;
  display: flex;
`;

export const IconBtn = styled.button`
  display: block;
  height: 40px;
  width: 42px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.accent_color};
  cursor: pointer;
  background-color: white;
  margin-top: 2px;
  &:hover {
    border: 1px solid ${(props) => props.theme.theme_color};
  }
  svg {
    color: ${(props) => props.theme.theme_color};
  }
`;
