import React from "react";
import "../Styles/bootstrap.min.css";
import "../Styles/cards.css";

/*Está parte está destinada a la mostrar los diferentes productos que se tienen en el restaurante de una manera sofistacada y atractiva*/

export default function Menu() {
  return (
    <div className="bg-primary">
      <div className="bg-primary">
        <h3 className="mt-5 pt-5 px-5 text-warning">
          Nuestros productos
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
              src="../img\tacos-de-pollo.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-danger p-1">
                Tacos de la casa (x4)
              </h5>
              <h5 className="card-text">$6.50</h5>
              <h6 className="card-text text-warning p-2">
                Tacos de tu carne de preferencia marinada con piña, cilantro y
                cebolla. Un clásico.
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="../img\Enchiladas-Verde.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                Enchiladas verdes (x3)
              </h5>
              <h5 className="card-text">$8.99</h5>
              <h6 className="card-text text-warning p-2">
                Tortillas rellenas de pollo bañadas en salsa verde. Acompañadas
                de arroz y frijoles
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="../img\Huitlacoche-quesadilla.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                Quesadillas de Huitlacoche (x3)
              </h5>
              <h5 className="card-text">$7.99</h5>
              <h6 className="card-text text-warning p-2">
                Tortillas rellenas de queso y huitlacoche, servidas con
                guacamole.
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="../img\chile-relleno.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                Chiles Rellenos (x4)
              </h5>
              <h5 className="card-text">$9.99</h5>
              <h6 className="card-text text-warning p-2">
                Poblano relleno de queso o carne, frito y cubierto de salsa.
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="../img\tostadas-civiche.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                Tostadas de Ceviche (x3)
              </h5>
              <h5 className="card-text">$6.99</h5>
              <h6 className="card-text text-warning p-2">
                Tostadas con pescado marinado en limón, jitomate y aguacate.
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="../img\flautas-de-pollo.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                Flautas de Pollo (x6)
              </h5>
              <h5 className="card-text">$7.50</h5>
              <h6 className="card-text text-warning p-2">
                Tortillas crujientes rellenas de pollo, servidas con crema y
                queso.
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="../img\tamal.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                Tamal tradicional-Unidad
              </h5>
              <h5 className="card-text">$2.00</h5>
              <h6 className="card-text text-warning p-2">
                Tamales de pollo o cerdo, cocidos al vapor, servidos con
                frijoles.
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
            src="../img\guacamole-casero.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 text-danger p-1">
              Guacamole Casero
            </h5>
            <h5 className="card-text">$4.99</h5>
            <h6 className="card-text text-warning p-2">
              Aguacate fresco con tomate, cebolla y limón, servido con totopos.
            </h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="../img\Pozole-rojo.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 text-danger p-1">Pozole Rojo</h5>
            <h5 className="card-text">$9.99</h5>
            <h6 className="card-text text-warning p-2">
              Guiso de cerdo y maíz en caldo rojo, con lechuga y rábanos.
            </h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="../img\Mole.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 text-danger p-1">Mole Poblano</h5>
            <h5 className="card-text">$10.99</h5>
            <h6 className="card-text text-warning p-2">
              Pollo en mole de chiles y chocolate, acompañado de arroz.
            </h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="../img\Horchata.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">
              Agua de Horchata
            </h5>
            <h5 className="card-text">$2.50</h5>
            <h6 className="card-text text-warning p-2">
              Bebida refrescante de arroz con canela y un toque de vainilla.
            </h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="../img\Jamaica.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Agua de Jamaica</h5>
            <h5 className="card-text">$2.50</h5>
            <h6 className="card-text text-warning p-2">
              Infusión fría de flor de jamaica, ligeramente endulzada, perfecta
              para acompañar tu comida.
            </h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="../img\cerveza.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">
              Cerveza Nacional
            </h5>
            <h5 className="card-text">$3.50</h5>
            <h6 className="card-text text-warning p-2">
              Disfruta de una cerveza mexicana bien fría para acompañar tu
              comida.
            </h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="../img\flan.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Flan Casero</h5>
            <h5 className="card-text">$3.00</h5>
            <h6 className="card-text text-warning p-2">
              Postre tradicional mexicano, suave y cremoso, con caramelo.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
