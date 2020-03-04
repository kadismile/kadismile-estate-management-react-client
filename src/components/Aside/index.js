import React from 'react'
import {
  Link
} from "react-router-dom";
class Aside extends React.Component{
  
  render(){
    return (
       
      <div className="navbar-default sidebar">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
        <Link to="/" className="navbar-brand"> Elegant Court </Link>
      </div>
      <div className="clearfix" />
      <div className="sidebar-nav navbar-collapse"> 
        {/* user profile pic */}
        <div className="userprofile text-center">
          <div className="userpic"> <img src="https://maxartkiller.com/website/admin9/admin9/img/pic4.png" alt="" className="userpicimg" /> <a href="#" className="btn btn-primary settingbtn"><i className="fa fa-gear" /></a> </div>
          <h3 className="username">Chilaka  Ibrahim</h3>
          <p>Gujarat, India</p>
        </div>
        <div className="clearfix" />
        {/* user profile pic */}
        <ul className="nav" id="side-menu">
          
          <li> <Link to='/testing'> <i className="fa fa-dashboard fa-fw" /> Dashboard </Link></li>
          <li> <a href="javascript:void(0)" className="menudropdown"><i className="fa fa-cubes" /> App Pages <span className="badge">12</span><span className="fa arrow" /></a>
            <ul className="nav nav-second-level">
              <li><a href="mail.html">Mailbox</a></li>
              <li><a href="user_list.html">User List</a></li>
              <li><a href="user_records.html">User Record</a></li>
              <li><a href="socialprofile.html">Social Profile</a></li>
              <li><a href="calendar.html">Calendar</a></li>
              <li><a href="timeline.html">Timeline</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="invoice.html">Invoice</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="aboutus.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
            {/* /.nav-second-level */} 
          </li>
          <li> <a href="javascript:void(0)" className="menudropdown"><i className="fa fa-bar-chart-o fa-fw" /> Charts &amp; Maps<span className="badge red">6</span><span className="fa arrow" /></a>
            <ul className="nav nav-second-level">
              <li> <a href="flot.html">Flot Charts</a> </li>
              <li> <a href="morris.html">Morris.js Charts</a> </li>
              <li> <a href="chartjs.html">Chart.js Charts</a> </li>
              <li> <a href="jvectormap.html">jVectormap</a> </li>
              <li> <a href="googlemap.html">Google map</a> </li>
              <li> <a href="googlemapfull.html">Google map full</a> </li>
            </ul>
            {/* /.nav-second-level */} 
          </li>
          <li> <a href="javascript:void(0)" className="menudropdown"><i className="fa fa-files-o fa-fw" /> Sample Pages <span className="badge green">10</span><span className="fa arrow" /></a>
            <ul className="nav nav-second-level">
              <li><a href="blank.html">Blank Page</a></li>
              <li> <a href="login.html">Login</a></li>
              <li><a href="register.html">Sign up</a></li>
              <li><a href="forgotpassword.html">Forgot password</a></li>
              <li><a href="lock.html">Lock</a></li>
              <li><a href="404.html">404</a></li>
              <li><a href="500.html">500</a></li>
              <li><a href="searchresult.html">Search Result</a></li>
              <li><a href="FAQs.html">FAQs</a></li>
              <li><a href="commingsoon.html">Coming Soon...</a></li>
            </ul>
            {/* /.nav-second-level */} 
          </li>
          <li> <a href="tables.html"><i className="fa fa-table fa-fw" /> Tables</a> </li>
          <li> <a href="forms.html"><i className="fa fa-edit fa-fw" /> Forms</a> </li>
          <li> <a href="javascript:void(0)" className="menudropdown"><i className="fa fa-wrench fa-fw" /> UI Elements <span className="badge yellow">12</span> <span className="fa arrow" /></a>
            <ul className="nav nav-second-level">
              <li><a href="panels-wells.html">Panels and Wells</a></li>
              <li><a href="accordion.html">Accordion</a></li>
              <li><a href="Tabs.html">Tabs</a></li>
              <li><a href="buttons.html">Buttons</a></li>
              <li><a href="notifications.html">Notifications</a></li>
              <li><a href="modal.html">Modal</a></li>
              <li><a href="popover.html">Popover</a></li>
              <li><a href="typography.html">Typography</a></li>
              <li><a href="icons.html"> Icons</a></li>
              <li><a href="grid.html">Grid</a></li>
              <li><a href="progressbar.html">Progress bar</a></li>
              <li><a href="rangeslider.html">Range Slider</a></li>
            </ul>
            {/* /.nav-second-level */} 
          </li>
          <li> <a href="javascript:void(0)" className="menudropdown"><i className="fa  fa-shopping-cart fa-fw" />eCommerce<span className="badge blue">3</span> <span className="fa arrow" /></a>
            <ul className="nav nav-second-level">
              <li><a href="products.html">Products</a></li>
              <li><a href="product_details.html">Product Details</a></li>
              <li><a href="products_orderstatus.html">Order status</a></li>
            </ul>
            {/* /.nav-second-level */} 
          </li>  
          <li> <a href="javascript:void(0)" className="menudropdown"><i className="fa fa-sitemap fa-fw" /> Multi-Level Dropdown<span className="fa arrow" /></a>
            <ul className="nav nav-second-level">
              <li> <a href="javascript:void(0)">Second Level Item</a> </li>
              <li> <a href="javascript:void(0)">Second Level Item</a> </li>
              {/* .nav-third-level menudropdown2 */} 
              <li> <a href="javascript:void(0)" className="menudropdown2">Third Level <span className="fa arrow" /></a>
                <ul className="nav nav-third-level">
                  <li> <a href="javascript:void(0)">Third Level Item</a> </li>
                  <li> <a href="javascript:void(0)">Third Level Item</a> </li>
                  <li> <a href="javascript:void(0)">Third Level Item</a> </li>
                  <li> <a href="javascript:void(0)">Third Level Item</a> </li>
                </ul>
                {/* /.nav-third-level */} 
              </li>
            </ul>
            {/* /.nav-second-level */} 
          </li>
        </ul>
      </div>
      {/* /.sidebar-collapse */} 
    </div>
    )
  }
  
}
export default Aside