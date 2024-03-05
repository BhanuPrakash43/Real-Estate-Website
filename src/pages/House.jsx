import ss1 from "../assets/images/ss-1.jpg";
import ss2 from "../assets/images/ss-2.jpg";
import ss3 from "../assets/images/ss-3.jpg";
import ss4 from "../assets/images/ss-4.jpg";
import ss5 from "../assets/images/ss-5.jpg";
import ss6 from "../assets/images/ss-6.jpg";

function House() {
  return (
    <>
      <section className="sale_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container">
            <h2>House For Sale</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the
            </p>
          </div>
          <div className="sale_container">
            <div className="box">
              <div className="img-box">
                <img src={ss1} alt="" />
              </div>
              <div className="detail-box">
                <h6>apartments house</h6>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={ss2} alt="" />
              </div>
              <div className="detail-box">
                <h6>apartments house</h6>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={ss3} alt="" />
              </div>
              <div className="detail-box">
                <h6>apartments house</h6>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={ss4} alt="" />
              </div>
              <div className="detail-box">
                <h6>apartments house</h6>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={ss5} alt="" />
              </div>
              <div className="detail-box">
                <h6>apartments house</h6>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={ss6} alt="" />
              </div>
              <div className="detail-box">
                <h6>apartments house</h6>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="#">Find More</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default House;
