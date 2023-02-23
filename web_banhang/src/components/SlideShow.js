import React from "react";

function SlideShow() {
  return (
    <>
      {/*/.carousel-indicator */}
      {/*/.carousel-inner */}
      <div className="carousel-inner" role="listbox">
        {/* .item */}
        <div className="item active">
          <div className="single-slide-item slide1">
            <div className="container">
              <div className="welcome-hero-content">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="single-welcome-hero">
                      <div className="welcome-hero-txt">
                        <h4>great design collection</h4>
                        <h2>cloth covered accent chair</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiuiana smod tempor ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <div className="packages-price">
                          <p>
                            $ 399.00
                            <del>$ 499.00</del>
                          </p>
                        </div>
                        <button className="btn-cart welcome-add-cart">
                          <span className="lnr lnr-plus-circle" />
                          add <span>to</span> cart
                        </button>
                        <button className="btn-cart welcome-add-cart welcome-more-info">
                          more info
                        </button>
                      </div>
                      {/*/.welcome-hero-txt*/}
                    </div>
                    {/*/.single-welcome-hero*/}
                  </div>
                  {/*/.col*/}
                  <div className="col-sm-5">
                    <div className="single-welcome-hero">
                      <div className="welcome-hero-img">
                        <img
                          src="../images/slider/slider2.png"
                          alt="slider image"
                        />
                      </div>
                      {/*/.welcome-hero-txt*/}
                    </div>
                    {/*/.single-welcome-hero*/}
                  </div>
                  {/*/.col*/}
                </div>
                {/*/.row*/}
              </div>
              {/*/.welcome-hero-content*/}
            </div>
            {/* /.container*/}
          </div>
          {/* /.single-slide-item*/}
        </div>
        {/* /.item .active*/}
        <div className="item">
          <div className="single-slide-item slide2">
            <div className="container">
              <div className="welcome-hero-content">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="single-welcome-hero">
                      <div className="welcome-hero-txt">
                        <h4>great design collection</h4>
                        <h2>mapple wood accent chair</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiuiana smod tempor ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <div className="packages-price">
                          <p>
                            $ 199.00
                            <del>$ 299.00</del>
                          </p>
                        </div>
                        <button className="btn-cart welcome-add-cart">
                          <span className="lnr lnr-plus-circle" />
                          add <span>to</span> cart
                        </button>
                        <button className="btn-cart welcome-add-cart welcome-more-info">
                          more info
                        </button>
                      </div>
                      {/*/.welcome-hero-txt*/}
                    </div>
                    {/*/.single-welcome-hero*/}
                  </div>
                  {/*/.col*/}
                  <div className="col-sm-5">
                    <div className="single-welcome-hero">
                      <div className="welcome-hero-img">
                        <img
                          src="../images/slider/slider2.png"
                          alt="slider image"
                        />
                      </div>
                      {/*/.welcome-hero-txt*/}
                    </div>
                    {/*/.single-welcome-hero*/}
                  </div>
                  {/*/.col*/}
                </div>
                {/*/.row*/}
              </div>
              {/*/.welcome-hero-content*/}
            </div>
            {/* /.container*/}
          </div>
          {/* /.single-slide-item*/}
        </div>
        {/* /.item .active*/}
        <div className="item">
          <div className="single-slide-item slide3">
            <div className="container">
              <div className="welcome-hero-content">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="single-welcome-hero">
                      <div className="welcome-hero-txt">
                        <h4>great design collection</h4>
                        <h2>valvet accent arm chair</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiuiana smod tempor ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <div className="packages-price">
                          <p>
                            $ 299.00
                            <del>$ 399.00</del>
                          </p>
                        </div>
                        <button className="btn-cart welcome-add-cart">
                          <span className="lnr lnr-plus-circle" />
                          add <span>to</span> cart
                        </button>
                        <button className="btn-cart welcome-add-cart welcome-more-info">
                          more info
                        </button>
                      </div>
                      {/*/.welcome-hero-txt*/}
                    </div>
                    {/*/.single-welcome-hero*/}
                  </div>
                  {/*/.col*/}
                  <div className="col-sm-5">
                    <div className="single-welcome-hero">
                      <div className="welcome-hero-img">
                        <img
                          src="../images/slider/slider3.png"
                          alt="slider image"
                        />
                      </div>
                      {/*/.welcome-hero-txt*/}
                    </div>
                    {/*/.single-welcome-hero*/}
                  </div>
                  {/*/.col*/}
                </div>
                {/*/.row*/}
              </div>
              {/*/.welcome-hero-content*/}
            </div>
            {/* /.container*/}
          </div>
          {/* /.single-slide-item*/}
        </div>
        {/* /.item .active*/}
      </div>
      {/* /.carousel-inner*/}
    </>
  );
}

export default SlideShow;
