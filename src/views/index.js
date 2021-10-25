import React, { Fragment } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import HomeBanner from '../components/home-banner';
import SectionHeading from '../components/section-heading';
import HireMe from '../components/hire-me';
import WhoAmI from '../components/who-am-i';
import BlogEntry from '../components/blog-entry';
import { Address, ContactNumber, Email, Website } from '../components/contact';
import ServiceCard from '../components/service-card';
import Counter from '../components/counter';
import About from '../components/about';
import Progress from '../components/progress';
import ProgressCircle from '../components/progress-circle';
import ProjectCard from '../components/project-card';
import ProjectPreview from '../components/project-preview';
import projects from '../data/projects';
import services from '../data/services';
import articles from '../data/articles';
import _ from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import { Button } from '@mui/material';

const Main = (props) => {
  return (
    <Fragment>
      <ProjectPreview />

      <Header />
      <WhoAmI />
      
      <About />

      <HireMe />


      {/* Skills */}
      <section className='my-5 pt-3'>
        <Container>
          <SectionHeading title="Skills" subtitle="I know the ropes of each of these technologies and in each of them I give my best, using the lastest solutions, in accordance with the latest IT trends." className='mb-5' />
          <Row>
            <Col lg="3">
              <ProgressCircle skill="ReactJS" percentage="96" lastWeek="32" lastMonth="64" />
            </Col>
            <Col lg="3">
              <ProgressCircle skill="ExpressJS" percentage="92" lastWeek="44" lastMonth="70" />
            </Col>
            <Col lg="3">
              <ProgressCircle skill="Jest" percentage="73" lastWeek="18" lastMonth="53" />
            </Col>
            <Col lg="3">
              <ProgressCircle skill="Spring Boot" percentage="82" lastWeek="18" lastMonth="53" />
            </Col>
          </Row>

          <Row>
            <Col md='6' lg='6'>
              <Progress skill='JavaScript (ES6)' percentage='97' />
            </Col>
            <Col md='6' lg='6'>
              <Progress skill='Typescript' percentage='83' />
            </Col>
          </Row>

          <Row>
            <Col md='6' lg='6'>
              <Progress skill='Java EE' percentage='90' />
            </Col>
            <Col md='6' lg='6'>
              <Progress skill='Python' percentage='87' />
            </Col>
          </Row>

          <Row>
            <Col md='6' lg='6'>
              <Progress skill='MongoDB (Mongoose)' percentage='91' />
            </Col>
            <Col md='6' lg='6'>
              <Progress skill='MySQL (Sequelize)' percentage='92' />
            </Col>
          </Row>

          <Row>
            <Col md='6' lg='6'>
              <Progress skill='Heroku' percentage='73' />
            </Col>
            <Col md='6' lg='6'>
              <Progress skill='AWS (S3, EC2, Cloudfront, Route53, SES)' percentage='73' />
            </Col>
          </Row>

          <Row>
            <Col md='6' lg='6'>
              <Progress skill='MongoDB Atlas' percentage='75' />
            </Col>
            <Col md='6' lg='6'>
              <Progress skill='Git' percentage='100' />
            </Col>
          </Row>

          <Row>
            <Col md='6' lg='6'>
              <Progress skill='Trello' percentage='98' />
            </Col>
            <Col md='6' lg='6'>
              <Progress skill='Scrum' percentage='95' />
            </Col>
          </Row>

        </Container>
      </section>

      {/* Services */}
      <section className='my-5 py-5 bg-white'>
        <Container>
          <SectionHeading title="Services" subtitle="Here's all the stuff I do." className='mb-5' />
          { !_.isEmpty(services) && _.chunk(services, 3).map((row, idx) => {
            return <Row key={idx}>
              { row.map((col, idx) => {
                return <Col md='4' className='mb-4' key={idx}>
                  <ServiceCard icon={col.icon} title={col.title} description={col.description} />
                </Col>
              }) }
            </Row>
          }) }
        </Container>
      </section>


      {/* Projects */}
      <section className='my-5 pt-3'>
        <Container>
          <SectionHeading title="Projects" subtitle="Here's some stuff I made recently." className='mb-5' />
          {
            projects && _.chunk(projects, 3).map((row, rowIdx) => {
              return (
                <Row className="mt-4" key={rowIdx}>
                  { 
                    row.map((col, colIdx) => {
                      return (
                        <Col md="4" key={colIdx}>
                          <ProjectCard project={col} />
                        </Col>
                      );
                    })
                  }
                </Row>
              );
            })
          }
        </Container>
      </section>
      
      <section className='my-5 py-5 bg-white'>
        <Container>
          <SectionHeading title="My Blog" className='mb-5' />
          <Row>
            { !_.isEmpty(articles) && _.map(articles, (article, idx) => {
              return (
                <Col md='4' key={idx}>
                  <BlogEntry article={article} />
                </Col>
              );
            }) }
          </Row>
        </Container>
      </section>


      {/* Contact Me */}
      <section className='my-5'>
        <Container>
          <SectionHeading title="Contact Me" subtitle="Put your confidence in me. Let's start a new project." className='mb-4' />
          <Row>
            <Col md='3'>
              <Address value='Nador, Morocco 62000' />
            </Col>
            <Col md='3'>
              <ContactNumber value='+21253616347' />
            </Col>
            <Col md='3'>
              <Email value='codeone.xyz@gmail.com' />
            </Col>
            <Col md='3'>
              <Website value='https://codeone.xyz/' />
            </Col>
          </Row>
        </Container>
      </section>


      <Footer />
    </Fragment>
  );
}

export default Main;