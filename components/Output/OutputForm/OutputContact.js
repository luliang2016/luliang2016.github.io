import React from "react";

//Output-contact
const OutputContact = React.createClass({
	renderContact: function(){
		if (typeof this.props.contact !== "string") {
			return (
				<div className="panel-body output-panel-body">
					<p><strong>Address:</strong>{this.props.contact.address}</p>
					<p><strong>Mobile:</strong>{this.props.contact.mobile}</p>
					<p><strong>Email:</strong><a>{this.props.contact.email}</a></p>
				</div>
			);
		}
	},
    render: function(){
        return (
            <div className="panel">
                <div className="panel-heading"><h3>Personal Statement</h3></div>
                {this.renderContact()}
            </div>
        );
    }
});

export {OutputContact};
