import React from "react";
import "./styles.scss";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <h3 className="words">
            Hello, I'm <span className="name">Keerthana.T</span>
          </h3>
          <h3 className="words">Full-stack web developer!</h3>
          <p className="para">
            An enthusiastic Full Stack Web Developer with a strong set of
            technical skills and a dedication towards creating useful and
            interactive web application.
          </p>
        </div>

        <div className="photo">
          <img className="img" src="/image/img-7.jpg" alt="image" />
          <img className="img" src="/image/img-7.jpg" alt="image" />
          <img className="img" src="/image/img-7.jpg" alt="image" />
          <img className="img" src="/image/img-7.jpg" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Home;
