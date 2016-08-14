import React from "react";

import {OutputPersonalStatement} from "./OutputForm/OutputPersonalStatement";
import {OutputSkill} from "./OutputForm/OutputSkill";
import {OutputEducation} from "./OutputForm/OutputEducation";
import {OutputWork} from "./OutputForm/OutputWork";
import {OutputInterest} from "./OutputForm/OutputInterest";
import {OutputContact} from "./OutputForm/OutputContact";
import {OutputHeader} from "./OutputForm/OutputHeader";

//Output-form contains one panel-group and components within it
const OutputForm = React.createClass({
    render: function(){
        return (
            <div className="panel-group">
                <OutputHeader header={this.props.outputData[0]}></OutputHeader>
                <OutputPersonalStatement personalStatement={this.props.outputData[1]}></OutputPersonalStatement>
                <OutputSkill skillList={this.props.outputData[2]}></OutputSkill>
                <OutputEducation educationList={this.props.outputData[3]}></OutputEducation>
                <OutputWork workList={this.props.outputData[4]}></OutputWork>
                <OutputInterest interest={this.props.outputData[5]}></OutputInterest>
                <OutputContact contact={this.props.outputData[6]}></OutputContact>
            </div>
        );
    }
});

export {OutputForm};
