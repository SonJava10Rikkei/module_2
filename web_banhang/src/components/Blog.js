import React from "react";

function Blog() {
  return (
    <>
      {/*blog start */}
      <section id="blog" className="blog">
        <div className="container">
          <div className="section-header">
            <h2>latest blog</h2>
          </div>
          {/*/.section-header*/}
          <div className="blog-content">
            <div className="row">
              <div className="col-sm-4">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <img src="../images/blog/b1.jpg" alt="blog image" />
                    <div className="single-blog-img-overlay" />
                  </div>
                  <div className="single-blog-txt">
                    <h2>
                      <a href="#">Why Brands are Looking at Local Language</a>
                    </h2>
                    <h3>
                      By <a href="#">Robert Norby</a> / 18th March 2018
                    </h3>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt....
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <img src="../images/blog/b2.jpg" alt="blog image" />
                    <div className="single-blog-img-overlay" />
                  </div>
                  <div className="single-blog-txt">
                    <h2>
                      <a href="#">Why Brands are Looking at Local Language</a>
                    </h2>
                    <h3>
                      By <a href="#">Robert Norby</a> / 18th March 2018
                    </h3>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt....
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <img src="../images/blog/b3.jpg" alt="blog image" />
                    <div className="single-blog-img-overlay" />
                  </div>
                  <div className="single-blog-txt">
                    <h2>
                      <a href="#">Why Brands are Looking at Local Language</a>
                    </h2>
                    <h3>
                      By <a href="#">Robert Norby</a> / 18th March 2018
                    </h3>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt....
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/.container*/}
      </section>
      {/*/.blog*/}
      {/*blog end */}
    </>
  );
}

export default Blog;
