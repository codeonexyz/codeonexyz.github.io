import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import memberImg from '../../assets/images/member';
import './index.css';

const AboutMe = (props) => {
	return (
		<div className='about-me img'>
			<Row className='d-flex no-gutters'>
				<Col md='12' lg='12' className='pl-md-5 pt-5'>
					{/*<div className='img-about img d-flex align-items-stretch'>
						<div className='overlay'></div>
						<div className='img d-flex align-items-stretch align-items-center' style={{backgroundImage: `url(${memberImg["aboutjpg"]})`}}></div>
					</div>*/}
					<div className='text-dark'>
							<p>I am a professional developer. I successfully develop IT projects.</p>
							<p>What distinguishes me on the market is my passion with which I create software. Each of my solutions is designed to meet your business needs in order to optimize most of repetitive tasks. That is why I put so much effort and care into building lasting business relations to achive mutual success.</p>
							<p>I excel at what I do. I aim at providing the best product efficienlty and quickly. My experience, innovation and diversity allows me to offer my clients the highest quality software suited to their needs. Most of my projects were initiated through recommendation.</p>
							<p>I primarly use Java and Javascript, but picking up a new framework or language isn't a problem. I have extensive programming experience and I'm comfortable developing on the frontend or backend as well as setting up or managing ifrastructure.</p>
							<p>Backend Development - My bread and butter is Spring and it's associated spring projects: Spring Boot, Spring Data, Spring Security, [...]. I am comfortable using Spring for all sort of projects: full CMS websites, database-driven web applications, REST-driven frontend applications and more.</p>
							<p>Frontend Development - More than 2 years I work with ReactJS, I have completed a wired range of projects using it. this is not the only framework I'm familiar with though, and I'm always happy to discuss my clien's needs and find the best solutions for them.</p>
							<p>Counselling regarding the right choice of products for your needs. I will answer every question and need. Do you want to konw what exactly I do?</p>
						</div>
				</Col>
			</Row>

			<Row>
					<Col md='12' lg='12' className='my-5 text-center'>
						{/*<Button href='/me' color='primary' outline size='lg' className='mr-4 px-4 ff-montserrat'>About</Button>*/}
						<Button href='/skills' color='primary' outline size='lg' className='mr-4 px-4 ff-montserrat'>Skills</Button>
						<Button href='/services' color='primary' outline size='lg' className='mr-4 px-4 ff-montserrat'>Services</Button>
						<Button href='/projects' color='primary' outline size='lg' className='mr-4 px-4 ff-montserrat'>Projects</Button>
						{/*<Button href='/blog' color='primary' outline size='lg' className='mr-4 px-4 ff-montserrat'>My Blog</Button>*/}
						<Button href='/contactme' color='primary' outline size='lg' className='mr-4 px-4 ff-montserrat'>Contact Me</Button>
					</Col>
				</Row>
		</div>
	);
};

export default AboutMe;