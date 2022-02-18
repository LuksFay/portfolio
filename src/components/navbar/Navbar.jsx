import './navbar.scss';

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
							<button className='github-button'> Check out my Github!</button>	
						</div>
						
						<div className='itemContainer'>
							<p className='icon'>Logo</p>
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
