import React from "react";

import {InputPersonalStatement} from "./Input/InputPersonalStatement";
import {InputSkill} from "./Input/InputSkill";
import {InputEducation} from "./Input/InputEducation";
import {InputWork} from "./Input/InputWork";
import {InputInterest} from "./Input/InputInterest";
import {InputContact} from "./Input/InputContact";
import {InputHeader} from "./Input/InputHeader";

const Input = React.createClass({
    inputHeader: function(header){
        this.props.input("header",header);
    }, 
    inputStatement: function(statement){
        this.props.input("personalStatement",statement);
    }, 
    inputSkill: function(skillList){
        this.props.input("skill",skillList);
    },
    inputEducation: function(educationList){
        this.props.input("education",educationList);
    },
    inputWork: function(workList){
        this.props.input("work",workList);
    },
    inputInterest: function(interest){
        this.props.input("interest",interest);
    },
    inputContact: function(contact){
        this.props.input("contact",contact);
    },
	render: function(){
        return (
            <div className="col-md-6 ">
                <div className="panel-group">
                    <InputHeader inputHeader={this.inputHeader}></InputHeader>
                    <InputPersonalStatement inputStatement={this.inputStatement}></InputPersonalStatement>
                    <InputSkill inputSkill={this.inputSkill}></InputSkill>
                    <InputEducation inputEducation={this.inputEducation}></InputEducation>
                    <InputWork inputWork={this.inputWork}></InputWork>
                    <InputInterest inputInterest={this.inputInterest}></InputInterest>
                    <InputContact inputContact={this.inputContact}></InputContact>
                </div>
            </div>
        );
    }
});

export {Input};
