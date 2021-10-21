import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css';

const HireMe = (props) => {
	return (
		<section className='hire-me img'>
			<div className='overlay'></div>
			<Container>
				<Row className='justify-content-center'>
					<Col className='text-center'>
						<h2 className='ff-roboto-bold fs-11'>I'm <span>Available</span> for freelancing</h2>
						<p>Do you have an idea? I will put it into practice.</p>
						<p className="mb-0 ff-montserrat ff-5">
							<a href='/' className="btn btn-primary py-3 px-5 ff-montserrat-medium fs-3">HIRE ME</a>
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HireMe;