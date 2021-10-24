import React from 'react';
import "./index.css";

const Code = (props) => {
	return (
		<div className={`code ${props.className}`}>	
			<code>{props.children}</code>
		</div>
	);
};

export default Code;