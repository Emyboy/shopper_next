import React, { ReactElement } from "react";
import Img from "next/image";
import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
interface Props {}

export interface SizeSelectionBtnProps {
  selected: boolean;
}

const SizeSelectionBtn = styled.button<SizeSelectionBtnProps>`
  border-radius: 10px;
  border: none;
  width: 80px;
  background-color: ${(p) =>
    p.selected ? p.theme.theme_color : p.theme.accent_color};
  color: ${p => p.selected ? 'white' : p.theme.theme_color};
  font-size: 19x;
  font-weight: bold;
  margin-right: 20px;
`;

export default function ProductDetails({}: Props): ReactElement {
  return (
    <Layout>
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <Img src="/woman.jpg" width="400" height="600" />
            </div>
            <div className="col-md-8 col-lg-8 col-xl-8">
              <h2 className="display-5">The name of the product</h2>
              <h5 className="text-muted mr-3">
                <del>$586.00</del>
              </h5>
              <h3>
                <b className="text-theme">$586.00</b>
              </h3>
              <hr className="text-muted" />
              <h6>
                <b>Short Description</b>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt in
                nemo est enim, error nostrum ea mollitia voluptas iste,
                exercitationem illo voluptatum eius. Vel enim maxime nostrum
                molestiae, nemo id! Nulla praesentium, dolores facere quis magni
                nam rem amet, ullam officia maxime excepturi similique doloribus
                harum aut asperiores exercitationem quibusdam possimus. Ab,
                doloribus architecto quia molestiae aliquam optio corrupti
                assumenda. Eum, qui similique soluta
              </p>
              <hr className="text-muted" />
              <h6>
                <b>Size</b>
              </h6>
              <div>
                <SizeSelectionBtn selected={false}>
                  <small>XL</small>
                </SizeSelectionBtn>
                <SizeSelectionBtn selected={false}>
                  <small>XL</small>
                </SizeSelectionBtn>
                <SizeSelectionBtn selected={true}>
                  <small>XL</small>
                </SizeSelectionBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
