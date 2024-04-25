import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { decreaseQuantity, removeProduct, updateQuantity } from '../Redux/addSlice'
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";


const Addtocart = ({ displayCart, updateQuantity, decreaseQuantity, removeProduct }) => {
    const handleIncrease = (name, amount) => {
        updateQuantity(name, amount);
    };

    const handleDecrease = (name, amount) => {
        decreaseQuantity(name, amount);
    };

    const handleRemove = (name) => {
        removeProduct(name);
    };

    const a = displayCart.length
    console.log(a)

    const navigate3 = useNavigate()
    const handleNavigate3 = () => {
        navigate3(`/Add-to-cart`)
    }

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/Shoes and accessories")
    }
    const navigate1 = useNavigate()
    const handleNavigate_1 = () => {
        navigate1("/Buy")
    }

    return (
        <div>
            <h1>hi</h1>
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
            <div>
                {displayCart.map((item) => (
                    <div key={item.name}>
                        <img src={item.image} alt='#'></img>
                        <h2 >{item.name}</h2>
                        <h3><span style={{ textDecoration: "line-through" }}>{item.price}</span>{item.discount}<span></span> </h3>
                        <h3>{item.quantity}</h3>
                        <button onClick={() => handleIncrease(item.name, item.amount)}>Increase</button>
                        <button onClick={() => handleDecrease(item.name, item.amount)}>Decrease</button>
                        <button onClick={() => handleRemove(item.name)}>Remove</button>
                    </div>
                ))}
            </div>
            <button onClick={handleNavigate_1}>Proceed To Buy</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        displayCart: state.addtocart.displayCart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateQuantity: (name, amount) => dispatch(updateQuantity({ name, amount })),
        decreaseQuantity: (name, amount) => dispatch(decreaseQuantity({ name, amount })),
        removeProduct: (name) => dispatch(removeProduct({ name })),
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Addtocart)