import React from "react";

const InputContact = React.createClass({
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
                    <form className="form-horizontal" role="form">
                        <div className="form-group">
                            <label for="header-name" className="control-label col-sm-3">Address:</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="header-name" data-type="address" onChange={this.onChange} 
                                placeholder="Enter your address"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="header-birth" className="control-label col-sm-3">Mobile:</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="header-birth" data-type="mobile" onChange={this.onChange}
                                placeholder="Enter your mobile"/>
                            </div>
                            
                        </div>
                        <div className="form-group">
                            <label for="header-birth" className="control-label col-sm-3">Email:</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="header-birth" data-type="email" onChange={this.onChange}
                                placeholder="Enter your email"/>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

export {InputContact};
