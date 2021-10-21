import React from 'react';
import './index.css';

const Sidebar = (props) => {
	return (
		<div className='sidebar-box bg-light p-4'>
			<h3 className='heading-sidebar'>Recent Blog</h3>

			{props.children}

		</div>
	);
};

export default Sidebar;