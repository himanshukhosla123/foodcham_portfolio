import React,  { Component }  from 'react';

import {Link} from 'react-router-dom';

import img1 from '../../assets/img/features_img/foodcham_waiter.png';
import img2 from '../../assets/img/features_img/foodcham_dollar.png';
import img3 from '../../assets/img/features_img/foodcham_telephone.png';
import img4 from '../../assets/img/features_img/foodcham_update.png';

export default class Home_features extends Component{
    render(){
        return(
            <section id="site-content">
                <div className="home-cfa">
                    <div className="container home-features">
                        <div className="row">
                            <div className="col-sm-3 cfa-col">
                                <span><img className="img-responsive" src={img1}/></span>
                                <span className="cfa-text">Within minutes you can start placing more orders.</span>
                                <a className="cfa-link" href="download.html">Download Now <i className="fa fa-angle-right"></i></a>
                            </div>
                            <div className="col-sm-3 cfa-col">
                                <span><img className="img-responsive" src={img2}/></span>
                                <span className="cfa-text">Want to see how it feels to use FoodCham?</span>
                                <a className="cfa-link" href="demo.html">View Demo <i className="fa fa-angle-right"></i></a>
                            </div>
                            <div className="col-sm-3 cfa-col">
                                <span><img className="img-responsive" src={img3}/></span>
                                <span className="cfa-text">Become a FoodCham expert yourself and impress.</span>
                                <a className="cfa-link" href="#">Read Documentation <i className="fa fa-angle-right"></i></a>
                            </div>
                            <div className="col-sm-3 cfa-col">
                                <span><img className="img-responsive" src={img4}/></span>
                                <span className="cfa-text">Get Support & Discuss Things about FoodCham.</span>
                                <a className="cfa-link" href="#">View Forums <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>    
                    </div>
                </div>

                <div className="container">
                    <div className="cta cta-default border-all margin-top-sm">
                        <div className="row">
                            <div className="col-sm-9 cta-text margin-top-xs">
                                <h4>We’re serving up some pretty tasty features</h4>
                            </div>
                            <div className="col-sm-3 cta-button border-sm-left text-center">
                                <Link className="btn btn-orange" to="/features"><span>See more features</span></Link>
                            </div>
                        </div>
                    </div>
                </div>        
            </section>
        );
    }
}

