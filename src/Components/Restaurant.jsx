import React from "react";
import "../Styles/bootstrap.min.css";
import "../Styles/styles.css";

export default function Restaurant() {
  return (
    <div className="bg-primary px-5">
      <main className="lg:px-5 py-5 container-fluid mt-5">
        <article className="d-flex lg:ps-5 py-3 pt-5 gap-3 justify-content-around align-items-center flex-wrap text-center">
          <section className="info">
            <h1 className="fw-bold lighter lh-lg">Comida de la mejor</h1>
            <h1 className="lighter lh-lg">
              <span className="text-warning">calidad</span> &
              <span className="text-danger"> sabor.</span>
            </h1>
            <h1 className="lighter lh-lg">Servida en menos de</h1>
            <h1>
              <span className="lighter lh-lg">40 minutos.</span>
            </h1>
            <h1 className="lighter lh-lg">
              <span className="text-info">Taco Byte</span>
            </h1>
          </section>
          <section className="img lg:pe-5">
            <img
              src="../img\taco.png"
              alt="Sushi"
              className="rounded"
              width="500px"
            />
          </section>
        </article>
      </main>
      <div className="line mt-3"></div>
      <div className="py-3 d-flex justify-content-around align-items-center flex-wrap lighter">
        <div className="d-flex flex-column align-items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon mb-1"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="fs-5">
            Delivery de <span className="text-danger">8:00 am</span>
          </div>
          <div>
            a <span className="text-warning">6:00 pm</span>
          </div>
        </div>
        <div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>Antiguo Cuscatlán frente a</div>
            <div className="text-warning">Universidad Don Bosco</div>
          </div>
        </div>
        <div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>Contáctanos al</div>
            <div className="text-danger">+503 1234 5678</div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
