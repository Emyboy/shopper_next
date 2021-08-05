import React, { ReactElement } from "react";

interface Props {}

export default function ProductCardLG({}: Props): ReactElement {
  return (
    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
      <div className="product-cart-wrap mb-30">
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <a href="html/evara/evara-frontend/shop-product-right.html">
              <img
                className="default-img"
                src="/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className="hover-img"
                src="/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="product-action-1">
            <a
              aria-label="Quick view"
              className="action-btn hover-up"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
            >
              <i className="fi-rs-eye"></i>
            </a>
            <a
              aria-label="Add To Wishlist"
              className="action-btn hover-up"
              href="html/evara/evara-frontend/shop-wishlist.html"
            >
              <i className="fi-rs-heart"></i>
            </a>
            <a
              aria-label="Compare"
              className="action-btn hover-up"
              href="html/evara/evara-frontend/shop-compare.html"
            >
              <i className="fi-rs-shuffle"></i>
            </a>
          </div>
          <div className="product-badges product-badges-position product-badges-mrg">
            <span className="hot">Hot</span>
          </div>
        </div>
        <div className="product-content-wrap">
          <div className="product-category">
            <a href="html/evara/evara-frontend/shop-grid-right.html">
              Clothing
            </a>
          </div>
          <h2>
            <a href="html/evara/evara-frontend/shop-product-right.html">
              Colorful Pattern Shirts
            </a>
          </h2>
          <div className="rating-result" title="90%">
            <span>
              <span>90%</span>
            </span>
          </div>
          <div className="product-price">
            <span>$238.85 </span>
            <span className="old-price">$245.8</span>
          </div>
          <div className="product-action-1 show">
            <a
              aria-label="Add To Cart"
              className="action-btn hover-up"
              href="html/evara/evara-frontend/shop-cart.html"
            >
              <i className="fi-rs-shopping-bag-add"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
