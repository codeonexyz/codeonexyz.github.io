import React from 'react';
import { Card, CardBody } from 'reactstrap';
import './index.css';

const ProgressCircle = (props) => {

	const { skill, percentage, lastWeek, lastMonth } = props;

	const percentageToDegrees = (percentage) => {
		return percentage / 100 * 360;
	};

	return (
		<Card className="progress-circle mb-5 bg-white rounded-lg shadow text-dark">
			<CardBody>
				
        <h2 className="h5 font-weight-bold text-center mb-4 ff-roboto-medium fs-5">{skill}</h2>
        <div className="progress mx-auto">
          <div 
          	className="progress-left"
          	style={ (percentage > 50) ? { transform: `rotate(${percentageToDegrees(percentage)}deg)` } : { display: 'none' } }
          >
            <div className="progress-bar border-primary"></div>
          </div>
          <div 
          	className="progress-right"
          	style={ (percentage <= 50) ? { transform: `rotate(${percentageToDegrees(percentage - 50)}deg)` } : { } }
          >
            <div className="progress-bar border-primary"></div>
          </div>
          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
            <div className="h2 font-weight-bold ff-montserrat-light fs-8">{percentage}<sup className="small">%</sup></div>
          </div>
        </div>
        <div className="row text-center mt-4">
          <div className="col-6 border-right">
            <div className="h4 font-weight-bold mb-0 ff-montserrat-light fs-6">{lastWeek}%</div>
            <div className="small text-muted">Last week</div>
          </div>
          <div className="col-6">
            <div className="h4 font-weight-bold mb-0 ff-montserrat-light fs-6">{lastMonth}%</div>
            <div className="small text-muted">Last month</div>
          </div>
        </div>

			</CardBody>
	  </Card>
	);
};

export default ProgressCircle;