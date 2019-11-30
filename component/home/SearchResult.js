import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class SearchResult extends Component {
  render() {
    const { searchresult } = this.props;

    return (
      <div>
        {searchresult.length > 0 ? (
          <div>
            <h3 className="bg bg-light text-center">Search Result</h3>
            <div className=" container row text-center m-3 center">
              {searchresult.map((res, index) => (
                <div
                  key={index}
                  className="p-1 m-1 bg-warning text-dark col-2 border-dark text-center"
                >
                  <div className="text-truncate"> {res.title}</div>
                  <Link
                    className="btn btn-primary m-2"
                    to={"/information/" + res.title}
                  >
                    More details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  searchresult: state.data.searchresult
});

export default connect(mapStateToProps)(SearchResult);
