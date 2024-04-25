import React from "react";
import './Home.css'
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

import { MdCurrencyExchange } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TbCircleCheckFilled } from "react-icons/tb";
import { FaCcMastercard } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



export const Home = () => {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/sign")
    }

    return (
        <div>
            <header>
                <img src="https://assets.ajio.com/static/img/Ajio-Logo.svg" alt="#" className="logo"></img>
                <div className="uper">
                    <div className="top">
                        <p className="men">MEN</p>
                        <p className="women">WOMEN</p>
                        <p className="kids">KIDS</p>
                        <p className="beauty">BEAUTY</p>
                        <p className="home">HOME AND KITCHEN</p>
                    </div>
                    <input type="text" className="search" placeholder="Search AJIO"></input>
                    <button className="sign" onClick={handleNavigate}><IoPerson /></button>
                    <button className="cart"><FaShoppingCart /></button>
                </div>


            </header>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-21032024-Z1-FreeCODNoProcessingFee-onlytoday.gif" alt="#" className="banner1"></img>
            </div>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/26032024-D-DiscoverOnlineStores.jpg" alt="#" className="banner2"></img>
            </div>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/1440X128%20Prime%20(1)111.png" alt="#" className="banner3"></img>
            </div>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip11.jpg" alt="#" className="banner4"></img>
            </div>



            <div className="low">
                <div className="ic1">
                    <p className="emo"><MdCurrencyExchange /></p>
                    <h4>EASY EXCHANGE</h4>
                </div>
                <div className="ic2">
                    <p className="emo"><FaHandHoldingHeart /></p>
                    <h4>100% HAND PICKED</h4>
                </div>
                <div className="ic3">
                    <p className="emo"><TbCircleCheckFilled /></p>
                    <h4>ASSURED QUALITY</h4>
                </div>
            </div>

            <footer className="footer">

                <footer className="foot">
                    <div className="ajio">
                        <strong>Ajio</strong>
                        <p className="p1">Who We Are</p>
                        <p>Join Our Team</p>
                        <p>Terms & Conditions</p>
                        <p>We Respect Your Privacy</p>
                        <p>Fees & Payments</p>
                        <p>Returns & Refunds Policy</p>
                        <p>Promotions Terms & Conditions</p>

                    </div>
                    <div className="help">
                        <strong>Help</strong>
                        <p className="p2">Track Your Order</p>
                        <p>Frequently Asked Questions</p>
                        <p>Returns</p>
                        <p>Cancellations</p>
                        <p>Payment</p>
                        <p>Customer Care</p>
                        <p>How Do I Redeem My Coupon</p>
                    </div>

                    <div className="shop">
                        <strong>Shop by</strong>
                        <p className="p3">Men</p>
                        <p>Women</p>
                        <p>Kids</p>
                        <p>Indie</p>
                        <p>Stores</p>
                        <p>New Arrivals</p>
                        <p>Brand Directory</p>
                        <p>Home</p>
                        <p>Collections</p>
                    </div>

                    <div className="foll">
                        <strong>Follow us</strong>
                        <p className="p4">Facebook</p>
                        <p>Instagram-Ajiolife</p>
                        <p>Instagram-Ajio LUXE</p>
                        <p>Twitter</p>
                        <p>Pnterest</p>
                    </div>


                </footer>
                <hr></hr>



                <div className="foot2">
                    <strong className="pay">Payment methods</strong>
                    <div className="flex2">
                        <div className="flex3">
                            <p>Net</p>
                            <p className="bank">Banking</p>
                        </div>
                        <div className="flex31">
                            <p>Verified by</p>
                            <p className="visa">VISA</p>
                        </div>
                        <div className="flex32">
                            <p><FaCcMastercard /></p>
                        </div>
                        <div className="flex4">
                            <div className="icon11">
                                <p><FaRupeeSign /></p>
                            </div>
                            <div className="cash1">
                                <p>CASH ON</p>
                                <p className="deli">DELIVERY</p>
                            </div>

                        </div>
                        <div className="flex5">
                            <p className="jio">Jio</p>
                            <p className="money">Money</p>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}