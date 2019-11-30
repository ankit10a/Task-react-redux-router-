import React, { Component } from "react";
import SearchForm from "./searchForm";
import { connect } from "react-redux";
import Spinner from "../layout/spinner";
import SearchResult from "./SearchResult";
import { removefromlist } from "../../actions/searchAction";
import { Link } from "react-router-dom";

export class Landing extends Component {
  handleremove = index => {
    return this.props.removefromlist(index);
  };
  render() {
    const { loading, favouriate } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {favouriate.length > 0 ? (
          <React.Fragment>
            <h4 className="bg-secondary text-center text-white">
              Favouriate List :
            </h4>
            <div className="row container align-center">
              {favouriate.map((obj, index) => (
                <div
                  className="col-3 bg-info m-1 border text-center"
                  key={index}
                >
                  <div className="text-truncate">{obj.title}</div>
                  <Link
                    to={"/information/" + obj.title}
                    className="btn btn-success m-1"
                  >
                    show
                  </Link>
                  <button
                    className="btn btn-danger m-1"
                    onClick={() => this.handleremove(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
        {loading ? <Spinner /> : <SearchResult />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.data.loading,
  favouriate: state.data.favouriate
});

export default connect(mapStateToProps, { removefromlist })(Landing);
