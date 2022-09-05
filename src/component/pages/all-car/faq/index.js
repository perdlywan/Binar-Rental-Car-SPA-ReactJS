import {DownOutlined} from '@ant-design/icons'; 
const Faq = () => {
  return (
    <div>
      {/* <!-- FAQ --> */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-5 title">
              <h2>Frequently Asked Question</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-md-6">
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="clearfix mb-0">
                      <a
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Apa saja syarat yang dibutuhkan?
                        <DownOutlined className="iconArrow" />
                      </a>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Vel nobis voluptas facere sunt deleniti, enim non ad
                      accusantium, soluta dolor nam commodi voluptates unde ea
                      provident mollitia tempora minima ex!
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="clearfix mb-0">
                      <a
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        Berapa hari minimal sewa mobil lepas kunci?
                        <DownOutlined className="iconArrow" />
                      </a>
                    </h2>
                  </div>

                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos assumenda quasi quidem maiores tempore deserunt fuga
                      nam? Dolore aliquam praesentium incidunt eaque
                      consectetur, minima illum fugiat ea? Ullam, facere
                      voluptatem.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="clearfix mb-0">
                      <a
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        Berapa hari sebelumnya sabaiknya booking sewa mobil?{" "}
                        <DownOutlined className="iconArrow" />
                      </a>
                    </h2>
                  </div>

                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi ex voluptate exercitationem impedit adipisci! Quia
                      deleniti doloremque eaque dicta, error odit, blanditiis,
                      cumque minima maiores reiciendis possimus unde aspernatur?
                      Optio.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h2 className="clearfix mb-0">
                      <a
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                      >
                        Apakah Ada biaya antar-jemput?{" "}
                        <DownOutlined className="iconArrow" />
                      </a>
                    </h2>
                  </div>

                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Praesentium, dolores autem beatae at modi, natus quo
                      nesciunt cum vitae ea quis vel exercitationem, distinctio
                      minus quae. Amet libero corporis voluptatem?
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingFive">
                    <h2 className="clearfix mb-0">
                      <a
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                      >
                        Bagaimana jika terjadi kecelakaan{" "}
                        <DownOutlined className="iconArrow" />
                      </a>
                    </h2>
                  </div>

                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Et quia magnam repellat voluptas necessitatibus
                      repellendus tempore omnis aperiam asperiores pariatur
                      adipisci quae consectetur voluptatibus, expedita modi
                      perferendis corporis voluptatum facere?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Akhir FAQ --> */}
    </div>
  );
};

export default Faq;
