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
              "I’m a DevOps Automation Engineer with 3+ years of experience in building automated, scalable and secure cloud environments. 
              I work on AWS, Kubernetes, Terraform, Jenkins and Ansible to create reliable CI/CD pipelines and infrastructure that support 
              high-performance applications. I enjoy automating manual tasks using Python, PowerShell and Bash, improving system reliability, 
              and solving real-world technical problems. I’ve contributed to enterprise projects like Office Depot (ODP), McLaren HealthCare and RBI, 
              where I helped streamline deployments, enhance monitoring and support production systems. My focus is on delivering clean automation, 
              stable infrastructure and smooth release cycles."
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
