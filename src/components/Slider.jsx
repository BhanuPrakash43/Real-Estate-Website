import ss7 from "../assets/images/ss-7.jpg";

function Slider() {
  return (
    <div className="hero_area" style={{ backgroundImage: { ss7 } }}>
      {/* <img src={ss7} alt="" /> */}
      <section className="slider_section ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 offset-md-1">
              <div className="detail-box">
                <h1>
                  <span> Modern</span> <br />
                  Apartment <br />
                  House
                </h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of
                </p>
                <div className="btn-box">
                  <a href="" className="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slider;
