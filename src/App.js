import React from 'react';
import DraggableCore from 'react-draggable';
import Draggable from 'react-draggable';
import { Carousel } from 'react-bootstrap';
import './App.css';
import hat1 from './pics/hat1.png'
import hat2 from './pics/hat2.png'
import hat3 from './pics/hat3.png'
import hat4 from './pics/hat4.png'
import cat1 from './pics/cat1.png'
import cat2 from './pics/cat2.png'
import cat3 from './pics/cat3.png'
import cat4 from './pics/cat4.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel';


class App extends React.Component {

  constructor(props){
    super(props);
    this.z = 10;
  }

  changeZ(e) {
    this.z += 1
    document.getElementById(e.currentTarget.id).style.zIndex = this.z
    console.log(document.getElementById(e.currentTarget.id).style.zIndex)
  }

  render() {
    return (
      <div>
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
                    <img className="hat" src={hat1} alt="Hat"></img>
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
                    <img className="hat" src={hat2} alt="Hat"></img>
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
                    <img className="hat" src={hat3} alt="Hat"></img>
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
                    <img className="hat" src={hat4} alt="Hat"></img>
                    </div>
                </div>
              </Draggable>
            </div>
          </div>
        </div>

        <Carousel interval={null}>
          <Carousel.Item>
            <img
              className="cat d-block w-100"
              src={cat1}
              alt="cat1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cat d-block w-100"
              src={cat2}
              alt="cat2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cat d-block w-100"
              src={cat3}
              alt="cat3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cat d-block w-100"
              src={cat4}
              alt="cat4"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default App;
