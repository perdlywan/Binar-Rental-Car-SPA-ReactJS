import React, { useEffect, useState } from "react";
import Banner from "../../shared/banner";
import Footer from "../../shared/footer";
import axios from "axios";
import moment from "moment";

const RentCar = () => {
  const [cars, setCars] = useState([]);
  const [filterCar, setFilterCar] = useState({
    driver: "",
    tanggal: "",
    waktu: "",
    penumpang: 0,
  });

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      )
      .then((response) => {
        setCars(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getDriverType = (event) => {
    setFilterCar({
      driver: event.target.value,
    });
  };

  const getDateRent = (event) => {
    setFilterCar((prevState) => ({
      ...prevState,
      tanggal: event.target.value,
    }));
  };

  const getTimeRent = (event) => {
    setFilterCar((prevState) => ({
      ...prevState,
      waktu: event.target.value,
    }));
  };

  const getPassengerCount = (event) => {
    setFilterCar((prevState) => ({
      ...prevState,
      penumpang: parseInt(event.target.value),
    }));
  };

  const doFilterCars = () => {
    const filteredCarsData = cars.filter(
      (item) =>
        filterCar.penumpang <= item.capacity &&
        moment(item.availableAt).format("L") ==
          moment(filterCar.tanggal).format("L")
    );
    
    setCars(filteredCarsData);

  };

  return (
    <div>
      <Banner />
      {/* {/  <!-- Searchbox --> */}
      <section className="searchBox">
        <div className="container">
          <div className="card shadow rounded-lg">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3">
                  <div className="form-group">
                    <label for="">Tipe Driver</label>
                    <select
                      className="form-control"
                      id="tipeDriver"
                      placeholder="Pilih Tipe Driver"
                      onClick={(event) => getDriverType(event)}
                    >
                      <option value="1">Dengan Sopir</option>
                      <option value="0">Tanpa Sopir (Lepas Kunci)</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <label for="">Tanggal</label>
                    <input
                      type="date"
                      className="form-control"
                      id="tanggalRental"
                      placeholder="Pilih Tanggal"
                      onChange={(event) => getDateRent(event)}
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <label for="">Waktu Jemput/Ambil</label>
                    <input
                      type="time"
                      className="form-control"
                      id="waktuJemput"
                      onClick={(event) => getTimeRent(event)}
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <label for="">Jumlah Penumpang (Optional)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="jumlahPenumpang"
                      placeholder="Jumlah Penumpang"
                      onChange={(event) => getPassengerCount(event)}
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <label for="">&nbsp;</label>
                    <button
                      className="form-control btn btn-success"
                      id="searchBtn"
                      onClick={() => doFilterCars()}
                    >
                      Cari Mobil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Akhir Searchbox --> */}

      {/* <!-- Cars Content --> */}
      <section style={{ marginTop: "50px" }}>
        <div className="container">
          <div id="cars-container" className="row mt-4">
            {cars.map((value, index) => {
              return (
                <>
                  <div className="col-lg-4 py-3">
                    <div className="card">
                      <img
                        src={value.image}
                        className="card-img-top"
                        width="330"
                        height="220"
                      />
                      <div className="card-body">
                        <p>
                          {value.manufacture} / {value.model}
                        </p>
                        <p>{value.description}</p>
                        <p>
                          <span>
                            <img src="icon/fi_users.png" />
                          </span>
                          &nbsp;
                          {value.capacity} Orang
                        </p>
                        <p>
                          <span>
                            <img src="icon/fi_settings.png" />
                          </span>
                          &nbsp;
                          {value.transmission}
                        </p>
                        <p>
                          <span>
                            <img src="icon/fi_calendar.png" />
                          </span>
                          Tahun {value.year}
                        </p>
                        <a href="#" className="btn btn-success">
                          Pilih Mobil
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- Akhir Cars Content--> */}
      <Footer />
    </div>
  );
};

export default RentCar;
