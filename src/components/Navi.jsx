import React from "react";

const Navi = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid p-2 ">
          <a className=" text_brand navbar-brand navbar-dark ms-5" href="/">
            Weks.
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-dark me-5">
              <a className="text-link nav-link active" aria-current="page" href="#home">
                Home
              </a>
              <a className="text-link nav-link active" href="#about">
                About
              </a>
              <a className="text-link nav-link active" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navi;
