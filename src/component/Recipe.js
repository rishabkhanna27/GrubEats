import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Recipe extends Component{
    render(){
        return(
            <div className="container4">
                <div className="collection">
                        <p className="item"><b>Total: {this.props.total} ₹</b></p>
                    </div>
                    <div className="checkout">
                    <Link to="/Checkout"><Button variant="info" className="waves-effect waves-light btn">Checkout</Button></Link>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
