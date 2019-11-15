import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className="App">
						<Navbar />
						<div className="container">
							<Alert />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/user/:login" component={User} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;

// import React, { Component } from "react"; //import react and componet
// import "./App.css"; //global css
// //componets need to be imported like this
// import Navbar from "./components/layout/Navbar";
// import Users from "./components/users/Users";
// import axios from "axios";
// //rce creates render
// //control c stops server
// //extend componet
// //if classes don't have state they don't need to be classes, functions also don't need
// //render is lyifecyle method
// class App extends Component {
// 	//there will be a moment in time where loading is true, not false,
// 	//we need to wait for that moment to pass to inform the user, that it's still loading
// 	state = {
// 		users: [],
// 		loading: false
// 	};
// 	//will fire as soon as the app componet mounts,axios, res is resolve
// 	//always make http respects here b=cus it will fire when the app loads
// 	async componentDidMount() {
// 		this.setState({ loading: true });

// 		const res = await axios.get("http://api.github.com/users");
// 		console.log(res.data);
// 		//with async await
// 		//axios, without asynic aswait, without the then promise
// 		// .get("http://api.github.com/users")
// 		// .then((res) => console.log(res.data));
// 		//after the call is made we can set loading back to false.
// 		this.setState({ user: res.data, loading: false });
// 	}
// 	render() {
// 		//const name = "Hell";
// 		//const loading = true;
// 		//const showName = true;

// 		return (
// 			<div>
// 				<Navbar />
// 				<Users />
// 				{/* {loading ? <h2>Loading..</h2>
//         : <h1>Not Loading {showName ? name : null}</h1>} */}
// 				{/* {name.toUpperCase()} */}
// 			</div>
// 		);
// 	}
// }

// export default App;
