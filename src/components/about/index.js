import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './index.css';
import imgs from '../../assets/images/imgs';

const About = (props) => {
	return (
		<div className='about bg-white py-5'>
			<Container>
				<Row>
					<Col md='4' lg='4'>
						{/*<h1 className='ff-montserrat-extra-bold fs-6 mb-4 text-dark'>Interesting stuff</h1>
						<Row className='mb-4'>
							<Col md='6' lg='6'><img src={imgs['pic04jpg']} className='img img-fluid'/></Col>
							<Col md='6' lg='6'><img src={imgs['pic05jpg']} className='img img-fluid'/></Col>
						</Row>
						<Row>
							<Col md='6' lg='6'><img src={imgs['pic06jpg']} className='img img-fluid'/></Col>
							<Col md='6' lg='6'><img src={imgs['pic07jpg']} className='img img-fluid'/></Col>
						</Row>*/}
						{/*<Button color='primary' className='mt-4 px-4 ff-montserrat-bold'>More</Button>*/}
					</Col>
					<Col md='8' lg='8' className='pl-5'>
						<h1 className='ff-montserrat-extra-bold text-dark fs-8 mb-4'>About me</h1>
						<p>I am a professional developer. I successfully develop IT projects.</p>
						<p>I primarly use Java and Javascript, but picking up a new framework or language isn't a problem. I have extensive programming experience and I'm comfortable developing on the frontend or backend as well as setting up or managing ifrastructure.</p>
						<p><b>Backend Development</b> - My bread and butter is Spring and it's associated spring projects: Spring Boot, Spring Data, Spring Security, [...]. I am comfortable using Spring for all sort of projects: full CMS websites, database-driven web applications, REST-driven frontend applications and more.</p>
						<p><b>Frontend Development</b> - More than 2 years I work with ReactJS, I have completed a wired range of projects using it. this is not the only framework I'm familiar with though, and I'm always happy to discuss my clien's needs and find the best solutions for them.</p>
						<p>What distinguishes me on the market is my passion with which I create software. Each of my solutions is designed to meet your business needs in order to optimize most of repetitive tasks. That is why I put so much effort and care into building lasting business relations to achive mutual success.</p>
						<p>I excel at what I do. I aim at providing the best product efficienlty and quickly. My experience, innovation and diversity allows me to offer my clients the highest quality software suited to their needs. Most of my projects were initiated through recommendation.</p>
						<p>Counselling regarding the right choice of products for your needs. I will answer every question and need. Do you want to konw what exactly I do?</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default About;