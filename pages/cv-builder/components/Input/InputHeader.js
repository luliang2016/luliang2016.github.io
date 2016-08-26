import React from "react";

const InputHeader = React.createClass({
    header: {
        name: "Your Name",
        birthMonth: "Month",
        birthYear: "Year"
    },
    initializeYear: function(){
        var years = [];
        var currentYear = (new Date()).getFullYear();
        for(var i=currentYear;i>currentYear-50;i--){
            years.push(<li role='presentation'><a role='menuitem' style={{cursor:"pointer"}} onClick={this.onClickTime}>{i}</a></li>);
        }
        return years;
    },
    initializeMonth: function(){
        var monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        var months = [];
        monthName.forEach(function(month){
            months.push(<li role="presentation"><a role="menuitem" style={{cursor:"pointer"}} onClick={this.onClickTime}>{month}</a></li>);
        }.bind(this));
        return months;
    },
    onClickTime: function(event){
        switch(event.target.parentNode.parentNode.getAttribute("data-type")){
            case "birth-month" : this.header.birthMonth = event.target.text;break;
            case "birth-year" : this.header.birthYear = event.target.text;break;
        };
        this.props.inputHeader(this.header);
    },
    onChange: function(event){
        switch(event.target.getAttribute("data-type")){
            case "name": this.header.name = event.target.value;break;
        }
        this.props.inputHeader(this.header);
    },
    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Header</div>
                <div className="panel-body">
                    <form className="form-horizontal" role="form">
                        <div className="form-group">
                            <label for="header-name" className="control-label col-sm-3">Name:</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="header-name" data-type="name" onChange={this.onChange} 
                                placeholder="Enter your name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="header-birth" className="control-label col-sm-3">Birth:</label>
                            <div className="col-sm-9">
                                <span className="dropdown">
                                    <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.header.birthMonth}<span className="caret" ></span></button>
                                    <ul className="dropdown-menu scrollable-menu" role="menu" data-type="birth-month">
                                        {this.initializeMonth()}
                                    </ul>
                                </span>
                                &nbsp;&nbsp;
                                <span className="dropdown">
                                    <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.header.birthYear}<span className="caret" ></span></button>
                                    <ul className="dropdown-menu scrollable-menu" role="menu" data-type="birth-year">
                                        {this.initializeYear()}
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

export {InputHeader};