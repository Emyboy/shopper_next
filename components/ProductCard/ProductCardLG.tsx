import React, { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import Flex from "../Styled/Flex";
import { IconBtn } from "../Layout/Header/Header.styles";
import { FaRegHeart } from "react-icons/fa";

interface Props {}

const Card = styled.div`
  background-color: white;
  height: 480px;
  width: 250px;
  margin: 20px;
  border-radius: 20px;
  padding: 15px;
  img {
    border-radius: 20px;
  }
`;

export default function ProductCardLG({}: Props): ReactElement {
  return (
    <Card>
      <Image src="/woman.jpg" width="300" height="410" />
      <div>
        <h2 className="text-muted">This is the product name</h2>
        <Flex alignment="space-between">
          <small style={{ alignSelf: "center" }}>$895.00</small>
          <IconBtn style={{ marginTop: "4px" }}>
            <FaRegHeart size={17} />
          </IconBtn>
        </Flex>
      </div>
    </Card>
  );
}
