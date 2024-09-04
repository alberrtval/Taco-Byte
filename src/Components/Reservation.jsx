import React, { useState, useEffect } from "react";
import "../Styles/seating.css";
import "../Styles/bootstrap.min.css";
import Modal from "./Modal";
import json from "../assets/seats.json";

export default function Reservation() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState([]);
  const [status, setStatus] = useState(false);
  const [seats, setSeats] = useState();
  const [name, setName] = useState("");
  const [seatSelected, setSeatSelected] = useState([]);

  useEffect(() => {
    setSeats(json);
  }, []);

  const pushToArr = (prop, key) => {
    selected.push(prop);
    seatSelected.push(key);
    setCount(count + 1);
  };
  const removeFromArr = (prop, key) => {
    selected.splice(selected.indexOf(prop), 1);
    seatSelected.splice(seatSelected.indexOf(key), 1);
    setCount(count - 1);
  };

  useEffect(() => {
    for (let el of selected) {
      el.target.classList.add("occupied");
      el.target.classList.toggle("selected");
    }
    for (let k of seatSelected) {
      json.main.firstRow.map(({ seat, isAvailable, reservedBy }) => {
        console.log(seat);
        console.log(isAvailable);
        if (seat === k) {
          isAvailable = "false";
        }
        console.log(json);
      });
    }
    setStatus(false);
  }, [status]);

  const handleClick = (e, key) => {
    e.target.classList.toggle("selected");
    e.target.classList.contains("selected")
      ? pushToArr(e, key)
      : removeFromArr(e, key);
  };

  return (
    <div className="mt-5 pt-5">
      <h1 className="text-info mt-2 text-center">Selecciona tu mesa</h1>
      <p className="text-center lighter">Precio de reservación: $10</p>
      <div className="container bg-dark justify-content-around align-items-center mt-2 p-3 mb-4 text-light rounded">
        <ul className="d-flex justify-content-around align-items-center flex-wrap showcase p-0">
          <li key="available">
            <a>Disponible:</a>
            <div className="d-inline-flex sun-solid icon ms-4"></div>
          </li>
          <li key="selected">
            <a>Seleccionado:</a>
            <div className="d-inline-flex sun-solid icon ms-4 selected"></div>
          </li>
          <li key="busy">
            <a>Ocupado:</a>
            <div className="d-inline-flex sun-solid icon ms-4 occupied"></div>
          </li>
        </ul>
      </div>
      <section
        id="seatchart"
        className="container border border-light p-4 rounded"
      >
        <div className="container mb-3 ps-5 pt-2 pb-4">
          <div className="row ">
            {!seats ||
              seats.main.firstRow.map(({ seat, isAvailable }, key) => {
                return (
                  <div className="col">
                    <div
                      key={seat}
                      className={`sun-solid icon ${isAvailable || "occupied"}`}
                      onClick={(e) => !isAvailable || handleClick(e, seat)}
                    ></div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container mb-3 ps-5 py-4">
          <div className="row ">
            {!seats ||
              seats.main.secondRow.map(({ seat, isAvailable }, index) => {
                return (
                  <div className="col">
                    <div
                      key={seat}
                      className={`sun-solid icon ${isAvailable || "occupied"}`}
                      onClick={(e) => !isAvailable || handleClick(e, seat)}
                    ></div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container mt-4 mb- bg-dark text-center text-light">
          <p>Bar de sushi</p>
        </div>
        <div className="container mb-3 ps-5 pt-2 pb-4">
          <div className="row ">
            {!seats ||
              seats.sushi.firstRow.map(({ seat, isAvailable }, index) => {
                return (
                  <div className="col">
                    <div
                      key={seat}
                      className={`sun-solid icon ${isAvailable || "occupied"}`}
                      onClick={(e) => !isAvailable || handleClick(e, seat)}
                    ></div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container mb-3 ps-5 py-4  ">
          <div className="row ">
            {!seats ||
              seats.sushi.secondRow.map(({ seat, isAvailable }, index) => {
                return (
                  <div className="col">
                    <div
                      key={seat}
                      className={`sun-solid icon ${isAvailable || "occupied"}`}
                      onClick={(e) => !isAvailable || handleClick(e, seat)}
                    ></div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center align-items-center flex-column ">
          <Modal status={setStatus} name={setName} price={count * 10} />
          <div className="lighter mt-1">
            Usted ha seleccionado <span>{count}</span> mesas, {count * 8}{" "}
            asientos por el precio de $<span>{count * 10}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
