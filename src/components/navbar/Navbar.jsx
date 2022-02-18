import './navbar.scss';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@react-fontawesome';

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
							<p className='icon'>Logo</p>
							<FontAwesomeIcon icon='github' /> 
							<button className='github-button'> Check out my Github!</button>	
						</div>
						
						<div className='itemContainer'>
							<p className='icon'>Logo</p>
							<FontAwesomeIcon icon='twitter' />
							<FontAwesomeIcon icon='fa-brands fa-twitter' /> 
							<button className='twitter-button'>Here's my Twitter, follow me!</button>	
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
