import React from "react";
import "../Styles/bootstrap.min.css";
import "../Styles/cards.css";

export default function Menu() {
  return (
    <div className="bg-primary">
      <div className="bg-primary">
        <h3 className="mt-5 pt-5 px-5 text-warning">
          Opciones de Sushi
          <div className="line mt-2"></div>
        </h3>
        <div
          className="d-flex justify-content-around p-0 px-sm-5 mx-5 flex-wrap"
          id="wrapper"
        >
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="../img\burrito-chicken-close-up-delicious.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-danger p-1">
                Sushi De La Casa (x10)
              </h5>
              <h5 className="card-text">$25.00</h5>
              <h6 className="card-text text-warning p-2">
                Disponible en delivery
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="../img\tacos-de-pollo.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                Atlantico Roll (x7)
              </h5>
              <h5 className="card-text">$20.00</h5>
              <h6 className="card-text text-warning p-2">
                No disponible en delivery
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="../img\roast-turkey-breast-roll.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                Boneless Roll (x5)
              </h5>
              <h5 className="card-text">$15.00</h5>
              <h6 className="card-text text-warning p-2">
                No disponible en delivery
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="https://source.unsplash.com/EqoCUzG9200/600x300"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                California Roll (x10)
              </h5>
              <h5 className="card-text">$10.00</h5>
              <h6 className="card-text text-warning p-2">
                Disponible en delivery
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="https://source.unsplash.com/qL1epYy4hdU/600x300"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                Acevichado Roll (x10)
              </h5>
              <h5 className="card-text">$12.00</h5>
              <h6 className="card-text text-warning p-2">
                Disponible en delivery
              </h6>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-5 pt-5 px-5 text-warning">
        Otros
        <div className="line mt-2"></div>
      </h3>
      <div
        className="d-flex justify-content-around p-0 px-sm-5 mx-5 mb-5 flex-wrap"
        id="wrapper"
      >
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://source.unsplash.com/1Shk_PkNkNw/600x300"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 text-danger p-1">
              Hamburguesa (x1)
            </h5>
            <h5 className="card-text">$10.99</h5>
            <h6 className="card-text text-warning p-2">
              Disponible en delivery
            </h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://source.unsplash.com/qom5MPOER-I/600x300"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Ramen (x1)</h5>
            <h5 className="card-text">$7.99</h5>
            <h6 className="card-text text-warning p-2">
              Disponible en delivery
            </h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://source.unsplash.com/uU0Anw-8Vsg/600x300"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Pizza (x1)</h5>
            <h5 className="card-text">$12.00</h5>
            <h6 className="card-text text-warning p-2">
              Disponible en delivery
            </h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://source.unsplash.com/5c_aG2FDYEI/600x300"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Waffles (x10)</h5>
            <h5 className="card-text">$4.99</h5>
            <h6 className="card-text text-warning p-2">
              No disponible en delivery
            </h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://source.unsplash.com/enVg_Vtsw1c/600x300"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Postre</h5>
            <h5 className="card-text">$12.00</h5>
            <h6 className="card-text text-warning p-2">
              No disponible en delivery
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
