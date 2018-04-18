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
    const TempSavedData = [
      {
        startTime: "03:11",
        endTime: "23:59",
        description:
          "1st Description..,dfjsdfhjshdf jhksdkfhadfjsdfhjs hdfjhksdkfhashsdfdfj sdfhjshdfjhksdkfhashsdfdfjsdfhjshdf jhksdkfhashsdfdfjsdfhjshdfjhk sdkfhashsdfdfjsdfhjs hdfjhksdkfhashsdfshsdf",
        dayId: 3
      },
      {
        startTime: "01:11",
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
        startTime: "03:11",
        endTime: "23:59",
        description:
          "1st Description..,dfjsdfhjshdf jhksdkfhadfjsdfhjs hdfjhksdkfhashsdfdfj sdfhjshdfjhksdkfhashsdfdfjsdfhjshdf jhksdkfhashsdfdfjsdfhjshdfjhk sdkfhashsdfdfjsdfhjs hdfjhksdkfhashsdfshsdf",
        dayId: 3
      },
      {
        startTime: "01:11",
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
        startTime: "03:11",
        endTime: "23:59",
        description:
          "1st Description..,dfjsdfhjshdf jhksdkfhadfjsdfhjs hdfjhksdkfhashsdfdfj sdfhjshdfjhksdkfhashsdfdfjsdfhjshdf jhksdkfhashsdfdfjsdfhjshdfjhk sdkfhashsdfdfjsdfhjs hdfjhksdkfhashsdfshsdf",
        dayId: 3
      },
      {
        startTime: "01:11",
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
    const savedData = await this.sameDayEvents(TempSavedData);
    this.setState({ savedData});
    //  //  //  //  //  //  //  //  //  //
    // try {
    //   const addEvent = await axios.get("/events");
    //   const savedData = await this.sameDayEvents(addEvent.data);
    //   this.setState({ savedData });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // Saving multiple same-day events into an array and then into an object - categorize
  sameDayEvents = async savedData => {
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
    return obj;
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

  // Deleting an Event from Database
  deleteEvent = async id => {
    console.log(id)
    try {
      // for (let index of id) {
      let response = await axios.delete(`/events/${id}`);

      if (response.data === "OK") {
        this.setState({
          savedData: this.state.savedData.filter(e => e.id !== id)
        });
      }
      // reloading the window when there's no more saved data
      // if (!this.state.savedData[0]) {
      //   window.location.reload();
      // }
      // }
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
