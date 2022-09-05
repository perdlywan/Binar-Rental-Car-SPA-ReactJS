const Footer = () => {
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer>
        <div className="container">
          <div className="row d-flex justify-content-around">
            <div className="col-lg-3">
              <ul className="list-unstyled kolom1">
                <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                <li>binarcarrental@gmail.com</li>
                <li>081-233-334-808</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list-unstyled kolom2">
                <li>
                  <a href="#services">Our Services</a>
                </li>
                <li>
                  <a href="#why">Why Us</a>
                </li>
                <li>
                  <a href="#testimonial">Testimonial</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5>Connect with us</h5>
              <ul className="list-unstyled medsos d-flex">
                <li>
                  <img src="images/icon_facebook.png" alt="facebook" />
                </li>
                <li>
                  <img src="images/icon_instagram.png" alt="instagram" />
                </li>
                <li>
                  <img src="images/icon_twitter.png" alt="twitter" />
                </li>
                <li>
                  <img src="images/icon_mail.png" alt="mail" />
                </li>
                <li>
                  <img src="images/icon_twitch.png" alt="twitch" />
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list-unstyled kolom4">
                <li>Copyright Binar 2022</li>
                <li>
                  <img src="images/logo.png" alt="logo" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Akhir Footer --> */}
    </div>
  );
};

export default Footer;
