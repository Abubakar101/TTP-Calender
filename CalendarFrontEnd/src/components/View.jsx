import React, { Component } from "react";
import Form from "./Form";
var $ = window.$;
class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  componentDidMount() {
    document.body.addEventListener("click", this.showEventForm);
  }

  showEventForm = event => {
    console.log(event.target.id);
    console.log(event.target.className === "columns");

    if (event.target.className === "columns") {
      this.setState({ showForm: true });
      $("#top").css("opacity", "0.1");
      $("#bottom").css("opacity", "0.1");
    }
  };

  closeEventForm = () => {
    this.setState({ showForm: false });
    $("#top").css("opacity", "1");
    $("#bottom").css("opacity", "1");
  };


  viewTemplate = () => {
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
          <div className="rows">
            <div id="1" className="columns">
              1
            </div>
            <div id="2" className="columns">
              2
            </div>
            <div id="3" className="columns">
              3
            </div>
            <div id="4" className="columns">
              4
            </div>
            <div id="5" className="columns">
              5
            </div>
            <div id="6" className="columns">
              6
            </div>
            <div id="7" className="columns">
              7
            </div>

            <div id="8" className="columns">
              8
            </div>
            <div id="9" className="columns">
              9
            </div>
            <div id="10" className="columns">
              10
            </div>
            <div id="11" className="columns">
              11
            </div>
            <div id="12" className="columns">
              12
            </div>
            <div id="13" className="columns">
              13
            </div>
            <div id="14" className="columns">
              14
            </div>

            <div id="15" className="columns">
              15
            </div>
            <div id="16" className="columns">
              16
            </div>
            <div id="17" className="columns">
              17
            </div>
            <div id="18" className="columns">
              18
            </div>
            <div id="19" className="columns">
              19
            </div>
            <div id="20" className="columns">
              20
            </div>
            <div id="21" className="columns">
              21
            </div>

            <div id="22" className="columns">
              22
            </div>
            <div id="23" className="columns">
              23
            </div>
            <div id="24" className="columns">
              24
            </div>
            <div id="25" className="columns">
              25
            </div>
            <div id="26" className="columns">
              26
            </div>
            <div id="27" className="columns">
              27
            </div>
            <div id="28" className="columns">
              28
            </div>
          </div>
        </div>
        {this.state.showForm && <Form closeEventForm={this.closeEventForm} submitEventForm={this.props.submitEventForm}/>}
      </div>
    );
  };

  render() {
    return <div>{this.viewTemplate()}</div>;
  }
}

export default View;
