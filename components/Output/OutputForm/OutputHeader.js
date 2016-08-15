import React from "react";

//Output-header
const OutputHeader = React.createClass({
    render: function(){
        return (
            <div className=" jumbotron">
				<div className="container">
					<div className="page-header">
						<span>
							<h1>{typeof this.props.header == "string"? "Your Name" : this.props.header.name}</h1>
							<p><strong>Date of Birth:</strong>{typeof this.props.header == "string"? " Month , Year" : " "+this.props.header.birthMonth+" , "+this.props.header.birthYear}</p>
						</span>
					</div>
				</div>
			</div>
        );
    }
});

export {OutputHeader};
