import aboutImg from "../assets/images/about.jpg";
import square from "../assets/images/square.png";

function About() {
  return (
    <>
      <section className="about_section layout_padding-bottom">
        <div className="square-box">
          <img src={square} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Our Apartment</h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
