import React from "react";
import "../Styles/bootstrap.min.css";
import ivania from "../Styles/Images/ivania.jpg";
import lu from "../Styles/Images/lu.jpg";
import gio from "../Styles/Images/gio.jpg";
import andrea from "../Styles/Images/andrea.jpg";
import montano from "../Styles/Images/montano.jpg";

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
              src={ivania}
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-warning p-1">
                Ivania Lebrón
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
              src={lu}
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-warning p-1">
                Luciana Munguía
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
              src={andrea}
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-warning p-1">
                Andrea Velásquez
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
              src={gio}
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
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src={montano}
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-warning p-1">
                Fernando Montano
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
