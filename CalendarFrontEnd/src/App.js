import React, { Component } from "react";
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

  // Get all saved data from DB
  componentDidMount() {
    this.getDBInfo();
  }

  // Getting data from  database
  getDBInfo = async () => {
    try {
      const response = await axios.get("/events");
      const savedData = await this.sameDayEvents(response.data.data);
      this.setState({ savedData });
    } catch (error) {
      console.log(error);
    }
  };

  // Saving multiple same-day events into an array and then into an object - categorize
  sameDayEvents = async savedData => {
    const obj = {};
    for (let index in savedData) {
      if (!obj[savedData[index].day_id]) {
        obj[savedData[index].day_id] = [savedData[index]];
      } else {
        let sortedByStartTime = [
          ...obj[savedData[index].day_id],
          savedData[index]
        ].sort((a, b) => b.start_time < a.start_time);
        obj[savedData[index].day_id] = sortedByStartTime;
      }
    }
    return obj;
  };

  // Adding saved data into Database
  submitEventForm = async (start_time, end_time, description, day_id) => {
    try {
      const response = await axios.post("/events", {
        start_time,
        end_time,
        description,
        day_id
      });

      // Assigning new value into the object and then setting the state with new value
      const savedData = { ...this.state.savedData };
      let newArr = [];
      if (!savedData[day_id]) {
        savedData[day_id] = [response.data.data];
      } else {
        newArr = [...savedData[day_id], response.data.data];
        savedData[day_id] = newArr;
      }
      this.setState({ savedData });
    } catch (error) {
      console.log(error);
    }
  };

  // Deleting an Event from Database
  deleteEvent = async (id, dayId) => {
    try {
      const response = await axios({
        method: "delete",
        url: "/events",
        data: { id }
      });

      // Converting Object into an array, then returning new array without the deleted value
      // Then converting back into the object.
      if (response.data.message === "OK") {
        const arr = [...[this.state.savedData]];
        const newArr = arr[0][dayId].filter(e => e.id !== id);
        arr[0][dayId] = newArr;
        const savedData = { ...arr[0] };

        this.setState({ savedData });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="app">
        <Nav />
        <MonthView
          submitEventForm={this.submitEventForm}
          savedData={this.state.savedData}
          deleteEvent={this.deleteEvent}
        />
      </div>
    );
  }
}

export default App;
