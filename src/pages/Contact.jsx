import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" text_contact text-center mt-5 " id="contact">
        <h3>Contact</h3>
      </div>
      <div className="link_contact">
        <a href="mailto:niormangari@gmail.com">
          <img className="logo_contact" src="https://tse1.mm.bing.net/th?id=OIP.DKnMNGB6q4y3Iqtnt7X5WAHaHa&pid=Api&P=0&h=180" alt="email" />
        </a>
        <a href="https://www.instagram.com/juniormangari_">
          <img className="logo_contact" src="https://tse1.mm.bing.net/th?id=OIP.W3qszfgexOMKk9Nl_Owr4AHaHa&pid=Api&rs=1&c=1&qlt=95&w=122&h=122" alt="ig" />
        </a>
        <a href="https://web.facebook.com/">
          <img className="logo_contact" src="https://tse2.mm.bing.net/th?id=OIP.55DCXbXlKDgEBoZhKxpzLAHaHa&pid=Api&P=0&h=180" alt="fb" />
        </a>
        <a href="https://github.com/niormangari ">
          <img className="logo_contact" src="https://tse3.mm.bing.net/th?id=OIP.ckeUFk-yid0vfWnd56w7wAHaHa&pid=Api&P=0&h=180" alt="github" />
        </a>
      </div>
    </>
  );
};

export default Contact;
