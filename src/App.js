import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { TiArrowDownThick } from "react-icons/ti";
import { IoMusicalNotes, IoStar } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { ImShuffle } from "react-icons/im";
import { RxLapTimer } from "react-icons/rx";
import { FaCheck, FaStar } from "react-icons/fa6";



import { useState } from 'react';
import { Button, Container, Form, Nav, Navbar, InputGroup, Row, Col, Carousel, Fade } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './image/logo.png';
import slider from './image/slider.png';
import profile from './image/profile.png';
import playstore from './image/playstore.png';
import appstore from './image/appstore.png';
import women from './image/women.png';
import logo2 from './image/logo2.png';



function App() {
  const [open, setOpen] = useState(false);
  const [cont, setCont] = useState(false);
  const [contant, setContant] = useState(false);


  const option = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    }
  }
  return (
    <>
      {/* header start */}

      <section className='body'>

        <Container>
          <Navbar expand="lg d-flex  justify-content-end justify-content-md-between" className='header'>
            <Container fluid className=' justify-content-end justify-content-lg-between g-2'>
              <Navbar.Brand href="#"><img src={logo}></img> </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="m-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px', color: 'whitesmoke' }}
                  navbarScroll
                >
                   <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2" className='menu'>Company</Nav.Link>
                  <NavDropdown title="product" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3" className='menu'>Feature</NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='menu'>
                      Pricing
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5" className='menu'>
                      Reaview
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action6" className='menu'>
                      Downloand
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='menu'>
                      Video Tutorial
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1" className='menu'>Pages</Nav.Link>
                  <Nav.Link href="#action1" className='menu'>Elements</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <div className="d-flex  download">
                <TiArrowDownThick className='down'></TiArrowDownThick> Downloand
              </div>
            </Container>
          </Navbar>
        </Container>
      </section>

      {/* header end */}

      {/* slider Start */}

      <section className='slider_sec'>
        <Container>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col md={6} >
                  <img src={slider}></img>
                </Col>

                <Col md={6}>
                  <div className='slider_txt d-none d-lg-block'>
                    <h1>Help to improve focus for creative</h1>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    <div className='d-flex'>
                      <div className='more'>LEARN MORE</div>
                      <div className='downlo'>DOWNLOAND</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section >

      {/* slider end */}



      {/* top feature start*/}

      <section className='top_feature'>
        <Container>
          <div className='space'></div>

          <div className="txt">
            <span className='dis'>DISCOVER</span>
            <h1>Top Features</h1>
            <span className='LINE'></span>
            <div className='space'></div>
          </div>
          <Row>
            <Col md={6} lg={4} className='d-flex mt-5'>
              <div className='paren'>
                <div>
                  <IoMusicalNotes className='music'></IoMusicalNotes>
                </div>
                <h2>HD Sounds</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4} className='d-flex mt-5'>
              <div className='paren'>
                <div>
                  <RiPlayListFill className='music'></RiPlayListFill>
                </div>
                <h2>Playlist</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4} className='d-flex mt-5'>
              <div className='paren'>
                <div>
                  <IoStar className='music'></IoStar >
                </div>
                <h2>Favorites</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4} className='d-flex mt-5'>
              <div className='paren'>
                <div>
                  <FaHeartbeat className='music'></FaHeartbeat>
                </div>
                <h2>Mood Detector</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4} className='d-flex mt-5'>
              <div className='paren'>
                <div>
                  <ImShuffle className='music'></ImShuffle>
                </div>
                <h2>Shuffle</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4} className='d-flex mt-5'>
              <div className='paren'>
                <div>
                  <RxLapTimer className='music'></RxLapTimer >
                </div>
                <h2>Timer</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.

                </p>
              </div>
            </Col>
          </Row>
          <div className='space'></div>
          <div className='space'></div>
        </Container>
      </section>
      {/* top feature end*/}

      {/* Profile start */}
      <section className='profile_background'>
        <div className='space'></div>
        <Container>
          <Row>
            <Col className='d-none d-lg-block'>
              <div>
                <img src={profile}></img>
              </div>
            </Col>
            <Col>
              <div className='profile_txt'>
                <span className='pro'>PROFILE</span>
                <h1>Select a profile or create new one. You deciced!</h1>
                <div>
                  <Button
                    onClick={() => setOpen(open ? false : true)}
                    aria-controls="example-fade-text"
                    aria-expanded={open}
                  >
                    <span>Sleep</span>
                  </Button>
                  <Button
                    onClick={() => setCont(cont ? false : true)}
                    aria-controls="example-fade-text"
                    aria-expanded={cont}
                  >
                    <span>Sleep</span>
                  </Button>
                  <Button
                    onClick={() => setContant(contant ? false : true)}
                    aria-controls="example-fade-text"
                    aria-expanded={contant}
                  >
                    <span>Sleep</span>
                  </Button>
                  <Fade in={open}>
                    <div id="example-fade-text">
                      Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
                    </div>

                  </Fade>
                  <Fade in={cont} >
                    <div id="example-fade-text" >
                      Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
                    </div>

                  </Fade>

                  <Fade in={contant}>
                    <div id="example-fade-text">
                      Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
                    </div>

                  </Fade>

                </div>
                <div className='d-flex'>
                  <div className='more'>LEARN MORE</div>
                  <div className='downlo'>DOWNLOAND</div>
                </div>
              </div>
            </Col>

          </Row>
          <div className='space'></div>
        </Container>

      </section>

      {/* Profile end */}

      {/* Plan start */}
      <section className='Plan_Background'>
        <Container>
          <div className='space'></div>
          <div className="txt">
            <span className='dis'>SELECT</span>
            <h1 >Pricing Plans</h1>
            <span className='LINE'></span>
            <div className='space2'></div>
            <span className='d-flex month'>Monthly
              <Form>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                />
              </Form>
              Yearly
            </span>
          </div>
          <Row>
            <Col md={6} lg={4} className='d-flex' style={{ marginTop: '30px' }}>
              <div className='plan_peran'>
                <h2>Free</h2>
                <span className='basic'>Basic</span>
                <h6>$ <span style={{ fontSize: '50px' }}>0</span> p/mo</h6>
                <ul>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>1 device</li>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Daily reminder</li>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Simple reporting</li>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Standart dashboard</li>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Email Notification</li>
                  <li><FaCheck style={{ marginRight: '8px' }}  ></FaCheck>Email Support</li>
                </ul>
                <hr></hr>
                <span className='button'>SIGN UP NOW</span>
              </div>
            </Col>
            <Col md={6} lg={4} className='d-flex' style={{ marginTop: '30px' }}>
              <div className='plan_peran'>
                <h2>Pro</h2>
                <span className='basic'>For Individuals</span>
                <h6>$ <span style={{ fontSize: '50px' }}>9.59</span> p/mo</h6>
                <ul>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Up to 2 devices</li>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Daily reminder</li>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Detailed reporting</li>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Interactive dashboard</li>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Email and SMS notification</li>
                  <li><FaCheck style={{ marginRight: '8px' }}  ></FaCheck>24/7 Customer Support</li>
                </ul>
                <hr></hr>
                <span className='button'>SIGN UP NOW</span>
              </div>
            </Col>
            <Col md={6} lg={4} className='d-flex' style={{ marginTop: '30px' }}>
              <div className='plan_peran'>
                <h2>For Teams</h2>
                <span className='basic'>Best for organization</span>
                <h6>$ <span style={{ fontSize: '50px' }}>24.99</span> p/mo</h6>
                <ul>
                  <li><FaCheck style={{ marginRight: '8px', Color: '#8167E6' }}></FaCheck>Up to 10 devices</li>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Daily reminder</li>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Detailed reporting</li>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Interactive dashboard</li>
                  <li><FaCheck style={{ marginRight: '8px' }}></FaCheck>Email and SMS notification</li>
                  <li><FaCheck style={{ marginRight: '8px' }}  ></FaCheck>24/7 Customer Support</li>
                </ul>
                <hr></hr>
                <span className='button'>SIGN UP NOW</span>

              </div>

            </Col>
            <span style={{ textAlign: 'center', marginTop: '35px' }}>Price shown are in USD and VAT inclusive.</span>
          </Row>
        </Container>
        <div className='space2'></div>
      </section>
      <section className='Plan_Background'>
        <Container>
          <div className='FAQ'>
            <h1>FAQ</h1>
            <span className='LINE'></span>
          </div>
          <div className='space'></div>
          <Row>
            <Col md={6}>
              <Accordion>
                <Accordion.Item eventKey="0" >
                  <Accordion.Header> How do i get the app for my phone?</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>What plan I should choose?</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>What happen to my app if I stop paying?</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={6}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Does it have in-app purchases?</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Can I use this app on multiple devices?</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Is my phone supported for this app?</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <div className='space'></div>
        </Container>
      </section>

      {/* Plan end */}

      {/* Customer start */}

      <section className='customer'>
        <Container>
          <div className='space'></div>
          <div className="txt">
            <span className='dis'>LATEST</span>
            <h1>Customer Reviews</h1>
            <span className='LINE'></span>
            <div className='space'></div>
          </div>
          <OwlCarousel className='owl-theme' loop margin={10}  {...option}>
            <div class='item Customer_paren' >

              <div className="Gstar">
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
              </div>
              <h3>Pretty Awesome!</h3>
              <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
              </p>
              <span style={{ color: '#8167e6' }}>John,Pixar Studio</span>
            </div>
            <div class='item Customer_paren'>
              <div className="Gstar">
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
              </div>
              <h3>Excellent!</h3>
              <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
              </p>
              <span style={{ color: '#8167e6' }}>Sarah, Microsoft</span>
            </div>
            <div class='item Customer_paren'>
              <div className="Gstar">
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
              </div>
              <h3>Unbelievable!</h3>
              <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
              </p>
              <span style={{ color: '#8167e6' }}>Michael, Apple</span>
            </div>
            <div class='item Customer_paren'>
              <div className="Gstar">
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
              </div>
              <h3>Fantastic!</h3>
              <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
              </p>
              <span style={{ color: '#8167e6' }}>Thomas, Samsung</span>
            </div>
            <div class='item Customer_paren'>
              <div className="Gstar">
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
              </div>
              <h3>Easy to use!</h3>
              <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
              </p>
              <span style={{ color: '#8167e6' }}>John, Pixar Studio</span>

            </div>
            <div class='item Customer_paren'>
              <div className="Gstar">
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
              </div>
              <h3>Beauty Interface!</h3>
              <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
              </p>
              <span style={{ color: '#8167e6' }}>Sarah, Microsoft</span>
            </div>
            <div class='item Customer_paren'>
              <div className="Gstar">
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
              </div>
              <h3>Great App!</h3>
              <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
              </p>
              <span style={{ color: '#8167e6' }}>Michael, Apple</span>
            </div>
            <div class='item Customer_paren'>
              <div className="Gstar">
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
              </div>
              <h3>Love It!</h3>
              <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
              </p>
              <span style={{ color: '#8167e6' }}>Thomas, Samsung</span>
            </div>
            <div class='item Customer_paren'>
              <div className="Gstar">
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
                <FaStar className="star"></FaStar>
              </div>
              <h3>Pretty Awesome!</h3>
              <p>Great app, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.
              </p>
              <span style={{ color: '#8167e6' }}>John, Pixar Studio</span>
            </div>
          </OwlCarousel>
          <div className='space'></div>
        </Container>
      </section>
      {/* Customer end */}

      {/* members start */}
      <section className='member'>
        <Container>
          <div className='space'></div>
          <Row>
            <Col md={3}>
              <h2 style={{ color: '#8167E6' }}>2010</h2>
              <h5>Year we've founded</h5>
            </Col>
            <Col md={3}>
              <h2 style={{ color: '#8167E6' }}>3m</h2>
              <h5>Monthly active users</h5>
            </Col>
            <Col md={3}>
              <h2 style={{ color: '#8167E6' }}>100+</h2>
              <h5>Team members</h5>
            </Col>
            <Col md={3}>
              <h2 style={{ color: '#8167E6' }}>75</h2>
              <h5>Countries using our product</h5>
            </Col>
          </Row>
          <div className='space'></div>
        </Container>
      </section>

      {/* members end */}

      {/* Available  start*/}
      <section className='Available'>
        <Container>
          <Row>
            <Col>
              <div className='space'></div>
              <div className='play_parent'>
                <span className='DOWNLOAND'>DOWNLOAND</span>
                <h1>Available on iOS and Android</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt ab illo inventore veritatis et explicabo. Nemo enim ipsam voluptatem.</p>
                <div>
                  <img src={appstore}></img>
                  <img src={playstore} style={{ marginLeft: '5px' }}></img>
                </div>
              </div>
            </Col>
            <Col>
              <div className='women'>
                <img src={women}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Available  end*/}

      {/* footer start */}
      <section>
        <div className='space'></div>
        <Container>
          <Row>
            <Col md={2}>
              <img src={logo2}></img>
            </Col>
            <Col md={3} className='footer_txt'>
              <ul className='list'>
                <h4 style={{color:'#1E1C23'}}>Company</h4>
                <li> About Us</li>
                <li> Jobs</li>
                <li> Contant</li>
              </ul>
            </Col>
            <Col md={2} className='footer_txt'>
              <ul className='list'>
                <h4 style={{color:'#1E1C23'}}>Product</h4>
                <li> Features</li>
                <li> Pricing</li>
                <li> Reviews</li>
                <li> Downloand</li>
              </ul>
            </Col>
            <Col md={2} className='footer_txt'>
              <ul className='list'>
                <h4 style={{color:'#1E1C23'}}>Resources</h4>
                <li> Blog</li>
                <li> Video Tutorial</li>
              </ul>
            </Col>
            <Col md={2} className='footer_txt'>
              <h4 style={{color:'#1E1C23'}}>Newsletter</h4>
              <p style={{color:'#1E1C23'}}>Signup for our newsletter to get the latest news, updates and special offers in your inbox.</p>
              <input type='text' placeholder='Enter your Email'></input>
            </Col>
          </Row>
        </Container>
      </section>

      {/* footer end */}


    </>
  );
}

export default App;