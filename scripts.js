import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, hashHistory , IndexRoute, IndexRedirect} from "react-router";

import Header from "./pages/Header";
import Navigation from "./pages/Navigation";
import CV from "./pages/cv/components/CV";
import CVBuilder from "./pages/cv-builder/components/Layout";

require("./pages/cv-builder/cv-builder.css");
 
const Main = React.createClass({
	render: function(){
		return (
			<div>
				<Header></Header>
				<Navigation></Navigation>
				<div className="container" id="content">
					{this.props.children}
				</div>
			</div>
		);
	}
});

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<IndexRedirect to="/cv" />
				<Route path="/cv" component={CV}></Route>
				<Route path="/cv-builder" component={CVBuilder}></Route>
			</Route>
		</Router>
	),document.getElementById("app"));
