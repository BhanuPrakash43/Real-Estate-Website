function Find() {
  return (
    <section className="find_section">
      <div className="container">
        <form action="">
          <div className="form-row">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Search Your Categories"
              />
            </div>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Location"
              />
            </div>
            <div className="col-md-2">
              <button type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Find;
