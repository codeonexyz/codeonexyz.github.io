import React from 'react';
import {
  Card,
  CardText, 
  CardBody,
  CardTitle
} from 'reactstrap';
import './index.css';

const ServiceCard = (props) => {
	const { title, description, icon } = props;

	return (
		<Card className="p-4 service bg-white rounded-lg shadow text-dark" style={{borderWidth: '1px'}}>
	    <CardBody className="text-center">
	    	<span className="icon fs-13">
					<i className={icon}></i>
				</span>
	      <CardTitle tag="h5" className='ff-roboto fs-6'>{title}</CardTitle>
	      <CardText className='ff-montserrat f-4'>{description}</CardText>
	    </CardBody>
	  </Card>
	);
};

export default ServiceCard;