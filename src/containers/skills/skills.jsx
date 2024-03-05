import React from "react";
import "./styles.scss";

const Skills = () => {
  return (
    <>
      <div className="image">
        <h2 className="heading">Front-end</h2>
        <div className="img-1">
          <div className="img">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              <img
                className="icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png"
                alt="HTML"
              />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                className="icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                alt="CSS"
              />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img
                className="icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png"
                alt="JS"
              />
            </a>
          </div>
          <div className="img">
            <a href="https://react.dev/">
              <img
                className="icon"
                src="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
                alt="REACT"
              />
            </a>
            <a href="https://tailwindcss.com/docs/installation">
              <img
                className="icon"
                src="https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png"
                alt="tailwind"
              />
            </a>
            <a href="https://sass-lang.com/documentation/">
              <img
                className="icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
                alt="sass"
              />
            </a>
          </div>
        </div>
        <h2 className="heading">Back-end</h2>
        <div className="img-2">
          <a href="https://nodejs.org/docs/latest/api/">
            <img
              className="icon"
              src="https://cdn.freelogovectors.net/svg10/node-js-logo-freelogovectors.net_.svg"
              alt="Nodejs"
            />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction">
            <img
              className="icon"
              src="https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png"
              alt="express"
            />
          </a>
          <a href="https://www.mongodb.com/docs/">
            <img
              className="icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
              alt="MongoDB"
            />
          </a>
        </div>
        <h2 className="heading">Tools</h2>
        <div className="img-3">
          <a href="https://docs.github.com/en">
            <img
              className="icon"
              src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
              alt="github"
            />
          </a>
          <a href="https://git-scm.com/doc">
            <img
              className="icon"
              src="https://git-scm.com/images/logos/1color-darkbg@2x.png"
              alt="git"
            />
          </a>
          <a href="https://docs.netlify.com/">
            <img
              className="icon"
              src="https://searchvectorlogo.com/wp-content/uploads/2023/06/netlify-logo-vector-2023.png"
              alt="netlify"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Skills;
