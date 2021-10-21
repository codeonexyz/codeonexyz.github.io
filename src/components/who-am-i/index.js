import React from 'react';
import './index.css';

const WhoAmI = (props) => {
	return (
		<div className='wrapper text-center d-flex align-content-center flex-column'>
      <div className='bg'></div>
      <div className='overlay'></div>
      <div className='main align-self-center'>
        <h1 className='ff-montserrat-bold'>Mohamed <span>El Mehammedi</span></h1>
        <p>Fullstack Developer &nbsp;&bull;&nbsp; Freelancer &nbsp;&bull;&nbsp; Blogger</p>
        <nav>
          <ul>
            <li><a href="https://twitter.com/codeonexyz" className="icon-twitter"></a></li>
            <li><a href="https://facebook.com/codeone.xyz" className="icon-facebook-f"></a></li>
            <li><a href="https://instagram.com/codeone.xyz" className="icon-instagram"></a></li>
            <li><a href="https://github.com/codeonexyz" className="icon-github"></a></li>
            <li><a href="https://linkedin.com/in/mdelm" className="icon-linkedin"></a></li>
          </ul>
        </nav>
        {/*<span>&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>.</span>*/}
      </div>
    </div>
	);
};

export default WhoAmI;