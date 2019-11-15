import React from "react";
//if we aren't using class we don't need to use this keyword
const UserItem = (props) => {
    //since we have a user prop we need to add a prop type for it
	const { login, avatar_url, html_url } = props.user;
	return <div className="card text-center">
        <img
            src={avatar_url}: 
            alt=''
            className='round_img'
            style={{width='60px'}}
        />
        <h3>{login}</h3>

        <div>
            <a href={html_url} className='btn btn-sm my-1'>
                More
            </a>
        </div> 
    </div>;
};
