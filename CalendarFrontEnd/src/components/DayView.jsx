import React, { Component } from "react";

class DayView extends Component {
  appendLongEventInfo = () => {
    const savedData = [...this.props.savedData[this.props.dayId]];
    return savedData.map((e, i) => {
      console.log(e.dayId);
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
          <span className="card-title">Tuesday 8th 2018 </span>
          {this.appendLongEventInfo()}
        </div>
      </div>
    );
  };

  render() {
    console.log(this.props);
    return (
      <div id="dayView" className="valign-wrapper row">
        {this.renderTemplate()}{" "}
      </div>
    );
  }
}
export default DayView;
