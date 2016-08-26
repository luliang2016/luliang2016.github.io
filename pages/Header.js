import React from "react";

const Header = React.createClass({
	imgStyle: {
		width: 200,
		height: 200
	},
	render: function(){
		return (
			<div className=" jumbotron">
				<div className="container">
					<div className="page-header">
						<span className="cv-page-header">
							<h1>LU LIANG</h1>
							<p><strong>Date of Birth:</strong>Feb. 19, 1991&nbsp;&nbsp;&nbsp;</p>
						</span>
						<span className="pull-right">
							<img className="cv-img" style={this.imgStyle} src="http://stuffpoint.com/dogs/image/453795-dogs-lovely-dog.jpg" className="img-circle"/>
						</span>
					</div>
				</div>
			</div>
		);
	}
});

export default Header;