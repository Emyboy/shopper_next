import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children: ReactElement[] | ReactElement;
}

const _Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: auto;
  grid-gap: 0;
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 2fr));
  }
`;

export default function Grid({ children }: Props): ReactElement {
  return <_Grid>{children}</_Grid>;
}
