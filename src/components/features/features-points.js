import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import ModalBox from '../modal';


export default class FeaturesPoints extends Component{
    constructor(props){
        super(props)

        this.state={
            open:false
        }

        this.onOpenModal= this.onOpenModal.bind(this);
    }

   
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () =>{
        this.setState({open:false});
    }
    
    render(){
        return(
            <div className="limetray-products" id={this.props.id}>
                <div className="row">
                    <div className="col-sm-12 col-lg-6 col-md-6 columns text-left">
                            <div className="product-desc">
                                <div style={{display: 'inline-block'}}>
                                    <span className="left product-img-a img-responsive">
                                        <img src={this.props.icon} />
                                    </span>
                                    <p className="text-uppercase font_family_a font_size_d color-lime left product-name-a">
                                        {this.props.title}
                                    </p>
                                </div>
                                <div>
                                    <h2 className="font_family_a font_color_b font_size_d">{this.props.children}</h2>
                                </div>
                                <div className="product-desc-btn"><a className="font_family_a font_size_a color-lime text-uppercase" onClick={this.onOpenModal} style={{cursor:'pointer'}}>Get Started</a></div>
                                <ModalBox open={this.state.open} onClose={this.onCloseModal} />
                            </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 columns text-right">
                        <img className="limetray-pro-img img-responsive" src={this.props.src} />
                    </div>

                </div>
            </div>
        );
    }
} 