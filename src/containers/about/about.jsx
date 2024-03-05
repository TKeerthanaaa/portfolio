import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { SiNetlify } from "react-icons/si";
import "./styles.scss";

const PDF_FILE_URL = "http://localhost:5173/about/file_pdf.pdf";

const About = () => {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <>
      <div className="box">
        <div className="picture">
          <img className="pic" src="/image/img-2.jpg" alt="image" />
        </div>
        <div className="content">
          <h3 className="words">About Me</h3>
          <p className="para">
            I’m a full-stack developer who is proficient in both front-end and
            back-end technologies, possessing a comprehensive skill set to
            handle various aspects of web development. I can design user
            interfaces, implement server-side logic, manage databases, and
            ensure seamless integration between components, contributing to
            end-to-end application development and functionality.
          </p>
          <ul className="icons">
            <a className="icon" href="https://www.linkedin.com/in/t-keerthana/">
              <li>
                <FaLinkedin />
              </li>
            </a>
            <a className="icon" href="https://github.com/">
              <li>
                <FaGithub />
              </li>
            </a>
            {/* <a className="icon" href="https://www.linkedin.com/in/t-keerthana/">
              <li>
                <SiNetlify />
              </li>
            </a> */}
          </ul>
          <button className="btn">
            <a href="public\resume\Keerthana_Resume.pdf">Resume</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
