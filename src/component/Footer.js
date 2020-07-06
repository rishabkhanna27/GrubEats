import React,{Component} from 'react';
import { faFacebook , faLinkedinIn, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { MDBContainer } from 'mdbreact';
import './Footer.css';
import {faHeart, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class Footer extends Component{
    render(){
        return(
      <div>
        <footer className="footer-distributed">
			      <div className="footer-left">
			      	<h3><b>Grub<span>Eats</span></b></h3>
              <br></br>
			      	<p className="footer-company-name">GrubEats © 2020</p>
			      </div>
			      <div className="footer-center">
              <p className="contact">
            <b>Contact Information</b>
			      	</p>
              <br></br><br></br>
				    <div>
            <p><FontAwesomeIcon icon={faPhone }/>{' '}+91{' '}9876020239</p>
				    </div>
				    <div>
            <a href="mailto:support@company.com"><FontAwesomeIcon icon={faEnvelope }/>{' '}rishabkhanna27@gmail.com</a>
				    </div>
			    </div>
			  <div className="footer-right">
			  	<p className="footer-company-about ">
			  		<span>About GrubEats</span>
			  		Grub eats is an online food odering website, which also helps the user to search nearby resturants.
			  	</p>
          <br></br>
          <div className="contain icon">
            <ul className=" list-unstyled list-inline text-center text-dark">
              <li className=" logo list-inline-item ">
                <div><a className="linkbtn" href="https://www.facebook.com/rishabkhanna27">
                <FontAwesomeIcon icon={faFacebook } size = '3x' />{' '}</a>
                </div>
              </li>
              <li className="logo list-inline-item">
                <div><a className="linkbtn" href="https://www.linkedin.com/in/rishabkhanna27/">
                <FontAwesomeIcon icon={faLinkedinIn } size = '3x'/>{' '}</a>
                </div>
              </li>
              <li className="logo list-inline-item">
                <div><a className="linkbtn" href="https://github.com/rishabkhanna27">
                <FontAwesomeIcon icon={faGithub } size = '3x' />{' '}</a>
                </div>
              </li>
              <li className="logo list-inline-item">
                <div><a className="linkbtn" href="https://www.instagram.com/rishabkhanna.27/">
                <FontAwesomeIcon icon={faInstagram } size = '3x' />{' '}</a>
                </div>
              </li>
            </ul>
				  </div>
			  </div>
		  </footer>
      <div className="foot footer-copyright text-center py-3">
        <MDBContainer fluid>
          Made With <FontAwesomeIcon className="heart" icon={faHeart }/> By <a href="https://github.com/rishabkhanna27"> Rishab Khanna</a>
        </MDBContainer>
      </div>
    </div>
        );
    }

}