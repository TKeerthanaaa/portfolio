import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent/page";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ryxtzno";
    const templateId = "template_h4902h3";
    const pubicKey = "2bubn6z9GXghf8Ysx";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Keerthana",
      message: message,
    };

    // send the email using EmailJs
    emailjs
      .send(serviceId, templateId, templateParams, pubicKey)
      .then((response) => {
        console.log("email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact_content_header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form onSubmit={handleSubmit} className="contact_content_form">
            <div className="contact_content_form_wrapper">
              <div>
                <input
                  required
                  className="inputName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  className="inputEmail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  className="inputDescription"
                  value={message}
                  rows="5"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
