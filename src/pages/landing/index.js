import React from 'react'
import Table from './Table'
class Landing extends React.Component{
  
  render(){
    return (
        
      <>  
        <div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="panel panel-blue">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-6">
                      <div id="morris-bar-chart2" />
                    </div>
                    <div className="col-xs-6 text-right">
                      <div className="huge">26</div>
                      <div>Comments!</div>
                    </div>
                  </div>
                </div>
                <a href="javascript:void(0)">
                  <div className="panel-footer"> <span className="pull-left">View Details</span> <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                    <div className="clearfix" />
                  </div>
                </a> </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="panel panel-green">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3"> <i className="fa fa-tasks fa-2x" /> </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">12</div>
                      <div>New Tasks!</div>
                    </div>
                  </div>
                </div>
                <a href="javascript:void(0)">
                  <div className="panel-footer"> <span className="pull-left">View Details</span> <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                    <div className="clearfix" />
                  </div>
                </a> </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="panel panel-yellow">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3"> <i className="fa fa-shopping-cart fa-2x" /> </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">124</div>
                      <div>New Orders!</div>
                    </div>
                  </div>
                </div>
                <a href="javascript:void(0)">
                  <div className="panel-footer"> <span className="pull-left">View Details</span> <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                    <div className="clearfix" />
                  </div>
                </a> </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="panel panel-red">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3"> <i className="fa fa-support fa-2x" /> </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">113</div>
                      <div>Raised issue!</div>
                    </div>
                  </div>
                </div>
                <a href="javascript:void(0)">
                  <div className="panel-footer"> <span className="pull-left">View Details</span> <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                    <div className="clearfix" />
                  </div>
                </a> </div>
            </div>
          </div>
          <Table/>
          <br />
          <br />
        </div> 
      </>
    );
  }
  
}
export default Landing