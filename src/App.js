import React from 'react';
import Draggable from 'react-draggable';
import { Carousel, Dropdown, DropdownButton, Button } from 'react-bootstrap';
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
import hat13 from './pics/hat13.png'
import hat14 from './pics/hat14.png'
import hat15 from './pics/hat15.png'
import hat16 from './pics/hat16.png'
import hat17 from './pics/hat17.png'
import hat18 from './pics/hat18.png'
import hat19 from './pics/hat19.png'
import hat20 from './pics/hat20.png'
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
import cat13 from './pics/cat13.png'
import cat14 from './pics/cat14.png'
import cat15 from './pics/cat15.png'
import cat16 from './pics/cat16.png'
import cat17 from './pics/cat17.png'
import cat18 from './pics/cat18.png'
import cat19 from './pics/cat19.png'
import cat20 from './pics/cat20.png'
import bg1 from './pics/bg1.png'
import bg2 from './pics/bg2.png'
import bg3 from './pics/bg3.png'
import bg4 from './pics/bg4.png'
import bg5 from './pics/bg5.png'
import bg6 from './pics/bg6.png'
import bg7 from './pics/bg7.png'
import bg8 from './pics/bg8.png'
import bg9 from './pics/bg9.png'
import bg10 from './pics/bg10.png'


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
      bg: "url(" + bg1 + ")",
      slideDark : true,
      carouselIndex : 0,
      positionX : 0,
      positionY : 0
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
      case "4":
        this.setState({
          hat_1: hat13,
          hat_2: hat14,
          hat_3: hat15,
          hat_4: hat16
        })
      break;
      case "5":
        this.setState({
          hat_1: hat17,
          hat_2: hat18,
          hat_3: hat19,
          hat_4: hat20
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
      case "4":
        this.setState({
          cat_1: cat13,
          cat_2: cat14,
          cat_3: cat15,
          cat_4: cat16
        })
        break;
      case "5":
        this.setState({
          cat_1: cat17,
          cat_2: cat18,
          cat_3: cat19,
          cat_4: cat20
        })
        break;
      default:
        break;
    }
  }

  switchBackground(key) {
    switch(key) {
      case "1":
        this.setState({
          bg: "url(" + bg1 + ")",
          slideDark: true
        })
        break;
      case "2":
        this.setState({
          bg: "url(" + bg2 + ")",
          slideDark: true
        })
        break;
      case "3":
        this.setState({
          bg: "url(" + bg3 + ")",
          slideDark: false
        })
        break;
      case "4":
        this.setState({
          bg: "url(" + bg4 + ")",
          slideDark: true
      })
        break;
      case "5":
        this.setState({
          bg: "url(" + bg5 + ")",
          slideDark: false
      })
        break;
      case "6":
        this.setState({
          bg: "url(" + bg6 + ")",
          slideDark: true
        })
        break;
      case "7":
        this.setState({
          bg: "url(" + bg7 + ")",
          slideDark: true
        })
        break;
      case "8":
        this.setState({
          bg: "url(" + bg8 + ")",
          slideDark: false
        })
        break;
      case "9":
        this.setState({
          bg: "url(" + bg9 + ")",
          slideDark: true
      })
        break;
      case "10":
        this.setState({
          bg: "url(" + bg10 + ")",
          slideDark: false
      })
        break;
      default:
        break;
    }
  }

  randomize() {
    let randCarouselIndex = Math.floor(Math.random() * 4)
    console.log(randCarouselIndex)
    this.switchHatSet(String(Math.floor(Math.random() * 5) + 1))
    this.switchCatSet(String(Math.floor(Math.random() * 5) + 1))
    this.switchBackground(String(Math.floor(Math.random() * 10) + 1))
    this.setState({
      carouselIndex: randCarouselIndex
    })
  }

  handleSelect(selectedIndex, e) {
    console.log(selectedIndex)
    this.setState({
      carouselIndex : selectedIndex
    })
  }

  reset() {
    this.setState({
      hat_1 : hat1,
      hat_2 : hat2,
      hat_3 : hat3,
      hat_4 : hat4,
      cat_1 : cat1,
      cat_2 : cat2,
      cat_3 : cat3,
      cat_4 : cat4, 
      bg: "url(" + bg1 + ")",
      slideDark : true,
      carouselIndex : 0
      
    })
  }
  

  render() {
    return (
      <div className="main" style={{backgroundImage: this.state.bg}}>
        <div className="container title-container">
          <h1 className="title text-center">Cat Hat</h1>
          <h2 className="title text-center"><i>Place the hats on the cats!</i></h2>
        </div>
        <div className="container hat-cat-container">
          <div className="row">
            <div className="col-xxl">
              <div className="container hat-container">
                <div className="row row-cols-1 row-cols-md-2">
                  <div className="col hat-col d-flex justify-content-center">
                    <Draggable
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
                    </Draggable>
                  </div>
                  <div className="col hat-col d-flex justify-content-center">
                    <Draggable
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
                  <div className="col hat-col d-flex justify-content-center">
                    <Draggable
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
                  <div className="col hat-col d-flex justify-content-center">
                    <Draggable
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
              <Carousel 
                interval={null} 
                variant={this.state.slideDark ? "dark" : ""}
                activeIndex={this.state.carouselIndex}
                onSelect={(selectedIndex, e) => {
                  this.handleSelect(selectedIndex, e)
                }}
                slide={false}
              >
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
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col d-flex justify-content-center">
              <Dropdown onSelect={(key, e) => {
                  this.switchHatSet(key)
                }}>
                <DropdownButton id="dropdown-basic-button" title="Hat Sets" className="menu select-button" menuVariant="dark" variant="secondary" size="lg" drop="up">
                  <Dropdown.Item eventKey="1" className="d-flex justify-content-center">Hat Set 1</Dropdown.Item>
                  <Dropdown.Item eventKey="2" className="d-flex justify-content-center">Hat Set 2</Dropdown.Item>
                  <Dropdown.Item eventKey="3" className="d-flex justify-content-center">Hat Set 3</Dropdown.Item>
                  <Dropdown.Item eventKey="4" className="d-flex justify-content-center">Hat Set 4</Dropdown.Item>
                  <Dropdown.Item eventKey="5" className="d-flex justify-content-center">Hat Set 5</Dropdown.Item>
                </DropdownButton>
              </Dropdown>
            </div>
            <div className="menu col d-flex justify-content-center">
              <Dropdown onSelect={(key, e) => {
                  this.switchCatSet(key)
                }}>
                <DropdownButton id="dropdown-basic-button" title="Cat Sets" className="select-button" menuVariant="dark" variant="secondary" size="lg" drop="up">
                  <Dropdown.Item eventKey="1" className="d-flex justify-content-center">Cat Set 1</Dropdown.Item>
                  <Dropdown.Item eventKey="2" className="d-flex justify-content-center">Cat Set 2</Dropdown.Item>
                  <Dropdown.Item eventKey="3" className="d-flex justify-content-center">Cat Set 3</Dropdown.Item>
                  <Dropdown.Item eventKey="4" className="d-flex justify-content-center">Cat Set 4</Dropdown.Item>
                  <Dropdown.Item eventKey="5" className="d-flex justify-content-center">Cat Set 5</Dropdown.Item>
                </DropdownButton>
              </Dropdown>
            </div>
            <div className="menu col d-flex justify-content-center">
              <Dropdown onSelect={(key, e) => {
                  this.switchBackground(key);
                }}>
                <DropdownButton id="dropdown-basic-button" title="Backgrounds" className="select-button" menuVariant="dark" variant="secondary" size="lg" drop="up">
                  <Dropdown.Item eventKey="1" className="d-flex justify-content-center">Home</Dropdown.Item>
                  <Dropdown.Item eventKey="2" className="d-flex justify-content-center">Party</Dropdown.Item>
                  <Dropdown.Item eventKey="3" className="d-flex justify-content-center">Library</Dropdown.Item>
                  <Dropdown.Item eventKey="4" className="d-flex justify-content-center">Space</Dropdown.Item>
                  <Dropdown.Item eventKey="5" className="d-flex justify-content-center">Outdoors</Dropdown.Item>
                  <Dropdown.Item eventKey="6" className="d-flex justify-content-center">Joker</Dropdown.Item>
                  <Dropdown.Item eventKey="7" className="d-flex justify-content-center">Desert</Dropdown.Item>
                  <Dropdown.Item eventKey="8" className="d-flex justify-content-center">McDonalds</Dropdown.Item>
                  <Dropdown.Item eventKey="9" className="d-flex justify-content-center">Cyberpunk</Dropdown.Item>
                  <Dropdown.Item eventKey="10" className="d-flex justify-content-center">Western</Dropdown.Item>
                </DropdownButton>
              </Dropdown>
            </div>
            <div className="menu col d-flex justify-content-center">
              <Button className="random-button" variant="secondary" size="lg" onClick={(e) => {
                this.randomize();
              }}>Randomize
              </Button>
            </div>
            <div className="menu col d-flex justify-content-center">
              <Button className="reset-button" variant="secondary" size="lg" onClick={(e) => {
                this.reset();
              }}>Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
