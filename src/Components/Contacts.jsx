import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

/*Este a partado esta destinado para mostrar las diferentes maneras de contacto con el restaurante mostrando su localizacion o redes sociales*/

export default function Contacts() {
  return (
    <div className="mt-5 pt-5">
      <div className="mt-3">
        <h2 className="text-center text-secondary">
          <b>¡Mantengamónos en contacto!</b>
        </h2>
        <div className=" d-flex text-center flex-wrap justify-content-around px-3 text-danger mt-5">
          <div>
            <h3 className="text-warning text-center mb-5">Teléfono</h3>
            <FontAwesomeIcon icon={faPhone} size="5x" />
            <h6 className="mt-4 text-light">Haz tus pedidos:</h6>
            <p className="mt-4 text-light">+503 1234 5678</p>
          </div>
          <div className="content-justify-center text-center">
            <h3 className="text-warning text-center mb-5">Dirección</h3>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="5x" />
            <h6 className="mt-4 text-light">Antiguo Cuscatlán frente</h6>
            <h6 className="mt-2 text-light">a Universidad Don Bosco</h6>
          </div>
          <div>
            <h3 className="text-warning text-center mb-5">Correo</h3>
            <FontAwesomeIcon icon={faEnvelope} size="5x" />
            <h6 className="mt-4 text-light">tacobyte@gmail.com</h6>
          </div>
          <div>
            <h3 className="text-warning text-center mb-5">Redes</h3>
            <FontAwesomeIcon icon={faFacebook} size="3x" />
            <h6 className="mt-4 mb-4 text-light">Taco Byte sv</h6>
            <FontAwesomeIcon icon={faTwitter} size="3x px-2" />
            <FontAwesomeIcon icon={faInstagram} size="3x" />
            <h6 className="mt-4 mb-4 text-light">@tacobyte</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
