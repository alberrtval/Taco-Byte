import React from "react";
import "../Styles/bootstrap.min.css";
import alberto from "../Styles/Images/alberto.jpeg";
import moi from "../Styles/Images/moises.jpeg";
import gato from "../Styles/Images/gato.jpeg";
import roberto from "../Styles/Images/roberto.jpeg";
import fer from "../Styles/Images/qepd.jpeg";

/*Este apartado esta destinado a mostrar los diferentes programadores los cuales trabajaron para el desarrollo de está página web*/

export default function Developers() {
  return (
    <div className="mt-5 pt-5">
      <div className="mt-3">
        <div className="d-flex justify-content-around p-0 px-sm-5 mx-5 flex-wrap">
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src={moi}
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-warning p-1">
                Moises Marroquin
              </h5>
              <p className="card-text">Developer & Designer</p>
              <h6 className="card-text  p-2">El Salvador, San Salvador</h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src={alberto}
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-warning p-1">
                Alberto Ramos
              </h5>
              <p className="card-text">Developer & Designer</p>
              <h6 className="card-text  p-2">El Salvador, San Salvador</h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src={roberto}
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-warning p-1">
                Roberto Melgares
              </h5>
              <p className="card-text">Developer & Designer</p>
              <h6 className="card-text  p-2">El Salvador, San Salvador</h6>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around p-0 px-sm-5 mx-5 mt-4 flex-wrap">
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src={gato}
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-warning p-1">
                René Hernández
              </h5>
              <p className="card-text">Developer & Designer</p>
              <h6 className="card-text  p-2">El Salvador, San Salvador</h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src={fer}
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-warning p-1">
                Fernando Aquino
              </h5>
              <p className="card-text">Developer & Designer</p>
              <h6 className="card-text  p-2">El Salvador, Santa Ana</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
