import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const BlogEntry = (props) => {

	const { images: { blogEntry }, title, description, publishedDate, author, key } = props.article;

	return (
		<div className='blog-entry justify-content-end shadow bg-light'>
			<Link to={`/blog/${key}`} className='blog-img block-20' style={{ backgroundImage: `url(${blogEntry})` }}></Link>
			<div className='text mt-3 float-right d-block p-4'>
				<h3 className='heading'><Link to={`/blog/${key}`} className='ff-montserrat'>{title}</Link></h3>
				<div className='d-flex align-items-center mb-3 meta'>
					<p className='mb-0 fs-3'>
						<span className='mr-2'>{publishedDate}</span>
						<a href='/me' className='mr-2'>{author.name}</a>
						{/*<a href='/' className='meta-chat'><span className='icon-chat'></span> 3</a>*/}
					</p>
				</div>
				<p className='ff-montserrat-light fs-3'>{description}</p>
			</div>
		</div>
	);
};

export default BlogEntry;