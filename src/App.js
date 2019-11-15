import React, { Component } from "react"; //import react and componet
import "./App.css"; //global css
//componets need to be imported like this
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

//rce creates render

//extend componet
//if classes don't have state they don't need to be classes, functions also don't need
//render
class App extends Component {
	render() {
		//const name = "Hell";
		//const loading = true;
		//const showName = true;

		return (
			<div>
				<Navbar />
				<Users />
				{/* {loading ? <h2>Loading..</h2> 
        : <h1>Not Loading {showName ? name : null}</h1>} */}
				{/* {name.toUpperCase()} */}
			</div>
		);
	}
}

export default App;
