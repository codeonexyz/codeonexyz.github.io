import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.css';

const Footer = (props) => {
	return (
		<footer className='footer'>
			<Container>
				<Row>
					<Col>
						<div className='footer-widget'>
							<h2>About</h2>
							<p>I am a professional in creating web and mobile applications. I  also specialize in broadly defined internet marketing</p>
							<ul className="footer-social list-unstyled float-md-left float-lft mt-5">
                <li><a href="https://twitter.com/codeonexyz"><span className="icon-twitter"></span></a></li>
                <li><a href="https://facebook.com/codeone.xyz"><span className="icon-facebook"></span></a></li>
                <li><a href="https://instagram.com/codeone.xyz"><span className="icon-instagram"></span></a></li>
                <li><a href="https://github.com/codeonexyz"><span className="icon-github"></span></a></li>
                <li><a href="https://linkedin.com/in/mdelm"><span className="icon-linkedin"></span></a></li>
              </ul>
						</div>
					</Col>
					<Col>
						<div className='footer-widget'>
							<h2 className="heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><Link to="/"><span className="icon-long-arrow-right mr-2"></span>Home</Link></li>
                <li><Link to="/skills"><span className="icon-long-arrow-right mr-2"></span>Skills</Link></li>
                <li><Link to="/services"><span className="icon-long-arrow-right mr-2"></span>Services</Link></li>
                <li><Link to="/projects"><span className="icon-long-arrow-right mr-2"></span>Projects</Link></li>
                <li><Link to="/blog"><span className="icon-long-arrow-right mr-2"></span>Blog</Link></li>
              </ul>
						</div>
					</Col>
					<Col>
						<div className='footer-widget'>
							<h2 className="heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><Link to="/services"><span className="icon-long-arrow-right mr-2"></span>Web Development</Link></li>
                <li><Link to="/services"><span className="icon-long-arrow-right mr-2"></span>API Development</Link></li>
                <li><Link to="/services"><span className="icon-long-arrow-right mr-2"></span>Database Design</Link></li>
              </ul>
						</div>
					</Col>
					<Col>
						<div className='footer-widget'>
							<h2 className="heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul className='list-unstyled'>
	                <li><span className="icon icon-map-marker"></span><span className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nador, Morocco 62000</span></li>
	                <li><a href="/"><span className="icon icon-phone"></span><span className="text">&nbsp;&nbsp;&nbsp;&nbsp;+21253616347</span></a></li>
	                <li><a href="/"><span className="icon icon-envelope"></span><span className="text">&nbsp;&nbsp;&nbsp;&nbsp;codeone.xyz@gmail.com</span></a></li>
	              </ul>
	            </div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md='12' className='text-center mt-2'>
						<p>Copyright &copy; { (new Date().getFullYear()) } All rights reserved | codeone.xyz</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;