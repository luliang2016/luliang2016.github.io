import React from "react";

//Output-work
const OutputWork = React.createClass({
    renderWork: function(){
        var works = [];
        this.props.workList.forEach(function(work){
            works.push(
                <div className="panel">
                    <div className="panel-heading">
                        <h4><strong>{work.name}</strong><span className="label label-default">
                            {work.startedMonth}.{work.startedYear}-{work.finishedMonth}.{work.finishedYear}</span></h4>
                    </div>
                    <div className="panel-body">
                        <p>&nbsp;&nbsp;&nbsp;<strong>Position:</strong>{work.position}</p>
                    </div>
                </div>
            );
        });
        return works;
    },
    render: function(){
        if (typeof this.props.workList !== "string"){
            return (
                <div className="panel">
                    <div className="panel-heading"><h3>Work Experience</h3></div>
                    <div className="panel-body output-panel-body">{this.renderWork()}</div>
                </div>
            );
        }else {
           return (
                <div className="panel">
                    <div className="panel-heading"><h3>Work Experience</h3></div>
                    <div className="panel-body output-panel-body"><p>{this.props.workList}</p></div>
                </div>
            ); 
        }
    }
});

export {OutputWork};
