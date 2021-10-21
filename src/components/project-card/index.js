import React from 'react';
import { connect } from 'react-redux';
import { toggleProjectPreviewModal } from '../../redux/actions';
import {
  Card, 
  CardImg, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
} from 'reactstrap';

const ProjectCard = (props) => {
	const { toggleProjectPreviewModal } = props;
	const { projectKey, img, title, subtitle } = props.project;

	return (
		<Card className="bg-white rounded-lg shadow text-dark" style={{borderWidth: '0'}}>
	    <CardImg 
	    	top 
	    	width="100%" 
	    	src={img} 
	    	alt="Card image cap" 
	    	style={{cursor: "pointer"}} 
	    	onClick={() => toggleProjectPreviewModal(projectKey)}
	    />
	    <CardBody className="text-center">
	      <CardTitle tag="h5" className='ff-montserrat fs-6'>{title}</CardTitle>
	      <CardSubtitle tag="h6" className="mb-2 text-muted fs-3" style={{fontSize: "14px"}}>{subtitle}</CardSubtitle>
	    </CardBody>
	  </Card>
	);
};

const mapActionsToProps = dispatch => ({
  toggleProjectPreviewModal: (projectKey) => dispatch(toggleProjectPreviewModal(projectKey)),
});

export default connect(
  null,
  mapActionsToProps
)(ProjectCard);