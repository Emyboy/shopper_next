import React, { ReactElement } from "react";
import styled from "styled-components";

interface FlexProps {
  children: ReactElement[] | ReactElement;
  alignment?: string | "center" | "space-evenly" | "space-between";
}

const _Row = styled.div`
  margin-top: 24px;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: start;
  -webkit-justify-content: ${(p: FlexProps) => p.alignment};
  /* justify-content: flex-start; */
  justify-content: ${(p: FlexProps) => p.alignment};
`;

export default function Flex({ children, alignment }: FlexProps): ReactElement {
  return <_Row alignment={alignment}>{children}</_Row>;
}
