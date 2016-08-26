import React from "react";

//Input-education
const InputEducation = React.createClass({
    getInitialState: function(){
        return ({
            educationArray: []
        });
    },
    add: function(){
        var educationList = this.state.educationArray;
        educationList.push({
            name: " ",
            major: " ",
            startedMonth: "Month",
            startedYear: "Year",
            finishedMonth: "Month",
            finishedYear: "Year",
            id: Date.now()
        });
        this.setState({educationArray:educationList});
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
        var id,index;
        var educations = this.state.educationArray;
        id = this.findIdElment(event.target,"id-panel").getAttribute("data-id");

        educations.forEach(function(education){
            if(education.id == id){
                index = educations.indexOf(education);
            }
        });
        switch(event.target.parentNode.parentNode.getAttribute("data-type")){
            case "started-month" : educations[index].startedMonth = event.target.text;break;
            case "started-year" : educations[index].startedYear = event.target.text;break;
            case "finished-month" : educations[index].finishedMonth = event.target.text;break;
            case "finished-year" : educations[index].finishedYear = event.target.text;break;
        };
        this.setState({
            educationArray:educations
        });
        this.props.inputEducation(this.state.educationArray);
    },
    onChange: function(event){
        var id,index;
        var educations = this.state.educationArray;
        id = this.findIdElment(event.target,"id-panel").getAttribute("data-id");
        educations.forEach(function(education){
            if(education.id == id){
                index = educations.indexOf(education);
            }
        });
        switch(event.target.getAttribute("data-type")){
            case "name" : educations[index].name = event.target.value;break;
            case "major" : educations[index].major = event.target.value;break;
            case "delete" : educations.splice(index, 1);break;
        };
        this.setState({
            educationArray:educations
        });
        this.props.inputEducation(this.state.educationArray);
    },
    findIdElment: function(element,className){
        while(!element.classList.contains(className)){
            element = element.parentNode;
        }
        return element;
    },
    renderNewEducation: function(){
        var educations = [];
        for(var i=0;i<this.state.educationArray.length;i++){
            educations.push(
                <div className="panel id-panel" data-id={this.state.educationArray[i].id} key={this.state.educationArray[i].id}>
                    <div className="panel-body">
                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="control-label col-sm-4">College Name:</label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text" placeholder="Enter college name"
                                    data-type="name" onChange={this.onChange}></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4">Major:</label>
                                <div className="col-sm-8"> 
                                    <input className="form-control" type="text" placeholder="Enter your major"
                                    data-type="major" onChange={this.onChange}></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4">Started Time:</label>
                                <div className="col-sm-8"> 
                                    <span className="dropdown">
                                        <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.state.educationArray[i].startedMonth}<span className="caret" ></span></button>
                                        <ul className="dropdown-menu scrollable-menu" role="menu" data-type="started-month">
                                            {this.initializeMonth()}
                                        </ul>
                                    </span>
                                    &nbsp;&nbsp;
                                    <span className="dropdown">
                                        <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.state.educationArray[i].startedYear}<span className="caret" ></span></button>
                                        <ul className="dropdown-menu scrollable-menu" role="menu" data-type="started-year">
                                            {this.initializeYear()}
                                        </ul>
                                    </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4">Finished Time:</label>
                                <div className="col-sm-8"> 
                                    <span className="dropdown">
                                        <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.state.educationArray[i].finishedMonth}<span className="caret" ></span></button>
                                        <ul className="dropdown-menu scrollable-menu" role="menu" data-type="finished-month">
                                            {this.initializeMonth()}
                                        </ul>
                                    </span>
                                    &nbsp;&nbsp;
                                    <span className="dropdown">
                                        <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.state.educationArray[i].finishedYear}<span className="caret" ></span></button>
                                        <ul className="dropdown-menu scrollable-menu" role="menu" data-type="finished-year">
                                            {this.initializeYear()}
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <a onClick={this.onChange}  className='pull-right'>
                        <span data-type="delete" className='glyphicon glyphicon-remove' ></span></a>
                    </div>
                </div>
            );
        }
        return educations;
    },
    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div>
                        Education
                        <button className="btn btn-primary btn-sm pull-right" onClick={this.add}>Add Education</button>
                    </div>
                </div>
                <div className="panel-body panel-group">
                    {this.renderNewEducation()}
                </div>
            </div>
        );
    }
});

export {InputEducation};
