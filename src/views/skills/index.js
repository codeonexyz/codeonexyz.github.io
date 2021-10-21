import React, { Fragment } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import _ from 'lodash';
import Progress from '../../components/progress';
import ProgressCircle from '../../components/progress-circle';
import SectionHeading from '../../components/section-heading';
import HireMe from '../../components/hire-me';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Skills = (props) => {
	return (
		<Fragment>
			<Header />

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

      <HireMe />
			<Footer />
		</Fragment>
	);
};

export default Skills;