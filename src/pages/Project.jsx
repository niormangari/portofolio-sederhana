import React from "react";
import Porto from "../images/portofolio.png";
import Coffee from "../images/coffeeshop.png";
import Character from "../images/Character.png";

function Project() {
  return (
    <>
      <div className="container text-center">
        <div className="row  p-4 ">
          <h3 className="title_project">Project</h3>
          <div className="col-md-3  mt-3">
            <div className="card shadow ">
              <img src={Porto} className=" img_card card-img-top" alt="porto" />
              <div className="card-body">
                <h5 className="card-title">My Portofolio</h5>
                <p className="card-text">ReactJs, Bootstrap</p>
                <a href="http://weks.netlify.app/" className="btn btn-primary" target="_blank">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card shadow ">
              <img src={Coffee} className="img_card card-img-top" alt="coffee" />
              <div className="card-body">
                <h5 className="card-title">Coffee Shop</h5>
                <p className="card-text">ReactJs, ExpressJs, Bootstrap</p>
                <a href="https://wekscoffee.netlify.app/" className="btn btn-primary" target="_blank">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card shadow ">
              <img src={Character} className="img_card card-img-top" alt="anime" />
              <div className="card-body">
                <h5 className="card-title">Landing Page Anime</h5>
                <p className="card-text">ReactJs, Bootstrap</p>
                <a href="https://thismycharacter.netlify.app/" className="btn btn-primary" target="_blank">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card shadow ">
              <img src={Porto} className="img_card card-img-top" alt="porto" />
              <div className="card-body">
                <h5 className="card-title">My Portofolio</h5>
                <p className="card-text">ReactJs, Bootstrap</p>
                <a href="#" className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
