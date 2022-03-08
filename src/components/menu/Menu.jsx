import React from 'react';
import './menu.scss'
const Menu = () => {
	return(
		<>
			<div className='menu'>
				<ul className=''>
				
					<li className=''>
						<a href='#intro'>Home</a>
					</li>
					
					<li className=''>
						<a href='#portfolio'>Portfolio</a>
					</li>
					
					<li className=''>
						<a href='#works'>Works</a>
					</li>
					
					<li className=''>
						<a href='#testimonials'>Testimonials</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>	
				</ul>
			</div>
		</>
	);
};

export default Menu;
