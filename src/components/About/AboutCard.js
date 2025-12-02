import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adarsh Kumar jain </span>
            from <span className="purple"> Raghogarh, Guna, India.</span>
            <br />
            <br />
            I work with a wide range of DevOps and automation technologies, including Python, PowerShell, Bash and JavaScript for scripting and tooling. 
            <br />I build and manage infrastructure using Terraform, Ansible, Linux and cloud platforms like AWS, Azure and GCP. I create CI/CD pipelines using Jenkins and GitHub Actions, and deploy containerized applications with Docker, Kubernetes and Helm.
            <br /> I also use monitoring and observability tools such as Grafana, Prometheus and synthetic monitoring to ensure system reliability. Along with this, I automate AD, networking and O365 tasks, troubleshoot production issues and maintain strong version control practices using Git and GitHub.
            <br /><br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Experncing new Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing with AI
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
