import React from "react";

//Input-work
const InputWork = React.createClass({
    getInitialState: function(){
        return ({
            workArray: []
        });
    },
    add: function(){
        var workList = this.state.workArray;
        workList.push({
            name: " ",
            position: " ",
            startedMonth: "Month",
            startedYear: "Year",
            finishedMonth: "Month",
            finishedYear: "Year",
            id: Date.now()
        });
        this.setState({workArray:workList});
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
        var works = this.state.workArray;
        id = this.findIdElment(event.target,"id-panel").getAttribute("data-id");
        works.forEach(function(work){
            if(work.id == id){
                index = works.indexOf(work);
            }
        });
        switch(event.target.parentNode.parentNode.getAttribute("data-type")){
            case "started-month" : works[index].startedMonth = event.target.text;break;
            case "started-year" : works[index].startedYear = event.target.text;break;
            case "finished-month" : works[index].finishedMonth = event.target.text;break;
            case "finished-year" : works[index].finishedYear = event.target.text;break;
        };
        this.setState({
            workArray:works
        });
        this.props.inputWork(this.state.workArray);
    },
    onChange: function(event){
        var id,index;
        var works = this.state.workArray;
        id = this.findIdElment(event.target,"id-panel").getAttribute("data-id");
        works.forEach(function(work){
            if(work.id == id){
                index = works.indexOf(work);
            }
        });
        switch(event.target.getAttribute("data-type")){
            case "name" : works[index].name = event.target.value;break;
            case "position" : works[index].position = event.target.value;break;
            case "delete" : works.splice(index, 1);break;
        };
        this.setState({
            workArray:works
        });
        this.props.inputWork(this.state.workArray);
    },
    findIdElment: function(element,className){
        while(!element.classList.contains(className)){
            element = element.parentNode;
        }
        return element;
    },
    renderNewWork: function(){
        var works = [];
        for(var i=0;i<this.state.workArray.length;i++){
            works.push(
                <div className="panel id-panel" data-id={this.state.workArray[i].id} key={this.state.workArray[i].id}>
                    <div className="panel-body">
                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="control-label col-sm-4">Company Name:</label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text" placeholder="Enter company name"
                                    data-type="name" onChange={this.onChange}></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4">Position:</label>
                                <div className="col-sm-8"> 
                                    <input className="form-control" type="text" placeholder="Enter your position"
                                    data-type="position" onChange={this.onChange}></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4">Started Time:</label>
                                <div className="col-sm-8"> 
                                    <span className="dropdown">
                                        <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.state.workArray[i].startedMonth}<span className="caret" ></span></button>
                                        <ul className="dropdown-menu scrollable-menu" role="menu" data-type="started-month">
                                            {this.initializeMonth()}
                                        </ul>
                                    </span>
                                    &nbsp;&nbsp;
                                    <span className="dropdown">
                                        <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.state.workArray[i].startedYear}<span className="caret" ></span></button>
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
                                        <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.state.workArray[i].finishedMonth}<span className="caret" ></span></button>
                                        <ul className="dropdown-menu scrollable-menu" role="menu" data-type="finished-month">
                                            {this.initializeMonth()}
                                        </ul>
                                    </span>
                                    &nbsp;&nbsp;
                                    <span className="dropdown">
                                        <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.state.workArray[i].finishedYear}<span className="caret" ></span></button>
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
        return works;
    },
    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div>
                        Work Experience
                        <button className="btn btn-primary btn-sm pull-right" onClick={this.add}>Add Work </button>
                    </div>
                </div>
                <div className="panel-body panel-group">
                    {this.renderNewWork()}
                </div>
            </div>
        );
    }
});

export {InputWork};
