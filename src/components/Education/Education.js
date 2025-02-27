import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import education from "../../Assets/education.jpg";
import Achievments from "../../Assets/Achievments.jpg";

function Education() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row style={{ justifyContent: "center" }}>
                        <Col
                            md={6}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "00px",
                            }}
                        >
                            <h1>  <strong>Education ...</strong></h1>
                            <br />
                            <h3> Bechlores of Computer Application    
                            <br /></h3>
                            <h5>Amity University : 2022-2025</h5>
                            <br />
                            <h3> HCL Techbee Early Career Program    
                            <br /></h3>
                            <h5>HCL Technologies : 2021-2022</h5>
                            <br />
                            <h3> 12th CBSE   <br /></h3>
                            <h5>Hindupat Public SchoolGUNA :<br /> 2020-2021</h5>
                            <h5>Percentage : 85%</h5>
                            
                        </Col>
                        <Col md={5} style={{ paddingBottom: "2px", paddingTop: "30px" }} className="about-img">
                            <img src={education} alt="about" className="image-style" />
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center" }}>
                        <Col md={5} style={{ paddingBottom: "2px", paddingTop: "30px" }} className="about-img">
                            <img src={Achievments} alt="about" className="image-style" />
                        </Col>
                        <Col
                            md={6}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "00px",
                            }}
                        >
                            <h1><strong>Certifications ...</strong></h1>
                            <br />
                            <ul>
                                <li>AWS Certified Cloud Practitioner, AWS </li>
                                <li>Microsoft Certified: Azure Fundamentals, Microsoft </li>
                                <li>Microsoft Certified: Designing and Implementing Microsoft DevOps Solution</li>
                                <li>Google Certified: Associate Cloud Engineer</li>
                            </ul>
                            <br />
                        </Col>
                    </Row>

                </Container>
            </Container>
        </section>
    );
}

export default Education;