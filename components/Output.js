import React from "react";

import {OutputPageHeader} from "./Output/OutputPageHeader";
import {OutputForm} from "./Output/OutputForm";

const Output = React.createClass({
	render: function(){
        return (
            <div className="col-md-6 " id="cv-result">
                <OutputPageHeader></OutputPageHeader>
                <OutputForm outputData={this.props.outputData}></OutputForm>
            </div>
        );
    }
});

export {Output};
