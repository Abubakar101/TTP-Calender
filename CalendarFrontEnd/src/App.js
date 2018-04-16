import React, { Component } from "react";
import { Col, Row } from "react-materialize";
import "./App.css";
import axios from "axios";

import Nav from "./components/Nav";
import View from "./components/View";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedData: []
    };
  }

  async componentDidMount() {
    // Get all saved data from DB
    this.getDBInfo();
  }

  // Getting data from  database
  getDBInfo = async () => {
    try {
      await axios.get("/events").then(res => {
        this.setState({ savedData: res.data });
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Adding saved data into Database
  submitEventForm = async (startTime, endTime, description) => {
    console.log(startTime, endTime, description);
    try {
      await axios
        .post("/events", {
          startTime,
          endTime,
          description
        })
        .then(res => {
          this.setState({ savedData: [...this.state.savedData, res.data] });
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.state.savedData);
    return (
      <div className="app">
        <Nav />
        <View submitEventForm={this.submitEventForm} />
      </div>
    );
  }
}

export default App;
