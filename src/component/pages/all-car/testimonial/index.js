const Testimonial = () => {
  return (
    <div>
      {/* <!-- Testimonial --> */}
      <section className="testimonial" id="testimonial">
        <h2 className="text-center">Testimonial</h2>
        <p className="text-center">
          Berbagai review positif dari para pelanggan kami
        </p>

        <div className="col-lg-6 m-auto">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <img
                          src="images/img_boy.png"
                          alt="img_boy"
                          className="img_person center-block d-block mx-auto"
                        />
                      </div>
                      <div className="col-sm-9">
                        <img
                          src="images/Rate.png"
                          alt="Rate"
                          className="img_rate"
                        />
                        <p>
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <h6>John Dee 32, Bromo</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <img
                          src="images/img_girl.png"
                          alt="img_boy"
                          className="img_person center-block d-block mx-auto"
                        />
                      </div>
                      <div className="col-sm-9">
                        <img
                          src="images/Rate.png"
                          alt="Rate"
                          className="img_rate"
                        />
                        <p>
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <h6>Carlina 28, Bandung</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <img
                          src="images/img_girl2.png"
                          alt="img_boy"
                          className="img_person center-block d-block mx-auto"
                        />
                      </div>
                      <div className="col-sm-9">
                        <img
                          src="images/Rate.png"
                          alt="Rate"
                          className="img_rate"
                        />
                        <p>
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <h6>Elisa 22, Batam</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </button>
          </div>
        </div>
      </section>
      {/* <!-- Akhir Testimonial --> */}
    </div>
  );
};

export default Testimonial;
