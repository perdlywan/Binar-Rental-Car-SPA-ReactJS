const OurServices = () => {
  return (
    <div>
      {/* <!-- Services --> */}
      <section className="services" id="services">
        <div className="container">
          <div className="row d-flex justify-content-around">
            <div className="col-md-5">
              <img
                src="images/img_service.png"
                alt="img_service"
                className="service_img img-fluid"
              />
            </div>
            <div className="col-md-5 services-text">
              <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <div className="desc-service">
                <img src="images/icon_centang.png" alt="" />
                <span className="desc-service-text">
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </span>
              </div>
              <div className="desc-service">
                <img src="images/icon_centang.png" alt="" />
                <span className="desc-service-text">
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </span>
              </div>
              <div className="desc-service">
                <img src="images/icon_centang.png" alt="" />
                <span className="desc-service-text">
                  Sewa Mobil Jangka Panjang Bulanan
                </span>
              </div>
              <div className="desc-service">
                <img src="images/icon_centang.png" alt="" />
                <span className="desc-service-text">
                  Gratis Antar - Jemput Mobil di Bandara
                </span>
              </div>
              <div className="desc-service">
                <img src="images/icon_centang.png" alt="" />
                <span className="desc-service-text">
                  Layanan Airport Transfer / Drop In Out
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Akhir Services --> */}
    </div>
  );
};

export default OurServices;
