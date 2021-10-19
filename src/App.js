import React from 'react';
import DraggableCore from 'react-draggable';
import Draggable from 'react-draggable';
import { Carousel, Dropdown, DropdownButton } from 'react-bootstrap';
import './App.css';
import hat1 from './pics/hat1.png'
import hat2 from './pics/hat2.png'
import hat3 from './pics/hat3.png'
import hat4 from './pics/hat4.png'
import hat5 from './pics/hat5.png'
import hat6 from './pics/hat6.png'
import hat7 from './pics/hat7.png'
import hat8 from './pics/hat8.png'
import hat9 from './pics/hat9.png'
import hat10 from './pics/hat10.png'
import hat11 from './pics/hat11.png'
import hat12 from './pics/hat12.png'
import cat1 from './pics/cat1.png'
import cat2 from './pics/cat2.png'
import cat3 from './pics/cat3.png'
import cat4 from './pics/cat4.png'
import cat5 from './pics/cat5.png'
import cat6 from './pics/cat6.png'
import cat7 from './pics/cat7.png'
import cat8 from './pics/cat8.png'
import cat9 from './pics/cat9.png'
import cat10 from './pics/cat10.png'
import cat11 from './pics/cat11.png'
import cat12 from './pics/cat12.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel';


class App extends React.Component {

  constructor(props){
    super(props);
    this.z = 10;
    this.state = {
      hat_1 : hat1,
      hat_2 : hat2,
      hat_3 : hat3,
      hat_4 : hat4,
      cat_1 : cat1,
      cat_2 : cat2,
      cat_3 : cat3,
      cat_4 : cat4,
    }
  }

  changeZ(e) {
    this.z += 1
    document.getElementById(e.currentTarget.id).style.zIndex = this.z
    console.log(document.getElementById(e.currentTarget.id).style.zIndex)
  }

  switchHatSet(key) {
    switch(key) {
      case "1":
        this.setState({
          hat_1: hat1,
          hat_2: hat2,
          hat_3: hat3,
          hat_4: hat4
        })
        break;
      case "2":
        this.setState({
          hat_1: hat5,
          hat_2: hat6,
          hat_3: hat7,
          hat_4: hat8
        })
        break;
      case "3":
        this.setState({
          hat_1: hat9,
          hat_2: hat10,
          hat_3: hat11,
          hat_4: hat12
        })
        break;
      default:
        break;
    }
  }

  switchCatSet(key) {

    switch(key) {
      case "1":
        this.setState({
          cat_1: cat1,
          cat_2: cat2,
          cat_3: cat3,
          cat_4: cat4
        })
        break;
      case "2":
        this.setState({
          cat_1: cat5,
          cat_2: cat6,
          cat_3: cat7,
          cat_4: cat8
        })
        break;
      case "3":
        this.setState({
          cat_1: cat9,
          cat_2: cat10,
          cat_3: cat11,
          cat_4: cat12
        })
        break;
      default:
        break;
    }
  }
  

  render() {
    return (
      <div>
        <div className="container title-container">
          <h1 className="title text-center">Cat Hat</h1>
          <h2 className="title text-center"><i>Place the hats on the cats!</i></h2>
        </div>
        <div className="container hat-cat-container">
          <div className="row">
            <div className="col-xxl">
              <div className="container hat-container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-4">
                  <div className="col d-flex justify-content-center">
                    <DraggableCore
                      dle=".handle"
                      defaaxis="both"
                      hanultPosition={{x: 0, y: 0}}
                      position={null}
                      scale={1}
                      onStart={this.handleStart}
                      onDrag={this.handleDrag}
                      onStop={this.handleStop}
                      onMouseDown={(e) => {
                        this.changeZ(e)
                      }}>
                      <div className="box handle" id="box1">
                        <div className="">
                          <img className="hat" src={this.state.hat_1} alt="Hat"></img>
                          </div>
                      </div>
                    </DraggableCore>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <Draggable
                      dle=".handle"
                      defaaxis="both"
                      hanultPosition={{x: 0, y: 0}}
                      position={null}
                      scale={1}
                      onStart={this.handleStart}
                      onDrag={this.handleDrag}
                      onStop={this.handleStop}
                      onMouseDown={(e) => {
                        this.changeZ(e)
                      }}>        
                      <div className="box handle" id="box2">
                        <div className="">
                          <img className="hat" src={this.state.hat_2} alt="Hat"></img>
                          </div>
                      </div>
                    </Draggable>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <Draggable
                      dle=".handle"
                      defaaxis="both"
                      hanultPosition={{x: 0, y: 0}}
                      position={null}
                      scale={1}
                      onStart={this.handleStart}
                      onDrag={this.handleDrag}
                      onStop={this.handleStop}
                      onMouseDown={(e) => {
                        this.changeZ(e)
                      }}>
                      <div className="box handle" id="box3">
                        <div className="">
                          <img className="hat" src={this.state.hat_3} alt="Hat"></img>
                          </div>
                      </div>
                    </Draggable>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <Draggable
                      dle=".handle"
                      defaaxis="both"
                      hanultPosition={{x: 0, y: 0}}
                      position={null}
                      scale={1}
                      onStart={this.handleStart}
                      onDrag={this.handleDrag}
                      onStop={this.handleStop}
                      onMouseDown={(e) => {
                        this.changeZ(e)
                      }}>
                      <div className="box handle" id="box4">
                        <div className="">
                          <img className="hat" src={this.state.hat_4} alt="Hat"></img>
                          </div>
                      </div>
                    </Draggable>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl">
              <Carousel interval={null}>
                <Carousel.Item>
                  <img
                    className="cat d-block w-100"
                    src={this.state.cat_1}
                    alt="cat1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="cat d-block w-100"
                    src={this.state.cat_2}
                    alt="cat2"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="cat d-block w-100"
                    src={this.state.cat_3}
                    alt="cat3"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="cat d-block w-100"
                    src={this.state.cat_4}
                    alt="cat4"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="container select-container d-flex justify-content-center">
          <Dropdown onSelect={(key, e) => {
              this.switchHatSet(key)
            }}>
            <DropdownButton id="dropdown-basic-button" title="Select Hat Set" className="select-button">
              <Dropdown.Item eventKey="1">Hat Set 1</Dropdown.Item>
              <Dropdown.Item eventKey="2">Hat Set 2</Dropdown.Item>
              <Dropdown.Item eventKey="3">Hat Set 3</Dropdown.Item>
            </DropdownButton>
          </Dropdown>

          <Dropdown onSelect={(key, e) => {
              this.switchCatSet(key)
            }}>
            <DropdownButton id="dropdown-basic-button" title="Select Cat Set" className="select-button">
              <Dropdown.Item eventKey="1">Cat Set 1</Dropdown.Item>
              <Dropdown.Item eventKey="2">Cat Set 2</Dropdown.Item>
              <Dropdown.Item eventKey="3">Cat Set 3</Dropdown.Item>
            </DropdownButton>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default App;
