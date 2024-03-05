import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});

  const submitForm = () => {
    // Reset errors
    setErrors({});

    // Basic form validation
    if (!name || !email || !message) {
      setErrors({ send: "All fields are required." });
      setShowError(true);
      return;
    }

    // Email validation using a basic regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrors({ email: "Invalid email address." });
      setShowError(true);
      return;
    }

    // Show greetings
    alert(`Thank you, ${name}! We have received your message.`);

    // Clear form fields
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setShowError(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setShowError(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setShowError(false);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    setShowError(false);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setShowError(false);
  };

  return (
    <>
      <section className="contact_section">
        <div className="container">
          <div className="heading_container">
            <h2>Get In Touch</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="map_container">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.726399367144!2d75.7025685751335!3d31.255996560156934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1699101175655!5m2!1sen!2sin"
                    width="600"
                    height="500"
                    style={{ border: 0, width: "100%", height: "100%" }}
                    allowFullScreen
                    title="Google Maps"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="form_container">
                <form>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    {errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Message"
                      value={message}
                      onChange={handleMessageChange}
                      required
                    ></textarea>
                    {/* {errors.} */}
                  </div>
                  <div className="d-flex">
                    <button type="button" onClick={submitForm}>
                      Send
                    </button>
                  </div>
                  {showError && <span className="error">{errors.send}</span>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
