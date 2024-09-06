import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../Styles/bootstrap.min.css";
import "../Styles/styles.css";

/*Este es el header el cual se muestra por todas las diferentes secciones de la pagina web lo cual nos permite cambiar y navegar por las diferentes opciones que tiene la página web*/

export default function Header() {
  return (
    <div>
      <header className="fixed-top px-sm-5 mb-5 w-100 bg-primary">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand text-info" href="#">
              Taco Byte
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" href="#">
                    Home
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="menu" className="nav-link" href="./pages/menu.html">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="gallery"
                    className="nav-link"
                    href="./pages/galeria.html"
                  >
                    Galería
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="reservation"
                    className="nav-link"
                    href="./pages/seats.html"
                  >
                    Reservar mesa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="developers"
                    className="nav-link"
                    href="./pages/developers.html"
                  >
                    Desarrolladores
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="contacts"
                    className="nav-link"
                    href="./pages/contacts.html"
                  >
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
