import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="valign-wrapper row login-box">
        <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
          <form onSubmit={e => this.props.submitEvent(true)}>
            <div className="card-content">
              <span className="card-title">Add Event</span>

              <div className="row">
                <div className=" col s12">
                  <label className=" col s6">Start Time</label>
                  <label className=" col s6">End Time </label>
                </div>
                <div className="input-field col s6">
                  <i class="material-icons prefix">access_time</i>
                  <input
                    type="time"
                    className="addEvent"
                    name="endTime"
                    id="endTime"
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    type="time"
                    className="addEvent"
                    name="endTime"
                    id="endTime"
                  />
                </div>
              </div>

              <div className="row">
                <div className=" col s12">
                  <label className=" col s12">Description</label>
                </div>
                <div className="input-field col s12">
                  <i class="material-icons prefix">description</i>
                  <input
                    type="text"
                    className="addEvent"
                    name="description"
                    id="description"
                  />
                </div>
              </div>
            </div>

            <div className="card-action right-align">
              <input
                type="reset"
                id="reset"
                className="btn-flat grey-text waves-effect"
              />
              <input
                type="submit"
                className="btn green waves-effect waves-light"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;
