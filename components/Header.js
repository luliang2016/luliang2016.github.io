import React from "react";

const Header = React.createClass({
    render: function(){
        return (
            <div className="col-md-12 well cv-builder-header">
                    <div id="cv-builder-introduction" >
                        This is a page built with React.js. You can enter your information on the right and it will show up on the left in real time. Have fun:)
                    </div>
            </div>
        );
    }
});

export {Header};