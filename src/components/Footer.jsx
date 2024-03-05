import location from "../assets/images/location.png";
import phone from "../assets/images/phone.png";
import mail from "../assets/images/mail.png";
import fb from "../assets/images/fb.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import youtube from "../assets/images/youtube.png";
import { useState } from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});

  const submitNewsLetter = () => {
    if (!email) {
      // alert("Please enter your email.");
      setErrors({ email: "Please enter your email." });
      setShowError(true);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrors({ email: "Invalid email address." });
      setShowError(true);
      return;
    }

    alert("Thank you for subscribing.");
    setEmail("");
    setShowError(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    // Clear error state when email input changes
    if (errors.email) {
      setErrors({}); // Clear error state
      setShowError(false); // Hide error message
    }
  };

  return (
    <>
      {/* start info section */}

      <section className="info_section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_contact">
                <h5>Apartment Address</h5>
                <div>
                  <div className="img-box">
                    <img src={location} width="18px" alt="" />
                  </div>
                  <p>13/5, Lawgate, Jalandhar, Punjab 144001</p>
                </div>
                <div>
                  <div className="img-box">
                    <img src={phone} width="12px" alt="" />
                  </div>
                  <p>+91 7726905698</p>
                </div>
                <div>
                  <div className="img-box">
                    <img src={mail} width="18px" alt="" />
                  </div>
                  <p>contact@homeverse.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_info">
                <h5>Information</h5>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="info_links">
                <h5>Useful Link</h5>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_form">
                <h5>Newsletter</h5>
                <form action="">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                  <button type="button" onClick={submitNewsLetter}>
                    Subscribe
                  </button>
                </form>
                <div className="social_box">
                  <a href="https://www.facebook.com/">
                    <img src={fb} alt="" />
                  </a>
                  <a href="https://twitter.com/i/flow/login">
                    <img src={twitter} alt="" />
                  </a>
                  <a href="https://www.linkedin.com/home">
                    <img src={linkedin} alt="" />
                  </a>
                  <a href="https://www.youtube.com/">
                    <img src={youtube} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end info_section */}

      {/* footer section */}

      <section className="container-fluid footer_section">
        <div className="container">
          <p>
            &copy; Copyright <span id="displayYear">{currentYear}</span> All
            Rights Reserved By
            <a href="#bhanu"> Bhanu Prakash</a>
          </p>
        </div>
      </section>

      {/* end footer section */}
    </>
  );
}

export default Footer;
