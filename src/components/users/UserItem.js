import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//stateless dummy functional
//if we aren't using class we don't need to use this keyword

//since we have a user prop we need to add a prop type for it
//const ({ login, avatar_url, html_url }) = props.user;
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<div className="card text-center">
			<img
				src={avatar_url}
				alt=""
				className="round-img"
				style={{ width: "60px" }}
			/>
			<h3>{login}</h3>

			<div>
				<Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
					More
				</Link>
			</div>
		</div>
	);
};

//user item, overwrite
//shortcut ptor opTypes.object.isRequired,
UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
