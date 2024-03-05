function Login() {
  return (
    <section className="">
      <div
        className="px-4 py-5 px-md-5 text-center text-lg-start"
        style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
      >
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                We Provide <br />
                <span className="text-primary">Best Offer</span>
              </h1>
              <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-4 display-5 fw-bold ls-tight">
                Sign Into Your Account
              </h1>
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        placeholder="Enter password"
                      />
                    </div>

                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form2Example31"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example31"
                          >
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>

                      <div className="col">
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign in
                    </button>

                    <div className="text-center">
                      <p>
                        Not a member? <a href="/signup">Register</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
