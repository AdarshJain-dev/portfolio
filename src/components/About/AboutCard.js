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
            My primary focus is on building robust, efficient, and user-friendly solutions across web development, automation, and DevOps.  
            <br />I believe that a great application not only looks appealing but also delivers a seamless and optimized user experience.  
            <br />With expertise in Python, PowerShell, MySQL, PHP, and a wide range of DevOps tools, I’m always eager to take on new challenges  
            and collaborate on projects that drive innovation and exceed expectations.  
            <br /><br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Experncing new Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Onfile Games
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
