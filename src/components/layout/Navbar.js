//rce enter

import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
	static defaultProps = {
		title: "Github-Search",
		icon: "fab fa-github"
	};
	//overwrite
	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	};

	render() {
		return (
			<div>
				<nav className="nav-bar bg-primary">
					<h1>
						{/* <i className="fab fa-github" /> */}
						<i className={this.props.icon} />
						Navbar
					</h1>
				</nav>
			</div>
		);
	}
}

export default Navbar;
