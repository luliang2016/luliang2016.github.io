import React from "react";

const Header = React.createClass({
	showCV: function(){
		var cvResult = document.getElementById("cv-result").innerHTML;
		// console.log(content);
		window.localStorage.setItem("cvResult",cvResult);
		var cvPage = window.open('./pages/cv-builder/result.html');
		// cvPage.document.write(cvResult);
		
	},
    render: function(){
        return (
            <div className="col-md-12 well cv-builder-header">
                    <div id="cv-builder-introduction" >
                        <p className="col-md-11">This is a page built with React.js and Bootstrap. You can enter your information on the right and it will show up on the left in real time. Click the "Show" button to view the result. Have fun:)</p>
        				<button className="btn btn-info pull-right col-md-1" onClick={this.showCV}>Show</button>
                    </div>
            </div>
        );
    }
});

export {Header};