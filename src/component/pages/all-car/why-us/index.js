const WhyUs = () => {
  return (
    <div>
      {/* <!-- Why Us --> */}
      <section className="why" id="why">
        <div className="container">
          <h2>Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
          <div className="fitur">
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <img src="images/icon_complete.png" alt="icon_complete" />
                    <h3>Mobil Lengkap</h3>
                    <p>
                      Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                      dan terawat
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <img src="images/icon_price.png" alt="icon_price" />
                    <h3>Harga Murah</h3>
                    <p>
                      Harga murah dan bersaing, bisa bandingkan harga kami
                      dengan rental mobil lain
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <img src="images/icon_24hrs.png" alt="icon_24hrs" />
                    <h3>Layanan 24 Jam</h3>
                    <p>
                      Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                      juga tersedia di akhir minggu
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <img
                      src="images/icon_professional.png"
                      alt="icon_professional"
                    />
                    <h3>Sopir Profesional</h3>
                    <p>
                      Sopir yang profesional, berpengalaman, jujur, ramah dan
                      selalu tepat waktu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Akhir Why Us --> */}
    </div>
  );
};

export default WhyUs;
