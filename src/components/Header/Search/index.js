import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
        <div className="searchwarpper">
          <div className="input-group searchglobal">
            <input type="text" className="form-control" placeholder="Search for..." autofocus />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button"><i className="fa fa-search" /></button>
                </span> 
          </div>
        </div>
    );
  }
}

export default Search;