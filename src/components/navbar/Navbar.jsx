import './navbar.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(fab);

const Navbar = ({menuOpen, setMenuOpen}) => {
	return(
		<>
			<div className={'navbar ' + (menuOpen && 'active')}> 
			
				<div className='wrapper'>
				
					<div className='left'>
					
						<a href='#intro' className='logo'>
							Portfolio.
						</a>
						
						<a href='https://github.com/LuksFay' className='buttons'>
							<div className='itemContainer github-button'>
								<FontAwesomeIcon icon='fa-brands fa-github icon' className='icon' /> 
						 		<span className='span'>Check out my Github!</span>
							</div>
						</a>
						<a href='https://twitter.com/LuksfayDev' className='buttons'>
							<div className='itemContainer twitter-button'>	
								<FontAwesomeIcon icon='fa-brands fa-twitter icon' className='icon'/> 
								<span className='span' >Here's my Twitter, follow me!</span>
							</div>
						</a>
						
					</div>
					
					<div className='right'>
						<div className='hamburguer' onClick={() => setMenuOpen(!menuOpen)}>
							<span className='line1'></span>
							<span className='line2'></span>
							<span className='line3'></span>	
						</div>
					</div>
					
				</div>
				
			</div>
		</>
	);
};

export default Navbar;
