import { Link } from "react-router-dom";

const CtaBanner = () => {
  return (
    <div>
      {/* <!-- Banner --> */}
      <section className="banner" id="banner">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body text-center">
                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                  <br /> tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/cars">
                  <button className="btn btn-success">Mulai Sewa Mobil</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Akhir Banner --> */}
    </div>
  );
};

export default CtaBanner;
