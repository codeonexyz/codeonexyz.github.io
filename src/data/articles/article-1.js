import React from 'react';
import blogImg from '../../assets/images/blogs';
import { admin } from '../authors';
import { Link } from 'react-router-dom'; 

const article1 = {
	title: 'What is Typescript?',
	publishedDate: 'Oct. 24, 2021',
	description: 'The Complete Guide to Typescript and Why You Should Toss Your Old JavaScript Knowledge.',
	images: { 
		blogEntry: blogImg['img1jpg']
	},
	author: admin,
	key: 'what-is-typescript',
};

article1.body =	(
	<div className="text-dark">
		<h2 className="mb-0">{article1.title}</h2>
		<span className="text-muted ff-montserrat-italic">{article1.publishedDate}</span>{' | '}
		<Link to="/me" className="text-muted ff-montserrat-medium">{article1.author.name}</Link>
			<img className="img img-fluid my-4" src={blogImg["img1jpg"]} alt={article1.title} />
			<p><strong>TypeScript</strong> is a programming language developed and maintained by <strong>Microsoft</strong>. It is a strict syntactical superset of <strong>JavaScript</strong> and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.</p>

			<p>TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). There are multiple options available for transcompilation. Either the default TypeScript Checker can be used, or the Babel compiler can be invoked to convert TypeScript to JavaScript.</p>


			<p>TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.</p>

			<p>The TypeScript compiler is itself written in TypeScript and compiled to JavaScript. It is licensed under the <i>Apache License 2.0</i>. TypeScript is included as a first-class programming language in Microsoft Visual Studio 2013 Update 2 and later, alongside C# and other Microsoft languages. An official extension allows Visual Studio 2012 to support TypeScript as well. <i>Anders Hejlsberg</i>, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript.</p>

			<p>TypeScript was first made public in October 2012 (at version 0.8), after two years of internal development at Microsoft. Soon after the announcement, Miguel de Icaza praised the language itself, but criticized the lack of mature IDE support apart from Microsoft Visual Studio, which was not available on Linux and OS X at that time. As of April 2021 there is support in other IDEs and text editors, including Emacs, Vim, Webstorm, Atom and Microsoft's own Visual Studio Code.</p>

			<p>TypeScript originated from the shortcomings of JavaScript for the development of large-scale applications both at Microsoft and among their external customers. Challenges with dealing with complex JavaScript code led to demand for custom tooling to ease developing of components in the language.</p>

			<p>TypeScript developers sought a solution that would not break compatibility with the standard and its cross-platform support. Knowing that the current ECMAScript standard proposal promised future support for class-based programming, TypeScript was based on that proposal. That led to a JavaScript compiler with a set of syntactical language extensions, a superset based on the proposal, that transforms the extensions into regular JavaScript. In this sense TypeScript was a preview of what to expect of ECMAScript 2015. A unique aspect not in the proposal, but added to TypeScript, is optional static typing that enables static language analysis, which facilitates tooling and IDE support.</p>

			<h4>Why Should We Use TypeScript?</h4>

			<ul>
				<li>TypeScript simplifies JavaScript code, making it easier to read and debug.</li>
				<li>TypeScript is open source.</li>
				<li>TypeScript provides highly productive development tools for JavaScript IDEs and practices, like static checking.</li>
				<li>TypeScript makes code easier to read and understand.</li>
				<li>With TypeScript, we can make a huge improvement over plain JavaScript.</li>
				<li>TypeScript gives us all the benefits of ES6 (ECMAScript 6), plus more productivity.</li>
				<li>TypeScript can help us to avoid painful bugs that developers commonly run into when writing JavaScript by type checking the code.</li>
				<li>Powerful type system, including generics.</li>
				<li>TypeScript is nothing but JavaScript with some additional features.</li>
				<li>Structural, rather than nominal.</li>
				<li>TypeScript code can be compiled as per ES5 and ES6 standards to support the latest browser.</li>
				<li>Aligned with ECMAScript for compatibility.</li>
				<li>Starts and ends with JavaScript.</li>
				<li>Supports static typing.</li>
				<li>TypeScript will save developers time.</li>
				<li>TypeScript is a superset of ES3, ES5, and ES6.</li>
			</ul>

			<h4>What are the best IDEs for TypeScript development?</h4>

			<ul>
				<li>Visual Studio Code <span className="text-muted">(Windows, macOS, Linux)</span></li>
				<li>WebStorm <span className="text-muted">(Windows, macOS, Linux)</span></li>
				<li>NetBeans <span className="text-muted">(Windows, macOS, Linux)</span></li>
				<li>Vim <span className="text-muted">(Windows, macOS, Linux)</span></li>
				<li>Atom <span className="text-muted">(Windows, macOS, Linux)</span></li>
				<li>PhpStorm</li>
				<li>Notepad++ <span className="text-muted">(Windows)</span></li>
				<li>Eclipse <span className="text-muted">(Cross Platform)</span></li>
				<li>Intellij IDEA</li>
				<li>CodeLobster IDE</li>
				<li>Anglular IDE</li>
				<li>Visual Studio 2015 Community Edition</li>
				<li>Emacs <span className="text-muted">(Windows, Unix-like)</span></li>
			</ul>
		</div>
);

export default article1;