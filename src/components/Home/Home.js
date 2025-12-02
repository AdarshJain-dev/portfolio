import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Adarshprofile.jpg";
import SocialMedia from "../SocialMedia";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Adarsh Kumar Jain</strong>
                <h4>( DevOps Engineer | Automation )</h4>
              </h1>
                <br/>
              <p className="heading-description blockquote">
              "DevOps Automation Engineer with expertise in building scalable automation solutions and cloud deployments.
                Skilled in Python, PowerShell, PHP, and MySQL, with a strong command of front-end technologies like HTML,
                CSS, JavaScript, and React.js. Proficient in tools like Ansible, Bash, Git, and GitHub, and experienced with
                cloud platforms Azure and AWS. Passionate about streamlining workflows, enhancing system performance, and
                driving innovation through automation."
              </p>

            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
                <br/>
                <br/>
                <strong>Contact : +91 9179991046 </strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
