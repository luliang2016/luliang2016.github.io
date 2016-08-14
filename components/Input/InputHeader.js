import React from "react";

const InputHeader = React.createClass({
    header: {
        name: "",
        birth: ""
    },
    onChange: function(event){
        switch(event.target.getAttribute("data-type")){
            case "name": this.header.name = event.target.value;break;
            case "birth": this.header.birth = event.target.value;break;
        }
        this.props.inputHeader(this.header);
    },
    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Header</div>
                <div className="panel-body">
                    <label>Name:</label><input type="text" data-type="name" onChange={this.onChange}></input><br/>
                    <label>Birth:</label><input type="text" data-type="birth" onChange={this.onChange}></input><br/>
                </div>
            </div>
        );
    }
});

export {InputHeader};