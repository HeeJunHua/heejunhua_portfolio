import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import { Date, Github } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper className="mb-5" aria-label="About Me Section">
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub Link"
                  href="https://github.com/HeeJunHua"
                >
                  Entry-Level IT Professional{' '}
                  <small>
                    <Github />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub Link"
                  id="cardHover"
                  href="https://github.com/HeeJunHua"
                  className="float-right"
                >
                  View GitHub
                </a>
                <p>
                  I am an enthusiastic and innovative IT graduate with a strong foundation in software and web development, database
                  management, and networking. Experienced in creating responsive, user-friendly applications, I am passionate about
                  leveraging my technical skills to solve challenging problems and contribute to scalable solutions. Skilled in full-stack 
                  development with expertise in technologies like React.js, Angular, .NET, and Node.js.
                </p>
              </li>
              <li>
                <h4>Final Year Projects</h4>
                <p>
                  For my final year project, I developed a <b>Fundraising & Food Waste Reduction System</b> in collaboration with my partner. 
                  This system addresses critical societal challenges: fundraising for charitable causes and reducing food waste. 
                  My focus was on building the <b>food waste reduction</b> component, while my partner specialized in the <b>fundraising</b> module.
                  Together, we utilized Laravel to create an integrated platform with features like user authentication, fundraising project tracking, 
                  and food donation management. The system also incorporates geocoding APIs for efficient location-based functionalities 
                  and employs a responsive interface built with Bootstrap to ensure usability across devices. This project showcases our ability 
                  to tackle complex problems, combining technical expertise with social responsibility.
                </p>
              </li>

            </ul>
          </article>
        </PageWrapper>

        {/* New Experience Section */}
        <PageWrapper className="mb-5" aria-label="Experience Section">
          <article>
            <h4>Internship Experience.</h4>
            <ul className="timeline">
              <li>
                <a href="https://www.lyjevents.com/" aria-label="Frontend Developer Internship">
                  Frontend Developer – LYJ Events & Marketing
                </a>
                <a className="float-right">
                  <Date /> <b>Feb 2024 – Aug 2024</b>
                </a>
                <p>
                  Developed visually appealing, responsive web interfaces using HTML, CSS, and JavaScript frameworks, increasing user engagement by 20%. Optimized application performance and code quality, reducing bug reports by 25%. Integrated RESTful APIs with backend teams, improving data synchronization speed by 30%.
                </p>
              </li>
              <li>
                <a href="https://lgms.global/" aria-label="Web Developer Internship">
                  Web Developer – LE Global Services Sdn Bhd
                </a>
                <a className="float-right">
                  <Date /> <b>Oct 2021 – Jan 2022</b>
                </a>
                <p>
                  Applied MVC architecture to improve code organization, boosting scalability by 40%. Enhanced user experiences with responsive designs using Bootstrap, resulting in a 10% increase in customer retention. Built high-performance web applications with Symfony PHP framework, reducing page load times by 20% and supporting 500+ concurrent users.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper className="mb-5" aria-label="Educational Background Section">
          <article>
            <h4>Educational Background.</h4>
            <ul className="timeline">
              <li>
                <a
                  href="https://focs.tarc.edu.my/programmes/bachelor-degree/bachelor-of-information-technology-honours-in-software-systems-deve-rsd"
                  aria-label="Bachelor's Degree in Software Systems Development"
                >
                  Bachelor’s Degree in Software Systems Development (KL Campus)
                </a>
                <a className="float-right">
                  <Date /> <b>2022 - 2024</b>
                </a>
                <p>
                  TARUMT. Specialized in web application development, software engineering, and cloud computing. Core subjects
                  included Web and Mobile Systems, Cloud Computing, and Problem-Solving Programming. Gained practical experience
                  through academic projects and internships.
                </p>
              </li>
              <li>
                <a
                  href="https://focs.tarc.edu.my/programmes/diploma/diploma-in-information-technology-dft"
                  aria-label="Diploma in Information Technology"
                >
                  Diploma in Information Technology (KL Campus)
                </a>
                <a className="float-right">
                  <Date /> <b>2020 - 2022</b>
                </a>
                <p>
                  Gained foundational knowledge in programming, database management, and networking. Key subjects included
                  Object-Oriented Programming, Fundamentals of Computer Networks, and Advanced Database Management.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        {/* New Language Section */}
        <PageWrapper className="mb-5" aria-label="Languages Section">
          <article>
            <h4>Languages.</h4>
            <ul className="timeline">
              <li>
                <ul>
                  <li>
                    <b>Chinese (Native proficiency)</b>
                    <p>Used in daily communication and professional settings, including speaking and understanding conversations.</p>
                  </li>
                  <li>
                    <b>Cantonese (Conversational)</b>
                    <p>Able to participate in basic conversations, understand cultural nuances, and engage in family-oriented discussions.</p>
                  </li>
                  <li>
                    <b>English (Professional working proficiency)</b>
                    <p>Experienced in using English for technical writing, communication with international teams, and conducting presentations.</p>
                  </li>
                  <li>
                    <b>Malay (Fluent)</b> 
                    <p>Able to engage in both formal and informal settings, often used for communication within the local community and in business contexts.</p>
                  </li>
                </ul>
              </li>
            </ul>
          </article>
        </PageWrapper>




        <PageWrapper className="mb-5" aria-label="Certificates, Qualification, and Skills Section">
          <article>
            <h4>Certificates, Qualification, and Skills.</h4>
            <ul className="timeline">
              <li>
                <a
                  href="https://drive.google.com/file/d/1-bsr3jDHYHy_3zYn11CFIN6dDgIFCBH7/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Diploma Certificate"
                >
                  Diploma Certificate
                </a>
                <p>
                  Achieved foundational knowledge in programming, database systems, and networking through hands-on coursework and 
                  projects. This certificate represents comprehensive training in IT fundamentals and problem-solving skills.
                </p>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1ySaAy5Mszdyij1qYge4m08K3NpmgTid1/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Bachelor Certificate (Temp)"
                >
                  Bachelor Certificate (Temp)
                </a>
                <p>
                  Specialized in software systems development with a focus on full-stack web applications, cloud computing, and 
                  advanced problem-solving techniques. Demonstrated expertise through academic projects and successful internships.
                </p>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/19k3QDjBqoobQC9wrIE2o-dMwUuQMWn-o/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Foundational-C-Sharp-with-Microsoft-Certification"
                >
                  Foundational-C# with Microsoft Certification
                </a>
                <p>
                  Verified proficiency in C# programming with a focus on object-oriented principles and .NET frameworks. Acquired 
                  skills in building scalable and maintainable applications that meet professional industry standards.
                </p>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1ImBGBNN_9Om4T-OPOajTh-3-xTKB4SPe/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Responsive Website"
                >
                  Responsive Website Certification
                </a>
                <p>
                  Certified in building responsive, user-friendly web interfaces using HTML, CSS, and JavaScript. Developed expertise 
                  in cross-platform compatibility and mobile-first design principles to enhance user experience.
                </p>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1WhNT8gCA4GjOQQ_nmhb7IfEazeJGWNWv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View MUET Certificates"
                >
                  MUET Certificates
                </a>
                <p>
                  Demonstrated strong command of the English language, showcasing advanced proficiency in listening, reading, 
                  writing, and speaking. This certification underscores communication skills crucial for team collaboration 
                  and stakeholder engagement.
                </p>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1jA1O4wDWJfzsdczDrm9JUW5eYvRO1_mW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View JavaScript Algorithms and Data Structures"
                >
                  JavaScript Algorithms and Data Structures Certification
                </a>
                <p>
                  Mastered the core concepts of JavaScript programming, including data structures and algorithmic problem-solving. 
                  Acquired the ability to write efficient, optimized code for modern web applications.
                </p>
              </li>
            </ul>
            <p>
              <b>Additional Skills:</b> Proficient in Full-Stack Development (React.js, Angular, Node.js, .NET), Responsive Design, API Development, and Cloud Integration. Experienced in building scalable web applications and creating robust database systems.
            </p>
          </article>
        </PageWrapper>

        <PageWrapper>
          <FooterLink goto="/resume" className="mt-3 mb-5">
          Lets Go To My Resume.
          </FooterLink>
          <br />
        </PageWrapper>
      </PageSection>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
