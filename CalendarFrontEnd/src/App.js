import React, { Component } from "react";
import { Col, Row } from "react-materialize";
import "./App.css";
import axios from "axios";

import Nav from "./components/Nav";
import View from "./components/View";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedData: [],
      showForm: false
    };
  }

  async componentDidMount() {
    // Get all saved data from DB
    this.getDBInfo();
  }

  // Getting data from  database
  getDBInfo = async () => {
    try {
      await axios.get("/datas").then(res => {
        const parsed = res.data.map(e => {
          return {
            id: e.id,
            faces: JSON.parse(e.face),
            image: e.image,
            favorite: e.favorite
          };
        });

        this.setState({ savedData: parsed });
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Adding saved data into Database - both information and image
  addInfo = async (faces, image) => {
    let face = JSON.stringify(faces);
    let data = { face, image, favorite: false };

    try {
      await axios.post("/datas", data).then(res => {
        let parsed = {
          id: res.data.id,
          faces: JSON.parse(res.data.face),
          image: res.data.image,
          favorite: res.data.favorite
        };
        this.setState({ savedData: [...this.state.savedData, parsed] });
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="app">
        <Nav />
        <View />
      </div>
    );
  }
}

export default App;
