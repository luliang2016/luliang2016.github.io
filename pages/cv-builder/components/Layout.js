import React from "react";
import ReactDOM from "react-dom";

import {Input} from "./Input";
import {Output} from "./Output";
import {Header} from "./Header";

const Layout = React.createClass({
	
	getInitialState: function(){
        return {
            outputData: ["pageHeader","personalStatement","skill","education","work","interest","contact"]
        };
    },
    //Handle personal statement change
    setHeader: function(header){
        var outputList = this.state.outputData;
        outputList[0] = header;
        this.setState({outputData: outputList});
    },
    setPersonalStatement: function(statement){
        var outputList = this.state.outputData;
        outputList[1] = statement;
        this.setState({outputData: outputList});
    },
    setSkill: function(skillList){
        var outputList = this.state.outputData;
        outputList[2] = skillList;
        this.setState({outputData: outputList});
    },
    setEducation: function(educationList){
        var outputList = this.state.outputData;
        outputList[3] = educationList;
        this.setState({outputData: outputList});
    },
    setEducation: function(educationList){
        var outputList = this.state.outputData;
        outputList[3] = educationList;
        this.setState({outputData: outputList});
    },
    setWork: function(workList){
        var outputList = this.state.outputData;
        outputList[4] = workList;
        this.setState({outputData: outputList});
    },
    setInterest: function(interest){
        var outputList = this.state.outputData;
        outputList[5] = interest;
        this.setState({outputData: outputList});
    },
    setContact: function(contactList){
        var outputList = this.state.outputData;
        outputList[6] = contactList;
        this.setState({outputData: outputList});
    },
    //Get data from children
    input: function(type,inputContent){
        switch(type){
            case "header": this.setHeader(inputContent);break;
            case "personalStatement": this.setPersonalStatement(inputContent);break;
            case "skill": this.setSkill(inputContent);break;
            case "education": this.setEducation(inputContent);break;
            case "work": this.setWork(inputContent);break;
            case "interest": this.setInterest(inputContent);break;
            case "contact": this.setContact(inputContent);break;
        }
    }, 
    render: function(){
        return (
            <div>
                <Header></Header>
                <Output outputData={this.state.outputData}></Output>
                <Input input={this.input}></Input>
            </div>
        );
    }
});

export default Layout;