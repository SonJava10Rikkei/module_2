import "../../assets/style/Header.css";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header_top">
      {" "}
      {/*welcome-hero start */}
      <header id="home" className="welcome-hero">
        {/* top-area Start */}
        <div className="top-area">
          <div className="header-area">
            {/* Start Navigation */}
            <nav
              className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy header_start__navigation"
              data-minus-value-desktop={70}
              data-minus-value-mobile={55}
              data-speed={1000}
            >
              {/* Start Top Search */}
              <div className="top-search">
                <div className="container">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-search" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <span className="input-group-addon close-search">
                      <i className="fa fa-times" />
                    </span>
                  </div>
                </div>
              </div>
              {/* End Top Search */}
              <div className="container">
                {/* Start Atribute Navigation */}
                <div className="attr-nav">
                  <ul>
                    <li className="search">
                      <a href="#">
                        <span className="lnr lnr-magnifier" />
                      </a>
                    </li>
                    {/*/.search*/}
                    <li className="nav-setting">
                      <a href="#">
                        <span className="lnr lnr-cog" />
                      </a>
                    </li>
                    {/*/.search*/}
                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span className="lnr lnr-cart" />
                        <span className="badge badge-bg-1">2</span>
                      </a>
                      <ul className="dropdown-menu cart-list s-cate">
                        <li className="single-cart-list">
                          <a href="#" className="photo">
                            <img
                              src="assets/images/collection/arrivals1.png"
                              className="cart-thumb"
                              alt="image"
                            />
                          </a>
                          <div className="cart-list-txt">
                            <h6>
                              <a href="#">
                                arm <br /> chair
                              </a>
                            </h6>
                            <p>
                              1 x - <span className="price">$180.00</span>
                            </p>
                          </div>
                          {/*/.cart-list-txt*/}
                          <div className="cart-close">
                            <span className="lnr lnr-cross" />
                          </div>
                          {/*/.cart-close*/}
                        </li>
                        {/*/.single-cart-list */}
                        <li className="single-cart-list">
                          <a href="#" className="photo">
                            <img
                              src="assets/images/collection/arrivals2.png"
                              className="cart-thumb"
                              alt="image"
                            />
                          </a>
                          <div className="cart-list-txt">
                            <h6>
                              <a href="#">
                                single <br /> armchair
                              </a>
                            </h6>
                            <p>
                              1 x - <span className="price">$180.00</span>
                            </p>
                          </div>
                          {/*/.cart-list-txt*/}
                          <div className="cart-close">
                            <span className="lnr lnr-cross" />
                          </div>
                          {/*/.cart-close*/}
                        </li>
                        {/*/.single-cart-list */}
                        <li className="single-cart-list">
                          <a href="#" className="photo">
                            <img
                              src="assets/images/collection/arrivals3.png"
                              className="cart-thumb"
                              alt="image"
                            />
                          </a>
                          <div className="cart-list-txt">
                            <h6>
                              <a href="#">
                                wooden arn <br /> chair
                              </a>
                            </h6>
                            <p>
                              1 x - <span className="price">$180.00</span>
                            </p>
                          </div>
                          {/*/.cart-list-txt*/}
                          <div className="cart-close">
                            <span className="lnr lnr-cross" />
                          </div>
                          {/*/.cart-close*/}
                        </li>
                        {/*/.single-cart-list */}
                        <li className="total">
                          <span>Total: $0.00</span>
                          <button className="btn-cart pull-right">
                            view cart
                          </button>
                        </li>
                      </ul>
                    </li>
                    {/*/.dropdown*/}
                  </ul>
                </div>
                {/*/.attr-nav*/}
                {/* End Atribute Navigation */}
                {/* Start Header Navigation */}
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  <a className="navbar-brand" href="index.html">
                    GU<span>TREND</span>.
                  </a>
                </div>
                {/*/.navbar-header*/}
                {/* End Header Navigation */}
                {/* Collect the nav links, forms, and other content for toggling */}
                <div
                  className="collapse navbar-collapse menu-ui-design"
                  id="navbar-menu"
                >
                  <ul
                    className="nav navbar-nav navbar-center navbar_menu__content"
                    data-in="fadeInDown"
                    data-out="fadeOutUp"
                  >
                    <li className=" scroll active">
                      <a href="#home">home</a>
                    </li>
                    <li className="scroll">
                      <a href="#new-arrivals">new arrival</a>
                    </li>
                    <li className="scroll">
                      <a href="#feature">features</a>
                    </li>
                    <li className="scroll">
                      <a href="#blog">blog</a>
                    </li>
                    <li className="scroll">
                      <a href="#newsletter">contact</a>
                    </li>
                  </ul>
                  {/*/.nav */}
                </div>
                {/* /.navbar-collapse */}
              </div>
              {/*/.container*/}
            </nav>
            {/*/nav*/}
            {/* End Navigation */}
          </div>
          {/*/.header-area*/}
          <div className="clearfix" />
        </div>
        {/* /.top-area*/}
        {/* top-area End */}
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          {/*/.carousel-indicator */}
          <ol className="carousel-indicators">
            <li
              data-target="#header-carousel"
              data-slide-to={0}
              className="active"
            >
              <span className="small-circle" />
            </li>
            <li data-target="#header-carousel" data-slide-to={1}>
              <span className="small-circle" />
            </li>
            <li data-target="#header-carousel" data-slide-to={2}>
              <span className="small-circle" />
            </li>
          </ol>
          {/* /ol*/}
        </div>
        {/*/#header-carousel*/}
      </header>
      {/*/.welcome-hero*/}
      {/*welcome-hero end */}
    </div>
  );
}

export default Header;
