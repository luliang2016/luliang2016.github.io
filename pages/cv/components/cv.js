import React from "react";

const CV = React.createClass({
	render: function(){
		return (
			<div>
				<div className="col-md-6 panel ">
					<div className="panel-heading"><h3 className="cv-h3">PERSONAL STATEMENT</h3></div>
					<div className="panel-body"><p>I graduated from Unitec with a Postgraduate Diploma in computing. Now I am excited to step into a role that will challenge my skill and improve my programming ability.</p></div>
				</div>
				<div className="col-md-6 panel">
					<div className="panel-heading"><h3 className="cv-h3">SKILLS</h3></div>
					<div className="panel-body cv-panel-body">
						<div className="progress">
							<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:80+"%"}}>
								HTML
							</div>
						</div>
						<div className="progress">
							<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:70+"%"}}>
								Bootstrap
							</div>
						</div>
						<div className="progress">
							<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:60+"%"}}>
								JQuery
							</div>
						</div>
						<div className="progress">
							<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:80+"%"}}>
								React
							</div>
						</div>
						<div className="progress">
							<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:80+"%"}}>
								Java
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-12 panel">
					<div className="panel-heading"><h3 className="cv-h3">EDUCATION</h3></div>
					<div className="panel-body cv-panel-body">
						<div className="panel-group">
							<div className="panel">
								<div className="panel-heading">
									<h4><strong>Unitec Institute of Technology</strong><span className="label label-default">Feb. 2015- Jul. 2016</span></h4>
								</div>
								<div className="panel-body">
									<p>&nbsp;&nbsp;&nbsp;<strong>Major:</strong> Postgraduate Diploma (Level 8) in Computing</p>
								</div>
							</div>
							<div className="panel">
								<div className="panel-heading">
									<h4><strong>Guangdong Pharmaceutical University</strong><span className="label label-default">Sept. 2009- Jun. 2013</span></h4>
								</div>
								<div className="panel-body">
									<p>&nbsp;&nbsp;&nbsp;<strong>Major:</strong> Information Management and Information System</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-12 panel">
					<div className="panel-heading"><h3 className="cv-h3">WORK EXPERIENCE</h3></div>
					<div className="panel-body cv-panel-body">
						<div className="panel-group">
							<div className="panel">
								<div className="panel-heading">
									<h4><strong>Guangdong Toone INC</strong><span className="label label-default">Nov. 2013- Nov. 2014</span></h4>
								</div>
								<div className="panel-body">
									<p>&nbsp;&nbsp;&nbsp;<strong>Position:</strong> Software developer (Develop and design the Office Automatic System)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-12 panel">
					<div className="panel-heading"><h3 className="cv-h3">PROJECT EXPERIENCE</h3></div>
					<div className="panel-body cv-panel-body">
						<div className="panel-group">
							<div className="panel">
								<div className="panel-heading">
									<h4><strong>BangBall mobile game</strong><span className="label label-default">May. 2016- Jun. 2016</span></h4>
								</div>
								<div className="panel-body">
									<p>&nbsp;&nbsp;&nbsp;<strong>About:</strong> This is an android game which players use fingers to control. I played roles as team leader and key developer</p>
									<p>&nbsp;&nbsp;&nbsp;<strong>Git:</strong><a href="https://github.com/luliang2016/BangBall"> https://github.com/luliang2016/BangBall</a></p>
								</div>
							</div>
							<div className="panel">
								<div className="panel-heading">
									<h4><strong>Toone Office Automation System</strong><span className="label label-default">Nov. 2013- Nov. 2014</span></h4>
								</div>
								<div className="panel-body">
									<p>&nbsp;&nbsp;&nbsp;<strong>About:</strong>Developed a system which was aimed to help corporations to deal with their daily work conveniently and efficiently without transferring any paper. My work was to analyze requirements, design the structure of database, develop the system on the V3 platform and offer support to the clients</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{
					/**<div className="col-md-6 panel">
						<div className="panel-heading"><h3 className="cv-h3">INTEREST</h3></div>
						<div className="panel-body cv-panel-body">
							<p>In my space time, I enjoy doing some sports like basketball, badminton and table tennis. Since I came to New Zealand, I begin to play golf and go swimming. Besides doing sports, I am also interested in anything new in IT field like VR, wearable equipments and so on</p>
						</div>
					</div> **/
				}
				<div className=" panel">
					<div className="panel-heading"><h3 className="cv-h3">CONTACT</h3></div>
					<div className="panel-body cv-panel-body">
						<p><strong>Address:</strong>18 Bollard Avenue, New Windsor, Aucklad 0600</p>
						<p><strong>Mobile:</strong>021 028 97236</p>
						<p><strong>Email:</strong><a>luliang2016@yahoo.com</a>&nbsp;&nbsp;(preferred)&nbsp;&nbsp;&nbsp;&nbsp;<a>lianglv168168@163.com</a></p>
					</div>
				</div>
			</div>
		);
	}
});

export default CV;