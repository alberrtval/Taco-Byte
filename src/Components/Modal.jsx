import React, { useRef, useState } from "react";
import "../Styles/dates.css";
import swal from "sweetalert";

export default function Modal({ status, name, price }) {
  const username = useRef(null);

  const getResult = () => {
    name(username.current.value);
    status(true);
    swal({
      title: "Reservación exitosa",
      text: `Has reservado ${price / 10} mesas por $${price} ¡Te esperamos!`,
      icon: "success",
      button: "Aceptar",
    });
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-warning text-primary rounded mt-1"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Confirmar reservación
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="999"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-primary lighter">
            <div className="modal-header">
              <h1 className="modal-title fs-5 lighter" id="staticBackdropLabel">
                Confirmar reservación
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column">
              <div className="container justify-content-between mb-3">
                <h5 className="lighter">Tu nombre completo:</h5>
                <div className="d-flex-inline input-group">
                  <input
                    required
                    ref={username}
                    id="reservationName"
                    type="text"
                    className="form-control bg-light text-dark rounded"
                    placeholder="Nombre completo"
                    aria-label="Nombre"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={getResult}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
