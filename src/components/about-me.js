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
            My goal as web developer is to help build applications that assist humanity. I want to help create more access to simple yet powerful code. I have always had a unique fascination with coding. After 5 years in the Emergency Department  I decided to chase my true passion of computer science. I quit my day job and started studying computer science daily. I could not afford a boot-camp so I spend every  day for 8 months coding, and finding mentors. I started by building every FreeCodeCamp project while simultaneously taking computer science, and algorithm courses . 
            After building over 20 projects with guidance from a mentor I started contributing to open source projects. 
            I then got involved with the FCC community as a moderator and mentor. 
            Shortly after I started taking projects for clients and helping tutor students who are new to CS.
            After hearing feedback from other students I started an algorithms and data structures meet-up in northern California.   
            </p>
            <h4>Project's I am building</h4>
            <p>
              {" "}
                I am currently working on building a django REST API with React on the front-end. 
                I assist with {" "}
               <a href="https://www.freecodecamp.com/" target="_blank" rel="noopener noreferrer">
                FreeCodeCamp,
              </a>{" "}
              and help tutor new indivials in Javascript. I am currently assisting with the babel
              open source project and a healthcare application in my spare time. I am also working on building 
              applications for the GitHub Hackaton October 26th presented by FCC.  
              
              
            </p>
            <p>
              I recently started{" "}
              <a
                href="https://www.firsttimersonly.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                my first contributions to the open source community. 
              </a>
                
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
                ReactJS, Bootstrap, NodeJS, ExpressJS, MongoDB, SCSS (learning Python/Django). 
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
