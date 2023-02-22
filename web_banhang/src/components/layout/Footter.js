import React from "react";

export const Footter = () => {
  return (
    <>
      {" "}
      {/*newsletter strat Foter */}
      <section id="newsletter" className="newsletter">
        <div className="container">
          <div className="hm-footer-details">
            <div className="row">
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>information</h4>
                  </div>
                  {/*/.hm-foot-title*/}
                  <div className="hm-foot-menu">
                    <ul>
                      <li>
                        <a href="#">about us</a>
                      </li>
                      {/*/li*/}
                      <li>
                        <a href="#">contact us</a>
                      </li>
                      {/*/li*/}
                      <li>
                        <a href="#">news</a>
                      </li>
                      {/*/li*/}
                      <li>
                        <a href="#">store</a>
                      </li>
                      {/*/li*/}
                    </ul>
                    {/*/ul*/}
                  </div>
                  {/*/.hm-foot-menu*/}
                </div>
                {/*/.hm-footer-widget*/}
              </div>
              {/*/.col*/}
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>collections</h4>
                  </div>
                  {/*/.hm-foot-title*/}
                  <div className="hm-foot-menu">
                    <ul>
                      <li>
                        <a href="#">wooden chair</a>
                      </li>
                      {/*/li*/}
                      <li>
                        <a href="#">royal cloth sofa</a>
                      </li>
                      {/*/li*/}
                      <li>
                        <a href="#">accent chair</a>
                      </li>
                      {/*/li*/}
                      <li>
                        <a href="#">bed</a>
                      </li>
                      {/*/li*/}
                      <li>
                        <a href="#">hanging lamp</a>
                      </li>
                      {/*/li*/}
                    </ul>
                    {/*/ul*/}
                  </div>
                  {/*/.hm-foot-menu*/}
                </div>
                {/*/.hm-footer-widget*/}
              </div>
              {/*/.col*/}
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>my accounts</h4>
                  </div>
                  {/*/.hm-foot-title*/}
                  <div className="hm-foot-menu">
                    <ul>
                      <li>
                        <a href="#">my account</a>
                      </li>
                      {/*/li*/}
                      <li>
                        <a href="#">wishlist</a>
                      </li>
                      {/*/li*/}
                      <li>
                        <a href="#">Community</a>
                      </li>
                      {/*/li*/}
                      <li>
                        <a href="#">order history</a>
                      </li>
                      {/*/li*/}
                      <li>
                        <a href="#">my cart</a>
                      </li>
                      {/*/li*/}
                    </ul>
                    {/*/ul*/}
                  </div>
                  {/*/.hm-foot-menu*/}
                </div>
                {/*/.hm-footer-widget*/}
              </div>
              {/*/.col*/}
              <div className=" col-md-3 col-sm-6  col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>newsletter</h4>
                  </div>
                  {/*/.hm-foot-title*/}
                  <div className="hm-foot-para">
                    <p>Subscribe to get latest news,update and information.</p>
                  </div>
                  {/*/.hm-foot-para*/}
                  <div className="hm-foot-email">
                    <div className="foot-email-box">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Here...."
                      />
                    </div>
                    {/*/.foot-email-box*/}
                    <div className="foot-email-subscribe">
                      <span>
                        <i className="fa fa-location-arrow" />
                      </span>
                    </div>
                    {/*/.foot-email-icon*/}
                  </div>
                  {/*/.hm-foot-email*/}
                </div>
                {/*/.hm-footer-widget*/}
              </div>
              {/*/.col*/}
            </div>
            {/*/.row*/}
          </div>
          {/*/.hm-footer-details*/}
        </div>
        {/*/.container*/}
      </section>
      {/*/newsletter*/}
      {/*newsletter end */}
      {/*footer start*/}
      <footer id="footer" className="footer">
        <div className="container">
          <div className="hm-footer-copyright text-center">
            <div className="footer-social">
              <a href="https://www.facebook.com/gutrend.vn/">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://www.instagram.com/xion9x/">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
              <a href="#">
                <i className="fa fa-pinterest" />
              </a>
              <a href="#">
                <i className="fa fa-behance" />
              </a>
            </div>
            <p>
              ©copyright. designed and developed by{" "}
              <a href="https://www.facebook.com/Xion9x">GuTrend</a>
            </p>
            {/*/p*/}
          </div>
          {/*/.text-center*/}
        </div>
        {/*/.container*/}
        <div id="scroll-Top">
          <div className="return-to-top">
            <i
              className="fa fa-angle-up "
              id="scroll-top"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Back to Top"
              aria-hidden="true"
            />
          </div>
        </div>
        {/*/.scroll-Top*/}
      </footer>
      {/*/.footer*/}
      {/*footer end*/}
    </>
  );
};
