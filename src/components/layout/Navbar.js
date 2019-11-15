//rce enter

import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
	return (
		<div>
			<nav className="nav-bar bg-primary">
				<h1>
					{/* <i className="fab fa-github" /> */}
					<i className={icon} /> {title}
					Navbar
				</h1>
			</nav>
		</div>
	);
};

Navbar.defaultProps = {
	title: " Github-Search",
	icon: "fab fa-github"
};
//overwrite
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
