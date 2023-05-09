import "./DetailMovie.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { BsFillHandThumbsUpFill } from "react-icons/bs"


function Chitiet() {
  const { state } = useLocation();
  console.log(state);

  const [showTimes, setShowTimes] = useState([]);
  const [toggleState, setToggleState] = useState(1);
  const [place, setPlace] = useState(1);
  const [calendar, setCalendar] = useState(0);
  const [type, setType] = useState(1);

  const navigate = useNavigate();


  const toggleTab = (index) => {
    setToggleState(index);
  };


  const buyTicket = () => {
    console.log(11111111);
    console.log(state.film_id);
    fetch('http://localhost:3001/movie/getShowTime/' + state.film_id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
  }

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

  const handleOutsideClick = (e) => {
    if (e.target.id === "exampleModal") {
      handleClose();
    }
  };

  const user = JSON.parse(localStorage.getItem("token"));
  const chooseShowTimes = (e) => {
    if (!user) {
      window.location.href = "/login";
      return;
    }
    fetch('http://localhost:3001/movie/getposition', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: e.currentTarget.title }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate('/ticket', { state: data.data })
      });
  }

  const Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const minutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"
    , "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"
  ];


  return (
    <div className="page-chitiet">
      <div className="product-view">
        <div className="product-essential">
          <div className="page-title product-view">
            <span className="h1">Nội Dung Phim</span>
          </div>
          <div className="product-name-reponsive">
            <h1>{state.name}</h1>
          </div>
          <div className="product-img-box">
            <div className="product-image product-image-zoom zoom-available">
              <div className="product-image-gallery">
                <img
                  id="image-main"
                  className="gallery-image visible"
                  src={state.poster}
                  alt={state.name}
                  title={state.name}
                />
              </div>
            </div>
          </div>
          <div className="product-shop">
            <div className="product-name">
              <span className="h1">{state.name}</span>
            </div>

            <div className="movie-director movie-info">
              <label>Đạo diễn: </label>
              <div className="std">&nbsp; {state.director} </div>
            </div>
            <div className="movie-actress movie-info">
              <label cursorshover="true">Diễn viên:</label>
              <div className="std">
                &nbsp; {state.actor}
              </div>
            </div>
            <div className="movie-genre movie-info">
              <label>Thể loại: </label>
              <div className="std">
                &nbsp; {state.genres}
              </div>
            </div>
            <div className="movie-release movie-info">
              <label>Khởi chiếu: </label>
              <div className="std">&nbsp; {state.dates_minium} </div>
            </div>
            <div className="movie-actress movie-info">
              <label>Thời lượng: </label>
              <div className="std">&nbsp; {state.length} phút</div>
            </div>
            <div className="movie-language movie-info">
              <label>Ngôn ngữ: </label>
              <div className="std">
                {/* &nbsp; {state.language} */}
                &nbsp; Tiếng Việt
              </div>
            </div>
            <div className="movie-rating movie-rated-web">
              <label cursorshover="true">Rated: </label>
              <div className="std">
                &nbsp; {state.rate}
              </div>
            </div>
          </div>
          <div className="movie-detail-fb-booking">
            <ul className="add-to-cart-wrapper">
          

              <li>
                {state.dates_minium !== undefined && <button type="button" title="Mua vé" className="button btn-booking"><span onClick={buyTicket}>Mua vé</span></button>}

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
                                setPlace(1);
                                setType(1);
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
                      <div className="modal-body">
                        <ul className="toggle-tabs-city">
                          {showTimes.map((Date) => (
                            <li key={Date.id} className={`${Date.id === calendar ? "appear" : "hide"}`}>
                              <ul>
                                {Date.Location.map((Location) => (
                                  <li key={Location.id} className={`${Location.id === place ? "location current-location" : "location"}`} onClick={() => {
                                    setPlace(Location.id);
                                    setType(1);
                                  }}>
                                    <span>{Location.place}</span>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="modal-body type-watch">
                        <ul className="toggle-tabs-type">
                          {showTimes.map((Date) => (
                            <li key={Date.id} className={`${Date.id === calendar ? "appear" : "hide"}`}>
                              <ul>
                                {Date.Location.map((Location) => (
                                  <li key={Location.id} className={`${Location.id === place ? "appear" : "hide"}`}>
                                    <ul>
                                      {Location.Movie_Type.map((Movie_Type) => (
                                        <li key={Movie_Type.id} className={`${Movie_Type.id === type ? "type current-type" : "type"}`} onClick={() => setType(Movie_Type.id)}>
                                          <span>{Movie_Type.type_name}</span>
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
                      <div className="modal-footer">
                        <ul>
                          {showTimes.map((DATE) => (
                            <li key={DATE.id} className={`${DATE.id === calendar ? "appear" : "hide"}`}>
                              <ul>
                                {DATE.Location.map((Location) => (
                                  <li key={Location.id} className={`${Location.id === place ? "appear" : "hide"}`}>
                                    <ul>
                                      {Location.Movie_Type.map((Movie_Type) => (
                                        <li key={Movie_Type.id} className={`${Movie_Type.id === type ? "appear" : "hide"}`}>
                                          <ul>
                                            {Movie_Type.Cinema.map((Cinema) => (
                                              <li style={{
                                                'textAlign': 'left'
                                              }} key={Cinema.id} className="cinema">
                                                <span>{Cinema.cinema_name}</span>
                                                <ul>
                                                  {Cinema.Site.map((Site) => (
                                                    <li style={{
                                                      'textAlign': 'left'
                                                    }} key={Site.id} className="site">
                                                      <span>{Site.site_name}</span>
                                                      <ul>
                                                        {Site.Time.map((Time) => {
                                                          const hour = new Date(Time.timeSt);
                                                          return (
                                                            <li key={Time.id} className="time" title={Time.id} onClick={chooseShowTimes}>
                                                              <span>{String(Time.timeSt).slice(0, 5)}</span>
                                                            </li>
                                                          )
                                                        })}
                                                        <br></br>
                                                      </ul>
                                                      <br></br>
                                                    </li>
                                                  ))}
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
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="product-collateral toggle-content tabs-format-cgv">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Chi tiết
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Trailer
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <p>
                {state.description}
              </p>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              {state.trailer !== undefined && <iframe
                width="560"
                height="315"
                src={state.trailer}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={state.name}
              ></iframe>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chitiet;

