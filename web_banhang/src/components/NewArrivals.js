import React, { useEffect, useState } from "react";
import { getProduct } from "../services/productService";
import { images } from "../assets/images/imageList";

function NewArrivals() {
  const [arrProduct, setArrProduct] = useState([]);
  useEffect(() => {
    listProduct();
  }, []);

  function listProduct() {
    getProduct()
      .then((res) => setArrProduct(res.data))
      .catch((err) => console.log(err));
  }

  let element = arrProduct.map((data, index) => {
    let imgUrl = images[data.src];
    return (
      <div key={data.id} className="col-md-3 col-sm-4">
        {/* {index + 1} */}
        <div className="single-new-arrival">
          <div className="single-new-arrival-bg">
            <img src={imgUrl} alt="new-arrivals images" />
            <div className="single-new-arrival-bg-overlay" />
            <div className="sale bg-12">
              {/* <p>sale</p> */}
            </div>
            <div className="new-arrival-cart">
              <p>
                <span className="lnr lnr-cart" />
                <a href="#">
                  add <span>to </span> cart
                </a>
              </p>
              <p className="arrival-review pull-right">
                <span className="lnr lnr-heart" />
                <span className="lnr lnr-frame-expand" />
              </p>
            </div>
          </div>
          <h4>
            <a href="">{data.name_product}</a>
          </h4>
          <p className="arrival-product-price">${data.price}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      {/*new-arrivals start */}
      <section id="new-arrivals" className="new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2>new arrivals</h2>
          </div>
          {/*/.section-header*/}
          <div className="new-arrivals-content">
            <div className="row">
              {/* <div className="col-md-3 col-sm-4">
                <div className="single-new-arrival">
                  <div className="single-new-arrival-bg">
                    <img
                      src="../images/collection/arrivals1.png"
                      alt="new-arrivals images"
                    />
                    <div className="single-new-arrival-bg-overlay" />
                    <div className="sale bg-1">
                      <p>sale</p>
                    </div>
                    <div className="new-arrival-cart">
                      <p>
                        <span className="lnr lnr-cart" />
                        <a href="#">
                          add <span>to </span> cart
                        </a>
                      </p>
                      <p className="arrival-review pull-right">
                        <span className="lnr lnr-heart" />
                        <span className="lnr lnr-frame-expand" />
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="">wooden chair</a>
                  </h4>
                  <p className="arrival-product-price">$65.00</p>
                </div>
              </div> */}
              {element}
              {/* <div className="col-md-3 col-sm-4">
                <div className="single-new-arrival">
                  <div className="single-new-arrival-bg">
                    <img
                      src="../images/collection/arrivals2.png"
                      alt="new-arrivals images"
                    />
                    <div className="single-new-arrival-bg-overlay" />
                    <div className="sale bg-2">
                      <p>sale</p>
                    </div>
                    <div className="new-arrival-cart">
                      <p>
                        <span className="lnr lnr-cart" />
                        <a href="#">
                          add <span>to </span> cart
                        </a>
                      </p>
                      <p className="arrival-review pull-right">
                        <span className="lnr lnr-heart" />
                        <span className="lnr lnr-frame-expand" />
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">single armchair</a>
                  </h4>
                  <p className="arrival-product-price">$80.00</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="single-new-arrival">
                  <div className="single-new-arrival-bg">
                    <img
                      src="../images/collection/arrivals3.png"
                      alt="new-arrivals images"
                    />
                    <div className="single-new-arrival-bg-overlay" />
                    <div className="new-arrival-cart">
                      <p>
                        <span className="lnr lnr-cart" />
                        <a href="#">
                          add <span>to </span> cart
                        </a>
                      </p>
                      <p className="arrival-review pull-right">
                        <span className="lnr lnr-heart" />
                        <span className="lnr lnr-frame-expand" />
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">wooden armchair</a>
                  </h4>
                  <p className="arrival-product-price">$40.00</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="single-new-arrival">
                  <div className="single-new-arrival-bg">
                    <img
                      src="../images/collection/arrivals4.png"
                      alt="new-arrivals images"
                    />
                    <div className="single-new-arrival-bg-overlay" />
                    <div className="sale bg-1">
                      <p>sale</p>
                    </div>
                    <div className="new-arrival-cart">
                      <p>
                        <span className="lnr lnr-cart" />
                        <a href="#">
                          add <span>to </span> cart
                        </a>
                      </p>
                      <p className="arrival-review pull-right">
                        <span className="lnr lnr-heart" />
                        <span className="lnr lnr-frame-expand" />
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">stylish chair</a>
                  </h4>
                  <p className="arrival-product-price">$100.00</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="single-new-arrival">
                  <div className="single-new-arrival-bg">
                    <img
                      src="../images/collection/arrivals5.png"
                      alt="new-arrivals images"
                    />
                    <div className="single-new-arrival-bg-overlay" />
                    <div className="new-arrival-cart">
                      <p>
                        <span className="lnr lnr-cart" />
                        <a href="#">
                          add <span>to </span> cart
                        </a>
                      </p>
                      <p className="arrival-review pull-right">
                        <span className="lnr lnr-heart" />
                        <span className="lnr lnr-frame-expand" />
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">modern chair</a>
                  </h4>
                  <p className="arrival-product-price">$120.00</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="single-new-arrival">
                  <div className="single-new-arrival-bg">
                    <img
                      src="../images/collection/arrivals6.png"
                      alt="new-arrivals images"
                    />
                    <div className="single-new-arrival-bg-overlay" />
                    <div className="sale bg-1">
                      <p>sale</p>
                    </div>
                    <div className="new-arrival-cart">
                      <p>
                        <span className="lnr lnr-cart" />
                        <a href="#">
                          add <span>to </span> cart
                        </a>
                      </p>
                      <p className="arrival-review pull-right">
                        <span className="lnr lnr-heart" />
                        <span className="lnr lnr-frame-expand" />
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">mapple wood dinning table</a>
                  </h4>
                  <p className="arrival-product-price">$140.00</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="single-new-arrival">
                  <div className="single-new-arrival-bg">
                    <img
                      src="../images/collection/arrivals7.png"
                      alt="new-arrivals images"
                    />
                    <div className="single-new-arrival-bg-overlay" />
                    <div className="sale bg-2">
                      <p>sale</p>
                    </div>
                    <div className="new-arrival-cart">
                      <p>
                        <span className="lnr lnr-cart" />
                        <a href="#">
                          add <span>to </span> cart
                        </a>
                      </p>
                      <p className="arrival-review pull-right">
                        <span className="lnr lnr-heart" />
                        <span className="lnr lnr-frame-expand" />
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">arm chair</a>
                  </h4>
                  <p className="arrival-product-price">$90.00</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="single-new-arrival">
                  <div className="single-new-arrival-bg">
                    <img
                      src="../images/collection/arrivals8.png"
                      alt="new-arrivals images"
                    />
                    <div className="single-new-arrival-bg-overlay" />
                    <div className="new-arrival-cart">
                      <p>
                        <span className="lnr lnr-cart" />
                        <a href="#">
                          add <span>to </span> cart
                        </a>
                      </p>
                      <p className="arrival-review pull-right">
                        <span className="lnr lnr-heart" />
                        <span className="lnr lnr-frame-expand" />
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">wooden bed</a>
                  </h4>
                  <p className="arrival-product-price">$140.00</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/*/.container*/}
      </section>
      ;{/*/.new-arrivals*/}
      {/*new-arrivals end */}
    </>
  );
}

export default NewArrivals;
