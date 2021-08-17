import React, { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import Flex from "../Styled/Flex";
import Link from 'next/link'

interface Props {}

const Card = styled.div`
  background-color: white;
  /* height: 480px;
  width: 100%; */
  margin: 20px;
  border-radius: 20px;
  padding: 15px;
  img {
    border-radius: 20px;
  }
  h2 {
    font-size: 20px;
    font-weight: bold;
  }
  a {
    text-decoration: none;
  }
`;

const AddProductBtn = styled.button`
  border: none;
  padding: 10px;
  border-radius: 20px;
  width: 120px;
  background-color: ${p => p.theme.accent_color};
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
  :hover {
    background-color: ${p => p.theme.theme_color};
    color: white;
  };
`;

export default function ProductCardLG({}: Props): ReactElement {
  return (
    <div className="col-lg-3 col-md-5 col-sm-12">
      <Card>
        <Image src="/woman.jpg" width="300" height="410" />
        <div>
          <Link href="/product/mens/f2v4-2v4v-2434v34-v">
            <a>
              <h2 className="text-muted">
                This is the product name
              </h2>
            </a>
          </Link>

          <Flex alignment="space-between">
            <small style={{ alignSelf: "center" }}>$895.00</small>
            <AddProductBtn className="shadow">
              <small>Add Item +</small>
            </AddProductBtn>
            {/* <IconBtn style={{ marginTop: "4px" }}>
            <FaRegHeart size={17} />
          </IconBtn> */}
          </Flex>
        </div>
      </Card>
    </div>
  );
}
