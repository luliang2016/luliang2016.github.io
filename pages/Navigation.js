import React from "react";
import {Link} from "react-router";

const Navigation = React.createClass({
	onClick: function(e){
		let elements = document.getElementsByClassName("nav-tab");
		Array.from(elements).map(li=>li.className="nav-tab");
		e.target.parentNode.className+=" active";
	},
	render: function(){
		return (
			<div>
				<div className="col-md-4"></div>
				<div className="col-md-4" style={{textAlign:"center"}}>
					<ul className="nav nav-tabs" >
						  <li className="nav-tab active"><Link onClick={this.onClick} style={{cursor:"pointer"}} to="/cv">My CV</Link></li>
						  <li className="nav-tab"><Link onClick={this.onClick} style={{cursor:"pointer"}} to="/cv-builder">CV Builder</Link></li>
					</ul>
				</div>
				<div className="col-md-4"></div>
			</div>
		);
	}
});

export default Navigation;