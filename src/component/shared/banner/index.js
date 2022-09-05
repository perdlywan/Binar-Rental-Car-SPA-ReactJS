import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      {/* <!-- navbar --> */}
      <section className="header" id="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#/">
              <img src="images/logo.png" className="img-fluid" alt="logo" />
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto mr-3">
                <li className="nav-item active">
                  <a className="nav-link" href="#services">
                    Our Services
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#why">
                    Why Us
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item active">
                  <button className="btn btn-success">Register</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      {/* <!-- Akhir Navbar --> */}

      {/* <!-- Header --> */}
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="title">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h1>
              <p className="sub-title">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas
                <br /> terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu
                <br /> untuk sewa mobil selama 24 jam.
              </p>
              <Link to="/cars">
                <button className="btn-mulai btn btn-success">
                  Mulai Sewa Mobil
                </button>
              </Link>
            </div>
            <div className="col-md-4">
              <img src="images/img_car.png" alt="img_car" className="car_img" />
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Akhir Header --> */}
    </div>
  );
};

export default Banner;
