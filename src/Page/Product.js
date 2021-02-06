import React, { Component } from 'react';
import Button from '../Element/Button';
import Navbar from '../Part/Navbar';

import { getProduct, addCart } from '../Store/Action/Product';

import {connect} from 'react-redux';

class Product extends Component {

    componentDidMount(){
        this.props.getProduct();
    }
    
    render() {
        const {data} = this.props;
        console.log(data)

            return (
                <>
                    <Navbar/>
                    <section className="container">
                        <div className="row">
                            {
                                data.map((post) =>{
                                    console.log(post)
                                    return (
                                        <div className="col-3">
                                            <div className="card">
                                                <img src={post.image} className="card-img-top" alt=".."/>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <p className="card-title">
                                                                {post.name_product}
                                                            </p>
                                                            <p className="text-red" style={{fontSize: '14px'}}>
                                                                {post.price}
                                                            </p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p className="card-title ml-3">
                                                                {post.name}
                                                            </p>
                                                            <p className="text-gray-600 ml-4" style={{fontSize: '13px'}}>
                                                                Stock: {post.stock}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <Button onClick={()=> this.props.addCart(post)} className="btn" type="button" style={{width: '100%', backgroundColor: 'red', color: 'white'}}>
                                                        Buy
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                </>
            )
    }
}

const mapStateToProps = state =>{
    return {
         data: state.data.data
    };
}
function mapDispatchToProps(dispatch){
    return{
        getProduct:()=>dispatch(getProduct()),
        addCart:item=>dispatch(addCart(item)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)