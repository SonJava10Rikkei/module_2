import React from "react";

function FeaturedProducts() {
  return (
    <>
      {" "}
      {/*feature start */}
      <section id="feature" className="feature">
        <div className="container">
          <div className="section-header">
            <h2>featured products</h2>
          </div>
          {/*/.section-header*/}
          <div className="feature-content">
            <div className="row">
              <div className="col-sm-3">
                <div className="single-feature">
                  <img src="../images/features/f1.jpg" alt="feature image" />
                  <div className="single-feature-txt text-center">
                    <p>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <span className="spacial-feature-icon">
                        <i className="fa fa-star" />
                      </span>
                      <span className="feature-review">(73 review)</span>
                    </p>
                    <h3>
                      <a href="#">designed sofa</a>
                    </h3>
                    <h5>$160.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single-feature">
                  <img src="../images/features/f2.jpg" alt="feature image" />
                  <div className="single-feature-txt text-center">
                    <p>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <span className="spacial-feature-icon">
                        <i className="fa fa-star" />
                      </span>
                      <span className="feature-review">(38 review)</span>
                    </p>
                    <h3>
                      <a href="#">dinning table </a>
                    </h3>
                    <h5>$200.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single-feature">
                  <img src="../images/features/f3.jpg" alt="feature image" />
                  <div className="single-feature-txt text-center">
                    <p>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <span className="spacial-feature-icon">
                        <i className="fa fa-star" />
                      </span>
                      <span className="feature-review">(45 review)</span>
                    </p>
                    <h3>
                      <a href="#">chair and table</a>
                    </h3>
                    <h5>$100.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single-feature">
                  <img src="../images/features/f4.jpg" alt="feature image" />
                  <div className="single-feature-txt text-center">
                    <p>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <span className="spacial-feature-icon">
                        <i className="fa fa-star" />
                      </span>
                      <span className="feature-review">(29 review)</span>
                    </p>
                    <h3>
                      <a href="#">modern arm chair</a>
                    </h3>
                    <h5>$299.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/.container*/}
      </section>
      {/*/.feature*/}
      {/*feature end */}
    </>
  );
}

export default FeaturedProducts;
