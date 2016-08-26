import React from "react";

//Input-skill
var InputSkill = React.createClass({
    getInitialState: function(){
        return {
            skillArray: []
        };
    },
    add: function(){
        var skillList = this.state.skillArray;
        skillList.push({
            skillName: " ",
            proficiency: 50,
            id: Date.now()
        });
        this.setState({
            skillArray: skillList
        });
    },
    operation: function(id,type,value){
        var index;
        var skills = this.state.skillArray;
        skills.forEach(function(skill){
            if (skill.id == id) {
                index = skills.indexOf(skill);
            }
        });
        switch(type){
            case "name": skills[index].skillName = value;break;
            case "proficiency": skills[index].proficiency = value;break;
            case "delete": skills.splice(index, 1); break;
        }
        this.setState({
            skillArray:skills
        });
        this.props.inputSkill(this.state.skillArray);
    },
    onChange: function(event){
        var id;
        id = this.findIdElment(event.target,"id-panel").getAttribute("data-id");
        this.operation(id,event.target.getAttribute("data-type"),event.target.value);
    },
    findIdElment: function(element,className){
        while(!element.classList.contains(className)){
            element = element.parentNode;
        }
        return element;
    },
    renderNewSkill: function(){
        var skills = [];
        for(var i=0;i<this.state.skillArray.length;i++){
            skills.push(
                <div className='panel id-panel' key={this.state.skillArray[i].id} data-id={this.state.skillArray[i].id}>
                    <div className='panel-body'>
                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="control-label col-sm-3">Skill Name:</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" data-type="name" onChange={this.onChange} 
                                    placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3">Proficiency:</label>
                                <div className="col-sm-9"> 
                                    <input type='number' min="0" max='100' className="form-control" data-type="proficiency" 
                                    onChange={this.onChange} placeholder="50"/>
                                </div>
                            </div>
                        </form>
                        <a onClick={this.onChange}  className='pull-right'>
                        <span data-type="delete" className='glyphicon glyphicon-remove' ></span></a>
                    </div>
                </div>
            );
        }
        return skills;
    },
    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div>
                        Skill(s)
                        <button className="btn btn-primary btn-sm pull-right" onClick={this.add}>Add Skill</button>
                    </div>
                </div>
                <div className="panel-body panel-group">
                    {this.renderNewSkill()}
                </div>
            </div>
        );
    }
});

export {InputSkill};