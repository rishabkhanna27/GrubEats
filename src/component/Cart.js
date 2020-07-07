import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Recipe from './Recipe'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import image1 from '../assests/intro.jpg'
import '../App.css'

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        <div className="collection-items" key={item.id}>
                                    <div className="item-img"> 
                                        <img className="thumb" src={item.img} alt={item.img} />
                                    </div>
                                    <div className="item-desc">
                                        <span className="title"><b>{item.title}</b></span>
                                        <p><b>Price: ₹{' '}{item.price}</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}><IconButton><AddCircleOutlineIcon/></IconButton></i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}><IconButton><RemoveCircleOutlineIcon/></IconButton></i></Link>
                                        </div>
                                        <Button variant="danger" onClick={()=>{this.handleRemove(item.id)}}>Remove</Button><br></br>
                                    </div> 
                                </div>  
                    )
                })
            ):
             (
                 <div className="empty">
                <p className="empty">Your Cart Is Empty</p>
                </div>
             )
       return(
            <div className="container5">
               <div className="container1">
                 <img className="intro" src={image1} alt="intro"/>
                 <div className="heading1"><b>Grub<span>Eats</span></b></div>
                 </div> 
                <div className="order"><b><u>Your Order</u></b></div>

                <div className="cart">
                    <div className="box">
                        {addedItems}
                    </div>
                </div> 
                <Recipe />  
                <div><br></br></div>        
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)