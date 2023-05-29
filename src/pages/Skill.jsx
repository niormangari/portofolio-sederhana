import React from "react";

function Skill() {
  return (
    <>
      <div className="container">
        <div className="row row_skill gap-4 p-4  ">
          <h3 className="text-center">Skill</h3>
          <div className="col-md-3 shadow  container_img_skill ">
            <img src={require("../images/html.png")} alt="html" className="img_skill" />
          </div>
          <div className="col-md-3 shadow  container_img_skill">
            {" "}
            <img src={require("../images/css.png")} alt="css" className="img_skill" />
          </div>
          <div className="col-md-3 shadow container_img_skill">
            {" "}
            <img src={require("../images/js.png")} alt="js" className="img_skill" />
          </div>
          <div className="col-md-3 shadow container_img_skill">
            {" "}
            <img src={require("../images/react.png")} alt="reactjs" className="img_skill" />
          </div>
          <div className="col-md-3 shadow container_img_skill">
            {" "}
            <img src={require("../images/express.png")} alt="expressjs" className="img_skill" />
          </div>
          <div className="col-md-3 shadow container_img_skill">
            <img src={require("../images/git.png")} alt="git" className="img_skill" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
