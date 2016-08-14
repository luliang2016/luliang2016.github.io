import React from "react";

const InputPersonalStatement = React.createClass({
    inputStatement: function(event){
        this.props.inputStatement(event.target.value);
    },
    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Personal Statement</div>
                <textarea className="panel-body form-control" onChange={this.inputStatement}
                    placeholder="Enter your personal statement"></textarea>
            </div>
        );
    }
});

export {InputPersonalStatement};
