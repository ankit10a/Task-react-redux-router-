import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchDescription,
  addtoFavouritate,
  removefromlist,
  setloading
} from "../../actions/searchAction";
import { Link } from "react-router-dom";
import Spinner from "../layout/spinner";

export class Description extends Component {
  componentDidMount() {
    this.props.fetchDescription(this.props.match.params.name);
    this.props.setloading();
  }
  handleremove = id => {
    const index = this.props.favouriate.findIndex(ele => ele.pageid === id);
    return this.props.removefromlist(index);
  };
  addtofavouriate = () => {
    if (
      this.props.favouriate.length === 0 ||
      !this.props.favouriate.find(
        obj => obj.pageid === this.props.description.pageid
      )
    ) {
      return this.props.addtoFavouritate(this.props.description);
    } else {
      alert("item is already exist in favouriate list");
    }
  };
  render() {
    const { description, favouriate, loading } = this.props;

    let info = (
      <div>
        <h2 className="bg-success text-center">{description.displaytitle}</h2>
        <h3 className="bg-light text-center">Description :</h3>
        <div className="bg-info container">{description.extract}</div>
        <Link to="/" className="btn btn-primary  m-2">
          Go Back To Search
        </Link>
        {favouriate.find(obj => obj.pageid === description.pageid) ? (
          <button
            className="btn btn-danger m-1"
            onClick={() => this.handleremove(description.pageid)}
          >
            Remove
          </button>
        ) : (
          <button
            className="btn btn-secondary m-1"
            onClick={this.addtofavouriate}
          >
            Favouriate
          </button>
        )}
      </div>
    );
    let content = loading ? <Spinner /> : info;
    return <div>{content}</div>;
  }
}
const mapStateToProps = state => ({
  loading: state.data.loading,
  description: state.data.description,
  favouriate: state.data.favouriate
});
export default connect(mapStateToProps, {
  fetchDescription,
  addtoFavouritate,
  removefromlist,
  setloading
})(Description);
