import React, { Component } from 'react';
import {CardDeck, Card} from 'react-bootstrap';
import image1 from '../assests/card1.jpg';
import image2 from '../assests/card2.jpg';
import image3 from '../assests/card3.jpg';
import image4 from '../assests/card4.jpeg';
import image5 from '../assests/card5.jpg';
import '../App.css'

export class Cards extends Component{
    render(){
        return(
            <div>
              <div className="headings"><b>Different Cuisines Available</b></div>
            <CardDeck className="card">
            <Card>
              <Card.Img className="picture" variant="top" src={image1} />
              <Card.Body>
                <Card.Title className="heading" >Chinese</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img className="picture" variant="top" src={image2} />
              <Card.Body>
                <Card.Title className="heading" >Punjabi Food</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img className="picture" variant="top" src={image3} />
              <Card.Body>
                <Card.Title className="heading" >Street Food</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img className="picture" variant="top" src={image4} />
              <Card.Body>
                <Card.Title className="heading" >South Indian</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img className="picture" variant="top" src={image5} />
              <Card.Body>
                <Card.Title className="heading" >Italian</Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
          </div>
        );
    }
}
export default Cards;