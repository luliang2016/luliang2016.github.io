import React from "react";

//Output-personal-statement
const OutputPersonalStatement = React.createClass({
    render: function(){
        return (
            <div className="panel">
                <div className="panel-heading"><h3>Personal Statement</h3></div>
                <div className="panel-body output-panel-body"><p>{this.props.personalStatement}</p></div>
            </div>
        );
    }
});

export {OutputPersonalStatement};
