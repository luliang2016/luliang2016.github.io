import React from "react";

//Output-header
const OutputHeader = React.createClass({
    render: function(){
        return (
            <div class=" jumbotron">
				<div class="container">
					<div class="page-header">
						<span>
							<h1>{typeof this.props.header==="string"?"Your Name":this.props.header.name}</h1>
							<p><strong>Date of Birth:</strong>{typeof this.props.header==="string"?"":this.props.header.birth}</p>
						</span>
					</div>
				</div>
			</div>
        );
    }
});

export {OutputHeader};
