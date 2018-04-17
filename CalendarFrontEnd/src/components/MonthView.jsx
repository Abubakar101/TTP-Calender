import React, { Component } from "react";
import Form from "./Form";
import DayView from "./DayView";
var $ = window.$;
class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      dayId: null,
      dayView: []
    };
  }

  componentDidMount() {
    document.body.addEventListener("click", this.showEventForm);
  }

  showEventForm = event => {
    console.log(event.target.id, event.target.className);
    // console.log(event.target.className === "columns");

    if (event.target.className === "columns") {
      this.setState({ showForm: true, dayId: event.target.id });
      $("#top").css("opacity", "0.1");
      $("#bottom").css("opacity", "0.1");
    } else if (this.state.showForm && event.target.className === "") {
      this.closeEventForm();
    }
  };

  closeEventForm = () => {
    this.setState({ showForm: false });
    $("#top").css("opacity", "1");
    $("#bottom").css("opacity", "1");
  };

  // Converting 24 hour to 12 hour clock
  convertTime = time => {
    let hour = time.substr(0, 2);
    if (hour < 12) {
      return `${time.substr(1)}am`;
    } else {
      return `${time}pm`;
    }
  };

  // Shorten the description for short-preview in event column
  shortDescription = text =>
    text.length > 10 ? `${text.substr(0, 10)}...` : text;

  //   Generating 28 columns
  generateColumn = () => {
    let columns = [];
    for (var i = 1; i <= 28; i++) {
      columns.push(
        this.props.savedData[i] ? (
          <div id={i} className="columns" key={i}>
            {i}
            {this.appendEventInfo(i)}
          </div>
        ) : (
          <div id={i} className="columns" key={i}>
            {i}
          </div>
        )
      );
    }
    return columns;
  };

  // Filling up the days with events
  appendEventInfo = index => {
    const moreEvents = this.props.savedData[index].length - 3;
    const dayEvents = this.props.savedData[index].map((e, i) => {
      return (
        <div id={`${e.dayId}${i}`} key={`${e.dayId}${i}`}>
          <p className="eventShortInfo">
            {this.convertTime(e.startTime)}
            &nbsp;&nbsp;
            <span className="shortDescription">
              {this.shortDescription(e.description)}
            </span>
          </p>
        </div>
      );
    });
    // this.setStateDayEvents(dayEvents);

    if (dayEvents.length > 3) {
      return [
        ...dayEvents.splice(0, 3),
        <div className="moreEvents" key={this.uniqueID()} id={this.uniqueID()}>
          {moreEvents} more
        </div>
      ];
    }
    // Show only top 3 events, otherwise only show the number of events.
    return dayEvents.splice(0, 3);
  };

  // Creating a random unique IDs
  uniqueID = () =>
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9);

  // Setting state with all same-day events to pass down into another component
  setStateDayEvents = dayEvents => this.setState({ dayView: dayEvents });

  // Template Skeleton
  viewTemplate = () => {
    console.log(this.generateColumn());
    return (
      <div id="container">
        <div id="top">
          <h1 id="title">February 2018</h1>
        </div>
        <div id="bottom">
          <div id="week">
            <div className="days">Sun</div>
            <div className="days">Mon</div>
            <div className="days">Tue</div>
            <div className="days">Wed</div>
            <div className="days">Thu</div>
            <div className="days">Fri</div>
            <div className="days">Sat</div>
          </div>
          <div className="rows">{this.generateColumn()}</div>
        </div>
        {/*Form*/}
        {this.state.showForm && (
          <Form
            closeEventForm={this.closeEventForm}
            submitEventForm={this.props.submitEventForm}
            dayId={this.state.dayId}
          />
        )}
      </div>
    );
  };

  render() {
    return <div>{this.viewTemplate()}</div>;
  }
}

export default View;
