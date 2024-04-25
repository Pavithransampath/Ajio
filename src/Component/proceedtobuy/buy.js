import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { CiTextAlignCenter } from 'react-icons/ci';


const Buy = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/final')
    }
    return (
        <div>
            <header >
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
                    <button className="sign"><IoPerson /></button>
                    <button className="cart"><FaShoppingCart /></button>
                </div>
            </header>
            <div style={{ position: "absolute", marginTop: "150px" }}>
                
                <p style={{marginLeft:"700px"}}>Total Amount : { }</p>
                <button style={{ marginLeft: "650px" }}>Card Payment</button> <button>UPI</button> <button>Cash On Delivery</button><br></br>
                <button style={{ marginLeft: "750px" }} onClick={handleNavigate}>PAY</button>
            </div>
        </div>
    )
}

export default Buy