import d1 from "../assets/images/d-1.jpg";
import d2 from "../assets/images/d-2.jpg";
import u1 from "../assets/images/u-1.png";
import u2 from "../assets/images/u-2.png";
import u3 from "../assets/images/u-3.png";
import u4 from "../assets/images/u-4.png";
import client from "../assets/images/client.jpg";

function DealWhyChooseCustomer() {
  return (
    <>
      <section className="deal_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Very Good Deal For House</h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <a href="#">Get A Quote</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <div className="box b1">
                  <img src={d1} alt="" />
                </div>
                <div className="box b1">
                  <img src={d2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end deal section */}

      {/* us section */}

      <section className="us_section layout_padding2">
        <div className="container">
          <div className="heading_container">
            <h2>Why Choose Us</h2>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src={u1} alt="" />
                </div>
                <div className="detail-box">
                  <h3 className="price">1000+</h3>
                  <h5>Numbers of House</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src={u2} alt="" />
                </div>
                <div className="detail-box">
                  <h3>20000+</h3>
                  <h5>Projects Delivered</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src={u3} alt="" />
                </div>
                <div className="detail-box">
                  <h3>10000+</h3>
                  <h5>Satisfied Customers</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src={u4} alt="" />
                </div>
                <div className="detail-box">
                  <h3>1500+</h3>
                  <h5>Cheap Rates</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="#">Get A Quote</a>
          </div>
        </div>
      </section>

      {/* end us section */}

      {/* client section */}

      <section className="client_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container">
            <h2>What is Says Our Customer</h2>
          </div>
          <div className="client_container">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="box">
                    <div className="img-box">
                      <img src={client} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        <span>Majority</span>
                      </h5>
                      <hr />
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="box">
                    <div className="img-box">
                      <img src={client} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        <span>Majority</span>
                      </h5>
                      <hr />
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="box">
                    <div className="img-box">
                      <img src={client} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        <span>Majority</span>
                      </h5>
                      <hr />
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span className="sr-only"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span className="sr-only"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* end client section */}
    </>
  );
}

export default DealWhyChooseCustomer;
