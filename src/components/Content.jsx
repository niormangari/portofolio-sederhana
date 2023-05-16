import Logo from "../images/nior.jpg";

const Content = () => {
  return (
    <>
      <div className="image_box">
        <img className="image" src={Logo} alt="nior" />
      </div>
      <div className="text_profile mt-2 ">
        <h3>Junior</h3>
        <p>Front End Developer</p>
      </div>
    </>
  );
};

export default Content;
