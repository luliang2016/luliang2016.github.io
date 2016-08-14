import React from "react";

const InputContact = React.createClass({
    // inputStatement: function(event){
    //     this.props.inputStatement(event.target.value);
    // },
    contact: {
        address: "",
        mobile: "",
        email: ""
    },
    onChange: function(event){
        switch(event.target.getAttribute("data-type")){
            case "address": this.contact.address = event.target.value;break;
            case "mobile": this.contact.mobile = event.target.value;break;
            case "email": this.contact.email = event.target.value;break;
        }
        this.props.inputContact(this.contact);
    },
    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Personal Statement</div>
                <div className="panel-body">
                    <label>Address:</label><input type="text" data-type="address" onChange={this.onChange}></input><br/>
                    <label>Mobile:</label><input type="text" data-type="mobile" onChange={this.onChange}></input><br/>
                    <label>Email:</label><input type="text" data-type="email" onChange={this.onChange}></input>
                </div>
            </div>
        );
    }
});

export {InputContact};
