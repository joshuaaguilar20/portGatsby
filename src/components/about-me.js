import React from "react";
import "./about-me.css";
import Img from "gatsby-image";
import Hobbies from "./hobbies";

const AboutMe = ({ profileImg, hobbyImgs }) => {
  return (
    <section id="about" className="section">
      <h2 className="text-center">ABOUT ME</h2>
      <div className="section-content">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Profile image"
              alt="Large image of Joshua"
              sizes={profileImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <h3>My Current Plans</h3>
            <p>
             My goal as web developer is to help change the world. I want to help create more access to 
             simple yet powerful code. I have always had a unique fasionation with coding, and computer
            science.  I have always found technology to give an advantage in an ever changing 
             world. After I started learning I noticed how much work truely needed to be done in the developer
             community. After 5 years in the medical field, I decided to chase my true passion of computer science. 
            </p>
            <h4>Project's I am building</h4>
            <p>
              {" "}
                I am currently working on building a dejango REST API with React on the frontEnd. 
                I finished the {" "}
              <a
                href="https://www.freecodecamp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FreeCodeCamp
              </a>{" "}
              front end curriculum, and run a algorithms meetup weekly. On top of
              FreeCodeCamp, I help tutor new indivials in Javascript at the Hacker Lab in Northern
              California. 
              
              
            </p>
            <p>
              I recently started{" "}
              <a
                href="https://www.firsttimersonly.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                my first contribution to the open source community. 
              </a>
              , attended my first hackathon, and completed the 100
              DaysOfCodeChallenge. I shared the skills and values gained on
              Medium.
            </p>
            <Hobbies icons={hobbyImgs} />
          </div>
        </div>
        <div className="row">
          <div className=" col-12 col-md-4 col-lg-4 offset-lg-1">
            <div className="box">
              <h5>Toolbox</h5>
              <p>
                <b>Languages and Frameworks:</b> Javascript, HTML5, CSS,
                ReactJS, Bootstrap, NodeJS, ExpressJS, MongoDB, SCSS. 
                <br />
                <b>IDE:</b> Microsoft VS Code
                <br />
                <b>VCS:</b> Git/Github
                <br />
                <br />
                <b>Debugger:</b> Chrome DevTools/VS Code
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 ">
            <div className="box">
              <h5>Learning</h5>
              <p>
                Currently:Python Dejango and  Advanced Redux
                <br /> On the radar: C++, Google Go
              </p>
            </div>
          </div>
          <div className="col-lg-4  col-md-4 col-6 ">
            <div className="box">
              <h5>Future Plans</h5>
              <p>
                {" "}
                1) Obtain Masters in Computer Science 
                <br />
                2) Finish My MERN Stack Email Application
                <br />
                3) Intergrate my developer skills with my current medical knowlege. 
                <br /> 4) assist in creating better healthcare software for the world.
                <br/>
                5) Create better access to free learning online. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
