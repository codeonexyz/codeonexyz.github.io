import React from 'react';

const SectionHeading = (props) => {
	return (
		<div className={`text-center ${props.className}`}>
			<h2 className="ff-roboto-medium fs-10 text-dark">{props.title}</h2>
			{ props.subtitle ? <h6 size='sm' className="text-center text-dark ff-montserrat"><div style={{width: '60%', margin: '0 auto'}}>{props.subtitle}</div></h6> : '' }
		</div>
	);
};

export default SectionHeading;