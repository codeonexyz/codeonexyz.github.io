import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const MiniBlogEntry = (props) => {
	const { images: { blogEntry }, title, publishedDate, author, key } = props.article;

	return (
		<div className='block-21 mb-4 d-flex'>
			<Link to={`/blog/${key}`} className='blog-img' style={{ backgroundImage: `url(${blogEntry})` }}></Link>
			<div className='text'>
				<h3 className="heading ff-roboto-medium fs-4"><Link to={`/blog/${key}`}>{title}</Link></h3>
	      <div className="meta fs-4">
	        <div><span className="icon-calendar"></span> {publishedDate}</div>
	        <div><Link to='/me'><span className="icon-person"></span> {author.name}</Link></div>
	        {/*<div><a href='/'><span className="icon-chat"></span> 19</a></div>*/}
	      </div>
			</div>
		</div>
	);
};

export default MiniBlogEntry;