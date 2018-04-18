import React, { Component } from "react";

class DayView extends Component {
  // Adding week name based on the hard-coded date.
  addWeekName = day => {
    const week = {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday"
    };

    if (day > 7 && day < 15) {
      day = day - 7;
    } else if (day >= 15 && day < 22) {
      day = day - 14;
    } else if (day >= 22 && day < 29) {
      day = day - 21;
    }
    return week[day];
  };

  //  Ordinal numbers indicator
  addDaySuffix = num => {
    if (num === 1 && num !== 11) {
      return `${num}st`;
    } else if (num === 2 && num !== 12) {
      return `${num}nd`;
    } else if (num === 3 && num !== 13) {
      return `${num}rd`;
    }
    return `${num}th`;
  };

  appendLongEventInfo = () => {
    const savedData = [...this.props.savedData[this.props.dayId]];
    return savedData.map((e, i) => {
      return (
        <div className="row" id={`${e.dayId}${i}`} key={`${e.dayId}${i}`}>
          <div className=" col s12 dayViewCol">
            <i className="material-icons prefix col s1 ">access_time</i>
            <label className=" col s2">
              {this.props.convertTime(e.startTime)}
            </label>
            <label className=" col s2">
              {this.props.convertTime(e.endTime)}
            </label>
            <label className=" col s6 dayViewDescription">
              {e.description}
            </label>
            <i
            id="deleteDayViewEvent"
            className="material-icons right"
            onClick={e => this.props.deleteEvent(e.id)}
          >
          delete_forever
          </i>
          </div>
        </div>
      );
    });
  };

  renderTemplate = () => {
    return (
      <div className="col card hoverable s7">
        <i
          id="closeDayView"
          className="material-icons right"
          onClick={e => this.props.closeDayView()}
        >
          close
        </i>
        <div
          className="card-content"
          id={this.props.dayId}
          key={this.props.dayId}
        >
          <span className="card-title">
            {`${this.addWeekName(this.props.dayId)} ${this.addDaySuffix(
              this.props.dayId
            )} 2018`}
          </span>
          {this.appendLongEventInfo()}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div id="dayView" className="valign-wrapper row">
        {this.renderTemplate()}{" "}
      </div>
    );
  }
}
export default DayView;
