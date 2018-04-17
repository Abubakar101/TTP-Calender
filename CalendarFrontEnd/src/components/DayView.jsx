import React, { Component } from "react";

class DayView extends Component {



  render() {
      console.log(this.props)
    return (
      <div id="dayView" className="valign-wrapper row">
        <div className="col card hoverable s7">
          <i
            id="closeDayView"
            className="material-icons right"
            onClick={e => this.props.closeDayView()}
          >
            close
          </i>

          <div className="card-content">
            <span className="card-title">Tuesday 8th 2018 </span>

            <div className="row">
              <div className=" col s12 dayViewCol">
                <i className="material-icons prefix col s1 ">access_time</i>
                <label className=" col s2">02 : 12 AM</label>
                <label className=" col s2">12 : 30 PM </label>
                <label className=" col s6 dayViewDescription">My name is Muhammad ABubakar and tomorrow I will go to school </label>
              </div>
              
            </div>
            <div className="row">
              <div className=" col s12 dayViewCol">
                <i className="material-icons prefix col s1">access_time</i>
                <label className=" col s2">02 : 12 AM</label>
                <label className=" col s2">12 : 30 PM </label>
                <label className=" col s6 dayViewDescription">My name is Muhammad ABubakar and tomorrow I will go to school </label>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DayView;
