import React from "react";
import "./Header.css"


const Header = () => {
    return ( 
        <>
        

         <header class="header">
	       <div class="brand-box">
		      <span class="brand">happyman</span>
	        </div>
	
    	    <div class="text-box">
	    	    <h1 class="heading-primary">
		            	<span class="heading-primary-main">counter</span>
		             	<span class="heading-primary-sub">behshad;o</span>
		          </h1>
		  				{/* <a href="#" class="btn btn-white btn-animated">Discover our tours</a> */}
	        </div>
        </header>
        
        
        </>
           
     );
}
 
export default Header;