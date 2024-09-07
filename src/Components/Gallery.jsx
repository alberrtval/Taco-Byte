import React from "react";
import "../Styles/gallery.css";
import img from "../Styles/Images/taco.png";
import img2 from "../Styles/Images/imagen 2.jpg";
import img3 from "../Styles/Images/imagen 3.jpg";
import img4 from "../Styles/Images/imagen 4.jpg";

/*Este apartado nos permite mostrar de forma interactiva como se ver de manera fisica el restaurante*/

export default function Gallery() {
  return (
    <div className="">
      <div
        id="carouselExampleCaptions"
        className="carousel slide mt-4 pt-5 d-none d-md-block"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner d-flex align-items-center mt-2">
          <div className="carousel-item active">
            <img
              src={img}
              className="d-block ms-auto me-auto w-60 rounded"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block bg-primary rounded opacity-75">
              <h5 className="lighter">Recepción</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block ms-auto me-auto w-60 rounded"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block bg-primary rounded opacity-75">
              <h5 className="lighter">Mesas principales</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block ms-auto me-auto w-60 rounded"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block bg-primary rounded opacity-75">
              <h5 className="lighter">Bar de sushi</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img4}
              className="d-block ms-auto me-auto w-60 rounded"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block bg-primary rounded opacity-75">
              <h5 className="lighter">Terraza</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="mt-5 d-flex flex-column d-md-none justify-content-center align-content-center">
        <img src={img} alt="" className="py-2 rounded" />
        <h1 className="text-secondary">Recepcion</h1>
        <img src={img2} alt="" className="py-2 rounded" />
        <h1 className="text-secondary">Principales</h1>

        <img src={img3} alt="" className="py-2 rounded" />
        <h1 className="text-secondary">Bar</h1>

        <img src={img4} alt="" className="py-2 rounded" />
        <h1 className="text-secondary">Terraza</h1>
      </div>
    </div>
  );
}
