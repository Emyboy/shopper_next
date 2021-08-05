import ProductCardLG from "../components/ProductCard/ProductCardLG";

export default function Home() {
  return (
    <div>
      <section className="featured section-padding position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
              <div
                className="banner-features wow fadeIn animated hover-up animated animated"
                style={{ visibility: "visible" }}
              >
                <img src="/imgs/theme/icons/feature-1.png" alt="" />
                <h4 className="bg-1">Free Shipping</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
              <div
                className="banner-features wow fadeIn animated hover-up animated animated"
                style={{ visibility: "visible" }}
              >
                <img src="/imgs/theme/icons/feature-2.png" alt="" />
                <h4 className="bg-3">Online Order</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
              <div
                className="banner-features wow fadeIn animated hover-up animated animated"
                style={{ visibility: "visible" }}
              >
                <img src="/imgs/theme/icons/feature-3.png" alt="" />
                <h4 className="bg-2">Save Money</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
              <div
                className="banner-features wow fadeIn animated hover-up animated animated"
                style={{ visibility: "visible" }}
              >
                <img src="/imgs/theme/icons/feature-4.png" alt="" />
                <h4 className="bg-4">Promotions</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
              <div
                className="banner-features wow fadeIn animated hover-up animated animated"
                style={{ visibility: "visible" }}
              >
                <img src="/imgs/theme/icons/feature-5.png" alt="" />
                <h4 className="bg-5">Happy Sell</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
              <div
                className="banner-features wow fadeIn animated hover-up animated animated"
                style={{ visibility: "visible" }}
              >
                <img src="/imgs/theme/icons/feature-6.png" alt="" />
                <h4 className="bg-6">24/7 Support</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-tabs section-padding position-relative wow fadeIn animated animated animated">
        <div className="container">
          <div className="tab-header">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="nav-tab-one"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-one"
                  type="button"
                  role="tab"
                  aria-controls="tab-one"
                  aria-selected="true"
                >
                  Featured
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="nav-tab-two"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-two"
                  type="button"
                  role="tab"
                  aria-controls="tab-two"
                  aria-selected="false"
                >
                  Popular
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="nav-tab-three"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-three"
                  type="button"
                  role="tab"
                  aria-controls="tab-three"
                  aria-selected="false"
                >
                  New added
                </button>
              </li>
            </ul>
            <a href="#" className="view-more d-none d-md-flex">
              View More<i className="fi-rs-angle-double-small-right"></i>
            </a>
          </div>
          <div
            className="tab-content wow fadeIn animated animated animated"
            id="myTabContent"
          >
            <div className="tab-pane fade show active" id="tab-one">
              <div className="row product-grid-4">
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
                <ProductCardLG />
                <ProductCardLG />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
