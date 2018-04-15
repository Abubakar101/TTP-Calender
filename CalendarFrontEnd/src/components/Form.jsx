import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div id="addEventForm" className="valign-wrapper row">
      
      <div className="col card hoverable s7">
      <i id="closeForm" className="material-icons right" onClick={e=> this.props.closeEventForm()}>close</i>
          <form onSubmit={e => {
            e.preventDefault();
            this.props.submitEventForm(e)
            this.props.closeEventForm() }}>
            <div className="card-content">
              <span className="card-title">Add Event</span>

              <div className="row">
                <div className=" col s12">
                  <label className=" col s6">Start Time</label>
                  <label className=" col s6">End Time </label>
                </div>
                <div className="input-field col s6">
                  <i className="material-icons prefix">timer</i>
                  <input
                    type="time"
                    className="addEvent"
                    name="startTime"
                    id="startTime"
                  />
                </div>
                <div className="input-field col s6">
                <i className="material-icons prefix">timer_off</i>
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
                  <i className="material-icons prefix">description</i>
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
