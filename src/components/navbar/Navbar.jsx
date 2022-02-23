import './navbar.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(fab);

const Navbar = () => {
	return(
		<>
			<div className='navbar'> 
			
				<div className='wrapper'>
				
					<div className='left'>
					
						<a href='#intro' className='logo'>
							Portfolio.
						</a>
						
						<div className='itemContainer'>
							<button className='github-button'>
								<FontAwesomeIcon icon='fa-brands fa-github icon' /> 
						 		<span>Check out my Github!</span>
							</button>	
						</div>
						
						<div className='itemContainer'>
							<button className='twitter-button'>
								<FontAwesomeIcon icon='fa-brands fa-twitter icon' /> 
								<span>Here's my Twitter, follow me!</span>
							</button>	
						</div>
						
					</div>
					
					<div className='right'>
					
					</div>
					
				</div>
				
			</div>
		</>
	);
};

export default Navbar;
