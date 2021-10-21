import React from 'react';
import { Card, CardBody } from 'reactstrap';
import './index.css';

const Counter = (props) => {
	const { number, title } = props; 

	return (
		<Card className='counter-wrap bg-white rounded-lg shadow' style={{borderWidth: '0'}}>
			<CardBody className='text-center'>
				<h3 className='number ff-roboto-bold fs-8'>{number}</h3>
				<span className='ff-roboto-light fs-4'>{title}</span>
			</CardBody>
		</Card>
	);
};

export default Counter;