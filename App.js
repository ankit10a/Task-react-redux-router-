import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Landing from "./component/home/landing";
import store from "./store";
import Description from "./component/home/description";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={Landing} />
          <Route path="/information/:name" component={Description} />
        </Router>
      </Provider>
    );
  }
}

export default App;
