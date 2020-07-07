import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import image1 from '../assests/intro.jpg'
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Homeit extends Component{

    notify = () => toast.info("Item Successfully Added To Cart", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    });

    handleClick = (id)=>{
        this.props.addToCart(id); 
        console.log(id)
    };

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                
                <div className="card2" key={item.id}>

                         <div className="card-image">
                            <img className="thumb" src={item.img} alt={item.title}/><hr></hr>
                            <span className="card-title"><b>{item.title}</b></span>
                            
                        </div>
                        <div className="card-content">
                         <p><b>Price: ₹{' '}{item.price}</b></p><hr></hr>
                        </div>
                        <div> 
                        <IconButton className="addbutton" onClick={()=>{this.handleClick(item.id); this.notify()}}>Add:{' '}<AddCircleOutlineIcon/></IconButton>
                        </div>
                        <ToastContainer />
                 </div>
            )
        })
        let itemtable = this.props.items.map(item=>{
            return(
                
                <div className="card1" key={item.id}>
                            <b className="tablelist">{item.title}</b>
                            <p className="butto"><IconButton className="addtable" onClick={()=>{this.handleClick(item.id); this.notify()}}>Add:{' '}<AddCircleOutlineIcon/></IconButton></p>
                 </div>
            )
        })

        return(
            <div className="homeit">
                <div className="container1">
                 <img className="intro" src={image1} alt="intro"/>
                 <div className="heading1"><b>Grub<span>Eats</span></b></div>
                 </div>    
                 <h3 className="center"><b>Menu</b></h3>

                 <div className="containi"> 
                 <div className="table"><br></br>
                 {itemtable}
                </div>
            <div className="container">
                <br></br><br></br>
                <div className="box">
                    {itemList}
                </div>
            </div>
            </div>
            <div className='alert fixed-bottom'>
            <div className='container6'>
                <Link to="/Cart"><Button variant="info" className="waves-effect waves-light btn btn-lg">Go To The Cart</Button></Link>
            </div>
            </div> 
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Homeit)



