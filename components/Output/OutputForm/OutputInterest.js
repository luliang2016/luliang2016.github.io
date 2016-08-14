import React from "react";

//Output-interest
const OutputInterest = React.createClass({
    render: function(){
        return (
            <div className="panel">
                <div className="panel-heading"><h3>Interest</h3></div>
                <div className="panel-body output-panel-body"><p>{this.props.interest}</p></div>
            </div>
        );
    }
});

export {OutputInterest};
