import "./NowShowing.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';

function MovieNowShowing() {

  const isLaptop = useMediaQuery({ query: '(max-width: 960px)' });
  const isIpad = useMediaQuery({ query: '(max-width: 770px)' });

  const [showTimes, setShowTimes] = useState([]);
  const [calendar, setCalendar] = useState(0);

  const navigate = useNavigate();

  //call api to get data movie
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/movie/now-showing")
      .then((res) => res.json())
      .then((data) => {
        // data.data.movienowShowing = data.data.moviesNowShowingdate_minium + 1;
        
        setMovie(data.data.moviesNowShowing);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showDetailMovie = (e, film_id) => {
    const id = film_id;
    fetch('http://localhost:3001/movie/getdetailnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/movie/${data.data.movie[0].name}`, { state: data.data.movie[0] })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //add event click button to show modal
  const handleShow = (e) => {
    fetch('http://localhost:3001/movie/getShowTime/' + e.target.id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setShowTimes(data.data.Date);
      });


    const modal = document.getElementById("exampleModal");
    modal.classList.add("show");
    modal.setAttribute(
      "style",
      "display: block; padding-right: 16px; background-color: rgba(0, 0, 0, 0.9);"
    );
    const header = document.getElementById("header-container");
    header.setAttribute(
      "style",
      "display: block; padding-right: 16px; opacity: 0.9;"
    )
  };

  const user = JSON.parse(localStorage.getItem("token"));


  const chooseShowTimes = (e) => {
    if (!user) {
      window.location.href = "/login";
      return;
    }
    navigate('/ticket', { state: e.currentTarget.title });
  }


  //add event click button to hide modal
  const handleClose = () => {
    const modal = document.getElementById("exampleModal");
    modal.classList.remove("show");
    modal.setAttribute(
      "style",
      "display: none; padding-right: 0px; background-color: rgba(0, 0, 0, 0.5);"
    );
    const header = document.getElementById("header-container");
    header.setAttribute(
      "style",
      "display: block; padding-right: 16px; opacity: 1;"
    )
  };

  //add event when click outside modal to hide modal
  const handleOutsideClick = (e) => {
    if (e.target.id === "exampleModal") {
      handleClose();
    }
  };





  const Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="page-phim" id="now-movie">
      <div className="page-title category-title">
        <h1>Phim Đang Chiếu</h1>
      </div>
      <div className="flex-container category-products cgv-movies">
        <Row className="products-grid " md={isLaptop ? (isIpad ? 2 : 3) : 4}>
          {movie.map((item, index) => {
            return (
              <Col className="film-lists item last " key={index}>
                <div className="product-images">
                  <span className={`nmovie-rating nmovie-rating-${item.itemRate}`}></span>
                  <p
                    onClick={(e) => showDetailMovie(e, item.film_id)}
                    className="product-image"
                    cursorshover="true"
                  >
                    <img
                      title={item.name}
                      src={item.poster}
                      alt={item.name}
                      cursorshover="true"
                    />
                  </p>
                </div>
                <div
                  className="product-info"
                  style={{
                    minHeight: "0px",
                    maxHeight: "none",
                    height: "121px",
                  }}
                >
                  <h2 className="product-name" title={item.name} onClick={(e) => showDetailMovie(e, item.film_id)}>
                    {item.name}
                  </h2>
                  <div className="cgv-movie-info">
                    <span className="cgv-info-bold">Thể loại: </span>
                    <span className="cgv-info-normal">{item.genres}</span>
                  </div>
                  <div className="cgv-movie-info">
                    <span className="cgv-info-bold">Thời lượng: </span>
                    <span className="cgv-info-normal">{String(item.length).slice(0, 5)} phút</span>
                  </div>
                  <div className="cgv-movie-info">
                    <span className="cgv-info-bold">Khởi chiếu: </span>
                    <span className="cgv-info-normal">{String(item.dates_minium).slice(0, 10)}</span>
                  </div>
                </div>
                <ul className="add-to-links">
                  <li>
                    <button
                      type="button"
                      title="Mua vé"
                      className="button btn-booking"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      style={{"margin-left": "50px"}}
                      
                    >
                      <span onClick={handleShow} id={item.film_id}>MUA VÉ</span>
                    </button>
                    <div
                      className="modal fade "
                      onClick={handleOutsideClick}
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-xl modal-fullscreen-xl-down modal-dialog-scrollable ">
                        <div className="modal-content">
                          <div className="modal-header">
                            <ul className="toggle-tabs">
                              {showTimes.map((DATE) => {
                                const dAte = new Date(DATE.day);
                                return (
                                  <li key={DATE.id} className={`${DATE.id === calendar ? "date current" : "date"}`} onClick={() => {
                                    setCalendar(DATE.id);
                                  }}>
                                    <div className="day" title={DATE.day}>
                                      <span>{dAte.getMonth() + 1}</span>
                                      <em>{Day[dAte.getDay()]}</em>
                                      <strong>{dAte.getDate()}</strong>
                                    </div>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                          <div className="modal-footer">
                            <ul>
                              {showTimes.map((DATE) => (
                                <li key={DATE.id} className={`${DATE.id === calendar ? "appear" : "hide"}`}>
                                  <ul>
                                    {DATE.Cinema.map((Cinema) => (
                                      <li style={{
                                        'textAlign': 'left'
                                      
                                      }} key={Cinema.id} className="cinema">
                                        <span>{Cinema.cinema_name}</span>
                                        <ul>
                                          {Cinema.Site.map((Site) => (
                                            <li 
 
                                            key={Site.id} className="site">
                                              <span>{Site.site_name}</span>
                                              <ul>
                                                {Site.Time.map((Time) => {
                                                  return (
                                                    <li key={Time.id} className="time" title={Time.id} onClick={chooseShowTimes}>
                                                      <span>{String(Time.timeSt).slice(0, 5)}</span>
                                                    </li>
                                                  )
                                                })}
                                              </ul>
                                            </li>
                                          ))}
                                        </ul>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Col>
            );
          })}
        </Row>
      </div>
    </div >
  );
}

export default MovieNowShowing;



