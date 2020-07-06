import React, { Component } from 'react';
import image6 from '../assests/start.jpg';
import image7 from '../assests/start1.jpg';
import image8 from '../assests/start2.jpg';
import {Link, BrowserRouter } from 'react-router-dom'
import {Button} from 'react-bootstrap';
import {ContactForm} from './contact';
import {Cards} from './Cards'
import {SlideShow} from './SlideShow';
import '../App.css'

export class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="slideshow">
                  <SlideShow/>
                </div>
{/* ------------------------------Parallax1--------------------------- */}
                <div id="start" className="leftbox"> 
                       <p className="Hometext"><p className="Homeheading"><b>Grub<span>Eats</span></b></p>
                       fkvf  jmkmkmvjdsjlndncdjccdslcnjdnckajcasjcbbjasn dncjnjd<br></br>
                       chkbsjcshvbjlacvjsnkcbsuvnsdkpbsmc;knregfkewbfjenvbouewnc<br></br>
                       jsnvnskfjnvjlsdnvlknsdjlvnsjkdnvljsn dk mkddljcvnsdlbskvb</p>
                    </div>
                    <div className="rightbox">
                        <img className="pic" src={image6} alt="px"></img>
                    </div>
                <div className="parallax"></div>

{/* ------------------------------Parallax2--------------------------- */}

                <div className="firstdiv">
                    <div className="leftbox1">
                      <img className="pic1" src={image7} alt="px"></img>
                  </div>
                    <div className="rightbox1">
                      <p className="Hometext1"><p className="Homeheading1"><b>From{' '}<span>Our{' '}Chef</span></b></p>
                        fkvf  jmkmkmvjdsjlndncdjccdslcnjdnckajcasjcbbjasn dncjnjd<br></br>
                        chkbsjcshvbjlacvjsnkcbsuvnsdkpbsmc;knregfkewbfjenvbouewnc<br></br>
                        jsnvnskfjnvjlsdnvlknsdjlvnsjkdnvljsn dk mkddljcvnsdlbskvb</p>
                    </div>
                </div> 
                <div className="otherdiv">
                  <Cards/>
                </div>
                <div className="parallax2"></div>
 
{/* ----------------------parallax3------------------------------- */}

              <div className="firstdiv">
                <div className="rightbox2">
                  <img className="pic2" src={image8} alt="px"></img>
                </div>
                <div className="leftbox2">
                       <p className="Hometext1"><p className="Homeheading1"><b>Save Food{' '}<span>Save Life</span></b></p>
                       fkvf  jmkmkmvjdsjlndncdjccdslcnjdnckajcasjcbbjasn dncjnjd<br></br>
                       chkbsjcshvbjlacvjsnkcbsuvnsdkpbsmc;knregfkewbfjenvbouewnc<br></br>
                       jsnvnskfjnvjlsdnvlknsdjlvnsjkdnvljsn dk mkddljcvnsdlbskvb</p>
                    </div>
                    </div>
                    <div className="thirdone">
                      <b>Contact Us</b><br></br>
                      <div className="leftbox3">
                      <iframe title="bjc"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.7188672753873!2d76.80604046539074!3d30.726302881639334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed212e27c319%3A0x75d2b708c2972f18!2sSector%2026%2C%20Chandigarh%2C%20160019!5e0!3m2!1sen!2sin!4v1593529766382!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                       </div>
                       <div className="rightbox3">
                       <ContactForm/>
                    </div>
                    </div>
                    <div className="parallax3"></div>
{/* ------------------------Ending---------------------------------------- */}
                    <div className="thirdtwo">
                      Order Some delecious Food from your expert chef's<br></br>
                      <BrowserRouter >
                      <Link to="/order"><Button varient="danger" size="lg">Order Now</Button></Link>
                      </BrowserRouter >
                    </div>
            </div>
        );
    }
}