import React from 'react';
import './index.css';

export const Address = (props) => {
	return (
		<div className='bg-white align-self-stretch contact-box text-center p-4 shadow'>
			<div className='icon d-flex align-items-center justify-content-center'>
				<span className='icon-map-signs fs-8'></span>
			</div>
			<div>
				<h3 className='mb-4 ff-montserrat fs-5'>Address</h3>
				<p className='ff-montserrat-light fs-4 m-0'>{props.value}</p>
			</div>
		</div>
	);
};

export const ContactNumber = (props) => {
	return (
		<div className='bg-white align-self-stretch contact-box text-center p-4 shadow'>
			<div className='icon d-flex align-items-center justify-content-center'>
				<span className='icon-phone2 fs-8'></span>
			</div>
			<div>
				<h3 className='mb-4 ff-montserrat fs-5'>Contact Number</h3>
				<p className='ff-montserrat-light fs-4 m-0'>{props.value}</p>
			</div>
		</div>
	);
};

export const Email = (props) => {
	return (
		<div className='bg-white align-self-stretch contact-box text-center p-4 shadow'>
			<div className='icon d-flex align-items-center justify-content-center'>
				<span className='icon-paper-plane fs-8'></span>
			</div>
			<div>
				<h3 className='mb-4 ff-montserrat fs-5'>Email</h3>
				<p className='ff-montserrat-light fs-4 m-0'>{props.value}</p>
			</div>
		</div>
	);
};

export const Website = (props) => {
	return (
		<div className='bg-white align-self-stretch contact-box text-center p-4 shadow'>
			<div className='icon d-flex align-items-center justify-content-center'>
				<span className='icon-globe fs-8'></span>
			</div>
			<div>
				<h3 className='mb-4 ff-montserrat fs-5'>Website</h3>
				<p className='ff-montserrat-light fs-4 m-0'><a href={props.value}>{props.value}</a></p>
			</div>
		</div>
	);
};