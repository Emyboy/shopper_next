import React, { ReactElement } from "react";
import Layout from "../components/Layout/Layout";
import ProductCardLG from "../components/ProductCard/ProductCardLG";
import Flex from "../components/Styled/Flex";
import Grid from "../components/Styled/Grid";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <Layout>
        <Flex alignment='center'>
          <ProductCardLG />
          <ProductCardLG />
          <ProductCardLG />
          <ProductCardLG />
          <ProductCardLG />
          <ProductCardLG />
          <ProductCardLG />
          <ProductCardLG />
          <ProductCardLG />
          <ProductCardLG />
        </Flex>
      </Layout>
    </div>
  );
}
