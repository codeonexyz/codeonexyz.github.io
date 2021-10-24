import React from 'react';
import { Link } from 'react-router-dom';
import blogImg from '../../assets/images/blogs';
import { admin } from '../authors';
import Code from '../../components/code';

const article3 = {
	title: 'ExpressJS',
	publishedDate: 'Oct. 20, 2021',
	description: 'How to Use ExpressJS to Build Web Applications',
	images: { 
		blogEntry: blogImg['img3png'] 
	},
	author: admin,
	key: 'expressjs',
};

article3.body = (
	<div className="text-dark">
		<h2 className="mb-0">{article3.title}</h2>
		<span className="text-muted ff-montserrat-italic">{article3.publishedDate}</span>{' | '}
		<Link to="/me" className="text-muted ff-montserrat-medium">{article3.author.name}</Link>

		<img className="img img-fluid my-4" src={blogImg['img3png']} alt={article3.title} />

		<h4>What is ExpressJS?</h4>

		<p>Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

The original author, TJ Holowaychuk, described it as a Sinatra-inspired server, meaning that it is relatively minimal with many features available as plugins. Express is the back-end component of popular development stacks like the MEAN, MERN or MEVN stack, together with the MongoDB database software and a JavaScript front-end framework or library.</p>

		<p>Express.js was founded by TJ Holowaychuk. The first release, according to Express.js's GitHub repository, was on the 22nd of May, 2010. Version 0.12</p>

		<p>In June 2014, rights to manage the project were acquired by StrongLoop. StrongLoop was acquired by IBM in September 2015; in January 2016, IBM announced that it would place Express.js under the stewardship of the Node.js Foundation incubator.</p>

		{/*<h4>Why use ExpressJS?</h4>*/}

		<h4>Example</h4>

		<p>This line of code imports express in the node app:</p>

		<Code className="my-3">
			const express = require('express');
		</Code>

		<p>Initializing the app:</p>

		<Code className="my-3">	
			const app = express();
		</Code>

		<p>Getting the path request and sending the response with text:</p>

		<Code className="my-3">
			{"app.get('/', (req,res)=>{"}<br/>
    	{"res.send('Hi, your request has been received')"}<br/>
			{"})}"}
		</Code>

		<p>Listening at the port 2000:</p>

		<Code className="my-3">
			{"app.listen(2000, ()=>{"}<br/>
    	{"console.log('listening at https://localhost:2000')"}<br/>
    	{"})`}"}
		</Code>

		<p>After running this JavaScript file in the terminal by command "node nameOfFileHere", the server is started at:</p>

		<Code className="my-3">
			http://localhost:2000
		</Code>
		
		<p>The text "Hi, your request has been received" can be seen.</p>

	</div>
);

export default article3;