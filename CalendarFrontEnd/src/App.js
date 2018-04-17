import React, { Component } from "react";
import { Col, Row } from "react-materialize";
import "./App.css";
import axios from "axios";

import Nav from "./components/Nav";
import MonthView from "./components/MonthView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedData: {}
    };
  }

  async componentDidMount() {
    // Get all saved data from DB
    this.getDBInfo();
  }

  // Getting data from  database
  getDBInfo = async () => {
    const savedData = [
      {
        startTime: "03:11",
        endTime: "23:59",
        description: "1st Description..,dfjsdfhjshdfjhksdkfhash",
        dayId: 3
      },
      {
        startTime: "01:11",
        endTime: "11:59",
        description: "2nd Description",
        dayId: 3
      },
      {
        startTime: "03:11",
        endTime: "11:59",
        description: "2nd Description",
        dayId: 3
      },
      {
        startTime: "03:30",
        endTime: "11:59",
        description: "2nd Description",
        dayId: 3
      },
      {
        startTime: "04:11",
        endTime: "11:59",
        description: "2nd Description",
        dayId: 3
      },
      {
        startTime: "03:15",
        endTime: "11:59",
        description: "2nd Description",
        dayId: 3
      },
      {
        startTime: "12:11",
        endTime: "23:59",
        description: "3st Description",
        dayId: 20
      }
    ];
    // Saving multiple same-day events into an array and then into an object
    const obj = {};
    for (let index in savedData) {
      if (!obj[savedData[index].dayId]) {
        obj[savedData[index].dayId] = [savedData[index]];
      } else {
        let sortedByStartTime = [
          ...obj[savedData[index].dayId],
          savedData[index]
        ].sort((a, b) => b.startTime < a.startTime);
        obj[savedData[index].dayId] = sortedByStartTime;
      }
    }
    this.setState({ savedData: obj });
    // console.log(obj);
    // try {
    //   await axios.get("/events").then(res => {
    //     this.setState({ savedData: res.data });
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // Adding saved data into Database
  submitEventForm = async (startTime, endTime, description, dayId) => {
    console.log(startTime, endTime, description, dayId);
    try {
      await axios
        .post("/events", {
          startTime,
          endTime,
          description,
          dayId
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
        <MonthView
          submitEventForm={this.submitEventForm}
          savedData={this.state.savedData}
        />
      </div>
    );
  }
}

export default App;
