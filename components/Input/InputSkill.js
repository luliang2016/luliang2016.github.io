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
            proficiency: 0,
            id: Date.now()
        });
        this.setState({
            skillArray: skillList
        });
    },
    delete: function(event){
        var skillList = this.state.skillArray;
        var id = event.target.parentNode.parentNode.parentNode.getAttribute("data-id");
        var index;
        this.state.skillArray.forEach(function(skill){
            if(skill.id == id)
                index = skillList.indexOf(skill);
        });
        skillList.splice(index, 1);
        this.setState({
            skillArray: skillList
        });
        this.props.inputSkill(this.state.skillArray);
    },
    inputSkill: function(type,value,id){
        var skillList = this.state.skillArray;
        var index;
        this.state.skillArray.forEach(function(skill){
            if(skill.id == id)
                index = skillList.indexOf(skill);
        });
        switch(type){
            case "skillName":{
                skillList[index].skillName = value;
            };break;
            case "proficiency":{
                skillList[index].proficiency = value;
            };break;
        }
        this.setState({
            skillArray: skillList
        });
        this.props.inputSkill(this.state.skillArray);
    },
    inputSkillName: function(event){
        this.inputSkill("skillName",event.target.value,event.target.parentNode.parentNode.getAttribute("data-id"));
    },
    inputProficiency: function(event){
        this.inputSkill("proficiency",event.target.value,event.target.parentNode.parentNode.getAttribute("data-id"));
    },
    renderNewSkill: function(){
        var skills = [];
        for(var i=0;i<this.state.skillArray.length;i++){
            skills.push(
                <div className='panel' key={this.state.skillArray[i].id} data-id={this.state.skillArray[i].id}>
                    <div className='panel-body'>
                        <label>Skill Name: </label><input type='text' onChange={this.inputSkillName}></input>&nbsp;&nbsp;
                        <label>Proficiency: </label><input type='number' min="0" max='100' onChange={this.inputProficiency}></input>
                        <a onClick={this.delete} className='pull-right'><span className='glyphicon glyphicon-remove' ></span></a>
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