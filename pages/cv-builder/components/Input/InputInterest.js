import React from "react";

const InputInterest = React.createClass({
    inputInterest: function(event){
        this.props.inputInterest(event.target.value);
    },
    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Interest</div>
                <textarea className="panel-body form-control" onChange={this.inputInterest}
                    placeholder="Enter your interest"></textarea>
            </div>
        );
    }
});

export {InputInterest};
