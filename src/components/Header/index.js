import React from 'react'
import Search from './Search'

class Header extends React.Component{
  
  render(){
    return (
        <>
          <div>
          <div className="row">
            <nav className="navbar navbar-default navbar-static-top" style={{marginBottom: 0}}>
              <button className="menubtn pull-left btn "><i className="glyphicon  glyphicon-th" /></button>
              
              <Search />

              <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown"> <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)"> <i className="fa fa-envelope fa-fw" /> </a>
                  <ul className="dropdown-menu dropdown-messages">
                    <li> <a href="javascript:void(0)">
                        <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                      </a> </li>
                    <li> <a href="javascript:void(0)">
                        <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                      </a> </li>
                    <li> <a href="javascript:void(0)">
                        <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                      </a> </li>
                    <li> <a className="text-center" href="javascript:void(0)"> <strong>Read All Messages</strong> <i className="fa fa-angle-right" /> </a> </li>
                  </ul>
                  {/* /.dropdown-messages */} 
                </li>
                
              
                <li className="dropdown"> <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)"> <i className="fa fa-bell fa-fw" /> <span className="count">1</span> </a>
                  <ul className="dropdown-menu dropdown-alerts">
                    <li> <a href="javascript:void(0)">
                        <div> <i className="fa fa-comment fa-fw" /> New Comment <span className="pull-right text-muted small">4 minutes ago</span> </div>
                      </a> </li>
                    <li> <a href="javascript:void(0)">
                        <div> <i className="fa fa-twitter fa-fw" /> 3 New Followers <span className="pull-right text-muted small">12 minutes ago</span> </div>
                      </a> </li>
                    <li> <a href="javascript:void(0)">
                        <div> <i className="fa fa-envelope fa-fw" /> Message Sent <span className="pull-right text-muted small">4 minutes ago</span> </div>
                      </a> </li>
                    <li> <a href="javascript:void(0)">
                        <div> <i className="fa fa-tasks fa-fw" /> New Task <span className="pull-right text-muted small">4 minutes ago</span> </div>
                      </a> </li>
                    <li> <a href="javascript:void(0)">
                        <div> <i className="fa fa-upload fa-fw" /> Server Rebooted <span className="pull-right text-muted small">4 minutes ago</span> </div>
                      </a> </li>
                    <li> <a className="text-center" href="javascript:void(0)"> <strong>See All Alerts</strong> <i className="fa fa-angle-right" /> </a> </li>
                  </ul>
                  {/* /.dropdown-alerts */} 
                </li>
                {/* /.dropdown */}
                <li className="dropdown"> <a className="dropdown-toggle userdd" data-toggle="dropdown" href="javascript:void(0)">
                    <div className="userprofile small "> <span className="userpic"> <img src="https://maxartkiller.com/website/admin9/admin9/img/pic4.png" alt="" className="userpicimg" /> </span>
                      <div className="textcontainer">
                        <h3 className="username">Lucky Sans</h3>
                        <p>Gujarat, India</p>
                      </div>
                    </div>
                    <i className="caret" /> </a>
                  <ul className="dropdown-menu dropdown-user">
                    <li> <a href="socialprofile.html"><i className="fa fa-user fa-fw" /> User Profile</a> </li>
                    <li> <a href="javascript:void(0)"><i className="fa fa-gear fa-fw" /> Settings</a> </li>
                    <li> <a href="login.html"><i className="fa fa-sign-out fa-fw" /> Logout</a> </li>
                  </ul>
                  {/* /.dropdown-user */} 
                </li>
                {/* /.dropdown */}
              </ul>
              {/* /.navbar-top-links */} 
            </nav>
          </div>
          <div className="row">
            <div className="col-md-12  header-wrapper">
              <h3 className="page-header">Home</h3>
            </div>
            {/* /.col-lg-12 */} 
          </div>
          <ol className="breadcrumb">
            <li><a href="javascript:void(0)">home</a></li>
            <li className="active">Dashboard</li>
          </ol>
          </div>
        </>
    )
  }
  
}
export default Header