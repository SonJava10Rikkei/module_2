import React from "react";

function BrandsClient() {
  return (
    <>
      {/* clients strat */}
      <section id="clients" className="clients">
        <div className="container">
          <div className="owl-carousel owl-theme" id="client">
            <div className="item">
              <a href="#">
                <img src="../images/clients/c1.png" alt="brand-image" />
              </a>
            </div>
            {/*/.item*/}
            <div className="item">
              <a href="#">
                <img src="../images/clients/c2.png" alt="brand-image" />
              </a>
            </div>
            {/*/.item*/}
            <div className="item">
              <a href="#">
                <img src="../images/clients/c3.png" alt="brand-image" />
              </a>
            </div>
            {/*/.item*/}
            <div className="item">
              <a href="#">
                <img src="../images/clients/c4.png" alt="brand-image" />
              </a>
            </div>
            {/*/.item*/}
            <div className="item">
              <a href="#">
                <img src="../images/clients/c5.png" alt="brand-image" />
              </a>
            </div>
            {/*/.item*/}
          </div>
          {/*/.owl-carousel*/}
        </div>
        {/*/.container*/}
      </section>
      {/*/.clients*/}
      {/* clients end */}
    </>
  );
}

export default BrandsClient;
