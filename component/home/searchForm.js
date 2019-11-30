import React, { Component } from "react";
import { connect } from "react-redux";
import { searchData, fetchData, setloading } from "../../actions/searchAction";

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchData(e.target.value);
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.fetchData(this.props.text);
    this.props.setloading();
  };
  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a Information....
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Person, Movies, TV Series, Companies and all other stuff....."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  text: state.data.text
});

export default connect(mapStatesToProps, { searchData, fetchData, setloading })(
  SearchForm
);
