import React from 'react';
import './index.css';

const Progress = (props) => {

	const percentage = parseInt(props.percentage);

	return (
		<div className="progress-wrap ftco-animate text-dark">
			<h3 className='ff-roboto-medium fs-4'>{props.skill}</h3>
			<div className="progress">
			 	<div className="progress-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" style={{width: `${percentage}%`}}>
			    <div className="ff-montserrat-light fs-4" style={{top: '-24px'}}>{percentage}%</div>
			  </div>
			</div>
		</div>
	);
};

export default Progress;