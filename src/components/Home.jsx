import React from 'react';

export default (props) => {
 //let alt = props.alt || "image avatar";
 return (
	<header id="header">
		<div className="logo">
      <img class=".logo img" src="images/wl_logo_nostroke_white.png" alt="logo" />
		</div>
		<div className="content">
			<div className="inner">
				<h1>Hi, my name is Warren</h1>
				<p>I AM A COMPUTING SCIENCE MAJOR AND BUSINESS MINOR <br />
            STUDENT AT THE UNIVERSITY OF ALBERTA.</p>
			</div>
		</div>
		<nav>
			<ul>
				<li><a href="#intro">Intro</a></li>
				<li><a href="#work">Work</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Contact</a></li>
			
			</ul>
		</nav>
	</header>
    )
}