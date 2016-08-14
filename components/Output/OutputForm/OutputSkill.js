import React from "react";

//Output-skill
const OutputSkill = React.createClass({
    renderSkill: function(){
        var skills = [];
        this.props.skillList.forEach(function(skill){
            skills.push(
                <div className="progress">
                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={"'"+skill.proficiency+"'"} aria-valuemin="0" aria-valuemax="100" style={{width:skill.proficiency+"%"}}>{skill.skillName}</div>
                </div>
            );
        });
        return skills;
    },
    render: function(){
        if (typeof this.props.skillList !== "string"){
            return (
                <div className="panel">
                    <div className="panel-heading"><h3>Skill</h3></div>
                    <div className="panel-body output-panel-body">{this.renderSkill()}</div>
                </div>
            );
        }else {
           return (
                <div className="panel">
                    <div className="panel-heading"><h3>Skill</h3></div>
                    <div className="panel-body output-panel-body"><p>{this.props.skillList}</p></div>
                </div>
            ); 
        }
    }
});

export {OutputSkill};
