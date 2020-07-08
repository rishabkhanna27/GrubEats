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
                       Discover the warm and inviting hospitality that awaits you at GrubEats <br></br>
                        Hotel Chandigarh, India, with its prime location, luxurious accommodation <br></br>
                        and elegant finishing touches. Set in Chandigarh's business district, <br></br>
                        guests are near Sector 17, the airport and the legendary Rock Garden. <br></br>
                        Our popular restaurants include an in-house microbrewery, international <br></br>
                        buffet. Host a meeting or special event in one of our versatile <br></br>
                        conference and wedding venues, including Grand Ballroom and charming <br></br>
                        lawn venue. Take advantage of our catering and expert <br></br>
                        planning services to ensure an occasion to remember. </p>
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
                      <p className="Hometext1"><p className="Homeheading1"><b>Our {' '}<span>Fresh {' '}Chefs</span></b></p>
                      All Fresh Chef Experience Chefs are college-level culinary school graduates<br></br> 
                      and working professionals. Our Chef Instructors have a multitude of <br></br>
                      backgrounds from college-level teaching, to restaurant work, through <br></br>
                      food research and development. We teach mastering the latest techniques <br></br>
                      from the basics through advanced skills for all age groups. So, whether <br></br>
                      you and your guests are beginners desiring to learn some new skills <br></br>
                      or sophisticated foodies who love to cook, our Fresh Chefs are ready to <br></br>
                      instruct you on how to combine fresh ideas, food and a lot of fun!</p>
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
                       Food is a commodity that will soon become a luxury for most of us. Not because <br></br>
                        we won’t be able to afford it, but because food will not be accessible or <br></br>
                        available to the masses. Why, you might ask will this happen? It is because <br></br>
                        the earth too gets exhausted and has an expiry date that may take lifetimes <br></br>
                        to renew. Back in the days of the French revolution, it was the inability of <br></br>
                        people to purchase bread that caused social unrest. In the near future, we may <br></br>
                        not have any food left to fight over. Why? Because we were too caught up with our <br></br>
                        desires of wanting more for now, that we turned a blind eye to the land that <br></br>
                        rotted before us. So Lets get together and stop wasting Food</p>
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