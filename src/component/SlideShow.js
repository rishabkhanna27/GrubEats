import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView ,MDBCarouselCaption} from"mdbreact";
import image1 from '../assests/slide1.jpg';
import image2 from '../assests/slide2.jpg';
import image3 from '../assests/slide3.jpg';
import image4 from '../assests/slide4.jpg';
import image5 from '../assests/slide5.jpg';
import {Button} from 'react-bootstrap';

export class SlideShow extends Component{
    render(){
        return(
            <MDBCarousel
                  activeItem={1}
                  length={5}
                  showControls={true}
                  showIndicators={true}
                  className="z-depth-1"
                >
                  <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img
                          className="slide d-block w-100"
                          src={image1}
                          alt="First slide"
                        />
                        
                        <MDBCarouselCaption>
                          <h3 className="cap h3-responsive"><b><u>Grub<span>Eats</span></u></b></h3>
                          <Button variant="light"className="capbtn" size="lg"><a className="linkbtn" href="#start">Explore</a></Button>
                        </MDBCarouselCaption>
                      </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img
                          className="slide d-block w-100"
                          src={image2}
                          alt="Second slide"
                        />
                        <MDBCarouselCaption>
                          <h3 className="cap h3-responsive"><b><u>Grub<span>Eats</span></u></b></h3>
                          <Button variant="light"className="capbtn" size="lg"><a className="linkbtn" href="#start">Explore</a></Button>

                        </MDBCarouselCaption>
                      </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img
                          className="slide d-block w-100"
                          src={image3}
                          alt="Third slide"
                        />
                        <MDBCarouselCaption>
                          <h3 className="cap h3-responsive"><b><u>Grub<span>Eats</span></u></b></h3>
                          <Button variant="light"className="capbtn" size="lg"><a className="linkbtn" href="#start">Explore</a></Button>

                        </MDBCarouselCaption>
                      </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="4">
                      <MDBView>
                        <img
                          className="slide d-block w-100"
                          src={image4}
                          alt="Fourth slide"
                        />
                        <MDBCarouselCaption>
                          <h3 className="cap h3-responsive"><b><u>Grub<span>Eats</span></u></b></h3>
                          <Button variant="light"className="capbtn" size="lg"><a className="linkbtn" href="#start">Explore</a></Button>

                        </MDBCarouselCaption>
                      </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="5">
                      <MDBView>
                        <img
                          className="slide d-block w-100"
                          src={image5}
                          alt="Fifth slide"
                        />
                        <MDBCarouselCaption>
                          <h3 className="cap h3-responsive"><b><u>Grub<span>Eats</span></u></b></h3>
                          <Button variant="light"className="capbtn" size="lg"><a className="linkbtn" href="#start">Explore</a></Button>

                        </MDBCarouselCaption>
                      </MDBView>
                      </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
        );
    }
}