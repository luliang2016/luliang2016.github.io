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
    delete: function(event){
        var workList = this.state.workArray;
        var id = event.target.parentNode.parentNode.parentNode.getAttribute("data-id");
        var index;
        this.state.workArray.forEach(function(work){
            if(work.id == id)
                index = workList.indexOf(work);
        });
        workList.splice(index, 1);
        this.setState({
            workArray: workList
        });
        this.props.inputWork(this.state.workArray);
    },
    initializeYear: function(){
        var years = [];
        var currentYear = (new Date()).getFullYear();
        for(var i=currentYear;i>currentYear-50;i--){
            years.push(<li role='presentation'><a role='menuitem' onClick={this.onClickTime}>{i}</a></li>);
        }
        return years;
    },
    initializeMonth: function(){
        var monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        var months = [];
        monthName.forEach(function(month){
            months.push(<li role="presentation"><a role="menuitem" onClick={this.onClickTime}>{month}</a></li>);
        }.bind(this));
        return months;
    },
    onClickTime: function(event){
        var index;
        var works = this.state.workArray;
        this.state.workArray.forEach(function(work){
            if(work.id == event.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id")){
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
        var index;
        var works = this.state.workArray;
        this.state.workArray.forEach(function(work){
            if(work.id == event.target.parentNode.parentNode.getAttribute("data-id")){
                index = works.indexOf(work);
            }
        });
        switch(event.target.getAttribute("data-type")){
            case "name" : works[index].name = event.target.value;break;
            case "position" : works[index].position = event.target.value;break;
        };
        this.setState({
            workArray:works
        });
        this.props.inputWork(this.state.workArray);
    },
    renderNewWork: function(){
        var works = [];
        for(var i=0;i<this.state.workArray.length;i++){
            works.push(
                <div className="panel" data-id={this.state.workArray[i].id} key={this.state.workArray[i].id}>
                    <div className="panel-body">
                        <label>Company Name: </label><input type="text" data-type="name" onChange={this.onChange}></input>
                        <label>Position: </label><input type="text" data-type="position" onChange={this.onChange}></input>
                        <br/><a onClick={this.delete} className='pull-right'><span className='glyphicon glyphicon-remove' ></span></a>
                        <label>Started Time: </label>
                        <span className="dropdown">
                            <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.state.workArray[i].startedMonth}<span className="caret" ></span></button>
                            <ul className="dropdown-menu scrollable-menu" role="menu" data-type="started-month">
                                {this.initializeMonth()}
                            </ul>
                        </span>
                        <span className="dropdown">
                            <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.state.workArray[i].startedYear}<span className="caret" ></span></button>
                            <ul className="dropdown-menu scrollable-menu" role="menu" data-type="started-year">
                                {this.initializeYear()}
                            </ul>
                        </span>
                        <label>Finished Time: </label>
                        <span className="dropdown">
                            <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.state.workArray[i].finishedMonth}<span className="caret" ></span></button>
                            <ul className="dropdown-menu scrollable-menu" role="menu" data-type="finished-month">
                                {this.initializeMonth()}
                            </ul>
                        </span>
                        <span className="dropdown">
                            <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.state.workArray[i].finishedYear}<span className="caret" ></span></button>
                            <ul className="dropdown-menu scrollable-menu" role="menu" data-type="finished-year">
                                {this.initializeYear()}
                            </ul>
                        </span>
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
