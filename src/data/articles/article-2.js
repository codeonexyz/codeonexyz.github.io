import React from 'react';
import blogImg from '../../assets/images/blogs';
import { admin } from '../authors';
import { Link } from 'react-router-dom';
import Code from "../../components/code";

const article2 = {
	title: 'Next.JS',
	publishedDate: 'Oct. 22, 2021',
	description: 'Next.JS and the Modern Web Development Framework',
	images: { 
		blogEntry: blogImg['img2jpg'] 
	},
	author: admin,
	key: 'nextjs',
};

article2.body =	(
	<div className="text-dark">
		<h2 className="mb-0">{article2.title}</h2>
		<span className="text-muted ff-montserrat-italic">{article2.publishedDate}</span>{' | '}
		<Link to="/me" className="text-muted ff-montserrat-medium">{article2.author.name}</Link>

		<img className="img img-fluid my-4" src={blogImg['img2jpg']} alt={article2.title} />

		<h4>What is Next.js?</h4>

		<p>Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites. React documentation mentions Next.js among "Recommended Toolchains" advising it to developers as a solution when "building a server-rendered website with Node.js". Traditional React apps render all their content in the client-side browser, Next.js is used to extend this functionality to include applications rendered on the server side.</p>

		<p>Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. React is a JavaScript library that is traditionally used to build web applications rendered in the client's browser with JavaScript. Developers recognize several problems with this strategy however, such as not catering to users who do not have access to JavaScript or have disabled it, potential security issues, significantly extended page loading times, and it can harm the site's overall search engine optimization. Frameworks such as Next.js sidestep these problems by allowing some or all of the website to be rendered on the server-side before being sent to the client. Next.js is one of the most popular components available in React. It is one of several recommended "toolchains" available when starting a new app, all of which provide a layer of abstraction to aid in common tasks. Next.js requires Node.js and can be initialized using Node Package Manager.</p>

		<p>Google has donated to the Next.js project, contributing 43 pull requests in 2019 where they helped in pruning unused JavaScript, reducing overhead time, and adding improved metrics. As of March 2020, the framework is used by many large websites, including Netflix, GitHub, Uber, Ticketmaster, and Starbucks. In early 2020, it was announced that Vercel had secured twenty-one million dollars in Series A funding to support improvements to the software. The framework's original author, Guillermo Rauch, is currently the CEO of Vercel and the project's lead developer is Tim Neutkens.</p>

		<h4>How to Install Next.JS in Your Project with 3 Simple Steps</h4>

		<p>There is no need to install a tool in on our system to build a Next.js project other than Node.js and NPM.</p>

		<h5 className="ff-roboto-bold">1. Install Nodejs</h5>

		<p>Node.js actually provides a runtime environment to execute JavaScript code from outside a browser. NPM, the default package manager for Nodejs is used for managing and sharing the packages for any JavaScript project. React uses Node.js and NPM for the management of dependencies and runtime.</p>

		<p>So first, it needs to install Nodejs on our system. NPM will be installed with Nodejs. The current stable version of Node.js can be downloaded and installed from the official website that is given below.</p>

		<Code className="my-3">
			<a href="https://nodejs.org">https://nodejs.org</a>
		</Code>

		<p>Download the latest version and install it. Here we can choose the LTS or the latest version. Because both of the version supports Next.js.</p>

		<p>After the installation, check the versions using the below commands from your <strong>command prompt</strong>.</p>

		<Code className="my-3">
			node -v<br/>npm -v
		</Code>	

		<p>This will show the installed versions of Node.js and NPM.</p>

		<h5 className="ff-roboto-bold">2. Create a new Next.js project</h5>

		<p>It is easy to create a Next.js app using the NPX tool. Open your command prompt and execute the commands below.</p>

		<p>But here, we are using the <strong>command prompt</strong> to create a Next.js app.</p>

		<Code className="my-3">
			npx create-next-app first-project
		</Code>

		<p>The command generates a Next.js app with the name <strong>first-project</strong>.</p>

		<p>If we have installed <strong>NPM</strong> and <strong>YARN</strong> on your system, we have to specify which is to be used to generate the Next.js app by the below command.</p>

		<Code className="my-3">
			npx create-next-app first-project --use-npm
		</Code>

		<p>If we need an example template to get an idea about the Next.js app file structure, use the below command.</p>

		<Code className="my-3">
			npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
		</Code>

		<h5 className="ff-roboto-bold">3. Running the application</h5>

		<p>So the app we created can run locally on our system with the <strong>npm run dev</strong> command.</p>

		<Code className="my-3">
			cd first-project<br/>npm run dev
		</Code>

		<p>This will opens up the Next.js application in a new tab of our browser with the below URL.</p>

		<img className="img img-fluid my-2" src={blogImg["next-defaultpng"]} alt="next default" />

	</div>
);

export default article2;