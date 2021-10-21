import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './index.css';

const HomeBanner = (props) => {
	return (
		<div className='home-banner d-flex flex-column align-content-center'>
			<div className='bg'></div>
			<div className='overlay'></div>
			<Container className='align-self-center text-center'>
				<h1 className='ff-montserrat-extra-bold fs-11 text-white'>Hi. This is <span className='ff-montserrat-extra-bold-italic text-primary'>codeone.xyz</span></h1>
				<p className='m-0 ff-montserrat-light fs-6 text-white'>I am a professional in creating web and mobile applications. I  also specialize in broadly defined internet marketing</p>
				<div className='mt-4'>
					<Button href='/me' color='primary' outline className='mr-4 px-4 ff-montserrat'>About</Button>
					<Button href='/skills' color='primary' outline className='mr-4 px-4 ff-montserrat'>Skills</Button>
					<Button href='/services' color='primary' outline className='mr-4 px-4 ff-montserrat'>Services</Button>
					<Button href='/projects' color='primary' outline className='mr-4 px-4 ff-montserrat'>Projects</Button>
					<Button href='/blog' color='primary' outline className='mr-4 px-4 ff-montserrat'>My Blog</Button>
					<Button href='/contactme' color='primary' outline className='mr-4 px-4 ff-montserrat'>Contact Me</Button>
				</div>
			</Container>
		</div>
	);
};

export default HomeBanner;