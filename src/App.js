import React from "react";
import "./App.scss";
import { Carousel } from "react-bootstrap";
import Welcome from "./Welcome";
import Decidel from "./Decidel";
import Learning from "./Learning";
import DevelopmentRecipes from "./DevelopmentRecipes";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container justify-content-center">
          <div className="welcome-container">
            <Welcome />
          </div>
          <div id="projects" className="projects-container">
            <Carousel interval={null}>
              <Carousel.Item>
                <Decidel />
              </Carousel.Item>
              <Carousel.Item>
                <DevelopmentRecipes />
              </Carousel.Item>
              <Carousel.Item>
                <Learning />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
