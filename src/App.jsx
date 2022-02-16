import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

const App = ()=>{
  return (
    <>
    	<div className='app'>
    		<Navbar />
    		<div className='sections'>
    		<Intro />
    		<Portfolio />
    		<Works/>
    		<Testimonials/>
    		<Contact />
    			
    		</div>
    		section (
    			-intro
    		  -portfolio 
    		  -work 
    		  -contact
    		  ) 
    	</div>
    </>
  );
};

export {App};
