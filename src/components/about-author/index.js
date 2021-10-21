import React from 'react';
import memberImg from '../../assets/images/member';
import './index.css';

const AboutAuthor = (props) => {
  const { name, photo, bio } = props.author;

	return (
		<div className="about-author d-flex p-4 bg-white">
      <div className="bio mr-5">
        <img src={photo} alt="Image placeholder" className="img-fluid mb-4" />
      </div>
      <div className="desc">
        <h3 className='ff-roboto-medium'>{name}</h3>
        <p>{bio}</p>
      </div>
    </div>
	);
};

export default AboutAuthor;