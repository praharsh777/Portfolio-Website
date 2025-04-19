import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import '../styles/ProjectCard.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AI-Based Social Media Trend Analyzer",
      description: "This social media trend analyzer uses NLP, sentiment analysis, and data visualization to track trends by matching keywords in comments against a stored database.",
      imgUrl: projImg4,
      url: "https://github.com/praharsh777/Ai--Based-Social-media-Trend-analyzer", // Replace with your actual URL
    },
    {
      title: "AI-Driven Sign language translator",
      description: "Developed an AI system that translates hand gestures into real-time text and speech using Deep Learning, OpenCV, and TensorFlow, enhancing accessibility.",
      imgUrl: projImg2,
      url: "https://github.com/praharsh777/Ai-Based-Sign-Language-Translator", // Replace with your actual URL
    },
    {
      title: "E-Commerce Price Tracker – Dynamic Price Monitoring",
      description: "Built a Flask-based application to scrape real-time product data from Amazon and Flipkart, sending price-drop alerts while tracking over 1,000 products daily.",
      imgUrl: projImg3,
      url: "https://github.com/praharsh777/E-Commerce-Price-Tracker-Dynamic-Price-Monitoring/tree/master", // Replace with your actual URL
    },
    {
      title: "Smart Attendance Portal",
      description: "This Flask-based system streamlines student attendance using face recognition and Wi-Fi authentication, preventing proxy attendance and reducing biometric congestion. ",
      imgUrl: projImg1,
      url: "https://github.com/praharsh777/Student-Attendance-System-Primary-/tree/master", // Replace with your actual URL
    },
    {
      title: "Automated GPT reporting, email scheduling,and data processing.",
      description: "Automated the retrieval, processing, and storage of Woken GPT reports in GCS via POSTAPI, improving efficiency and enabling seamless scheduling of weekly email reports.",
      imgUrl: projImg5,
      url: "https://docs.google.com/document/d/1MoIerFtfqE7grxp_yrX0pVZ7QwEFNZigxIcMnUiZjoU/edit?usp=sharing", // Replace with your actual URL
    },
    {
      title: "CoBuy-A collaborative Purchasing Platform",
      description: "CoBuy is a collaborative purchasing platform built with Tailwind CSS and Flask, connecting users to share subscriptions and cut costs efficiently🚀",
      imgUrl: projImg6,
      url: "https://github.com/praharsh777/CoBuy", // Replace with your actual URL
    },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Driven by curiosity and a passion for innovation, I am always motivated to build impactful projects that solve real-world challenges. Using Flask, Tailwind CSS, and AI-driven solutions, I craft seamless experiences with automation and intelligent design. Each project reflects my enthusiasm for continuous learning and creating meaningful technological advancements."</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
