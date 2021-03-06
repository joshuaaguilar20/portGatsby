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
            After building  over 100  projects, taking 10 courses, and reading 50 books I was able to contribute. I started contributing to open source projects and 
            I  got involved with the FCC community as a moderator, and mentor. 
            Shortly after I started taking projects for clients, and helping tutor students who are new to CS.
            After hearing feedback from students, I started an algorithms and data structures meet-up in northern California. After 
            Learning Advanced algorithms I started attempting to build better healthcare applications. In December of 2018 I started working on building an open source EMR to improve our current  medical documentation. 
    I was Hired By IBM in March of 
            2019. I won the 2019 Medical hackathon for building an application that uses machine learning to document medication administrations. 
            
            </p>
            <h4>Project's I am building</h4>
            <p>
              {" "}
                I am currently working on building an advanced AI bot for healthcare providers. I am also involved with helping code for sacramento and helping with local government applications.
    
                I assist with {" "}
               <a href="https://www.freecodecamp.com/" target="_blank" rel="noopener noreferrer">
                FreeCodeCamp,
              </a>{" "}
              and help tutor new indivials in Javascript. I am currently assisting with the babel
              open source project, open EMR project  and the graphite blockchain application. This year I was able to compete in githubs 
              hackathon, sachacks,  Won Accenture Medical AI hackathon,  and we placed top 12 at facebook's F8. I am currently
              working on building NPM Packages, and commandline tools to improve my workflow. 
              
            </p>
            <p>
              I recently started{" "}
              <a
                href="https://www.open-emr.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                to give my contributions to the open source community. I  have contributed to 10 opensource projects in 2018-2019.  
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
                ReactJS, Bootstrap, NodeJS, ExpressJS, MongoDB, SCSS, REST-APIs, Postman, FireBase, Docker
                Redis, HTML5, NPM ,Pythons Pip, Sockets IO, MongoDB, Sequel(SQL), Redux, Web Hooks, Ajax, BashShell Scriping,
                Basic C, Nginix Load Balancing, Amazon S3/EC2 Web Services, Heroku, Docker
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
                Currently:building commandline tools for NPM, Using AI to improve Developer workflow  and Freelance Production Websites. 
                <br /> On the radar:Assembly, Advanced C++,  Ruby on Rails. 
              </p>
            </div>
          </div>
          <div className="col-lg-4  col-md-4 col-6 ">
            <div className="box">
              <h5>Future Plans</h5>
              <p>
                {" "}
                1) To build complex web applications, to assist humanity  on an enterprise level.  
                <br />
                2) Obtain Masters/PHD in Computer Science.
                <br />
                3) Intergrate my developer skills with my  medical knowlege. 
                <br /> 4) assist in creating better healthcare software and user experience .
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
