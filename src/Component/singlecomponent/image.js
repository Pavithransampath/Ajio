import React, { useContext, useEffect, useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './image.css'
import { context } from '../Reducer/Reducer';
import { FaShippingFast } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GrReturn } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux/addSlice';
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";


const Image = () => {


    const Dispatch = useDispatch()

    function handleAdd() {
        if (!select.length) return
        const productsWithQuantity = select.map((product) => ({
            ...product,
            quantity: 1
        }));

        Dispatch(addtocart(productsWithQuantity));
        setSelect([]);
    };


    const [select, setSelect] = useState([])

    const { state, dispatch } = useContext(context)

    //Search Params
    const search = useSearchParams()[0]




    useEffect(() => {
        const common = state.List.filter((a) => {
            return a.name === search.get("id")
        })
        console.log(common)
        setSelect(common)


    }, [search, state.List]);

    const navigate3 = useNavigate()
    const handleNavigate3 = () => {
        navigate3("/Add-to-cart")
    }

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/Shoes and accessories")
    }





    //Params
    // const params =useParams()
    // console.log(params)

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
            

            <div className='container' style={{ position: "absolute", marginTop: "150px" }}>
                <div className='row'>
                    <div className='col_8'>
                        <div >
                            {select.map((shoe) => (
                                <div>
                                    <h2 style={{ marginLeft: "330px" }}>{shoe.name}</h2><br></br>
                                    <p>⭐⭐⭐⭐⭐ 5 - 4 Reviews - 54 Buyers</p><br></br><br></br>
                                    <img style={{ marginLeft: "330px" ,height:"300px",width:"280px" }} src={shoe.image} ></img><br></br><br></br>
                                    <h3 style={{ marginLeft: "300px" }}><span style={{ textDecoration: "line-through" }}>{shoe.price}</span>{shoe.discount}<span></span> </h3>
                                    <h3 style={{ marginLeft: "300px" }}>{shoe.quantity}</h3>

                                </div>
                            ))}

                        </div>
                        <div className='link'>
                            <Link>Share</Link>
                        </div>

                    </div>
                    <div className='col_4'>
                        <br></br>

                        <button className='contact'>Contact Supplier</button> <button className='chat'>Chat Now</button><br></br><br></br>
                        <Link className='add' to={'/Add-to-Cart'} onClick={handleAdd}>Add to Cart</Link><br></br><br></br>
                        <p>Still deciding? Get samples first! Order sample</p><br></br>
                        <hr></hr>
                        <div>
                            <h3>Membership benefits</h3>
                            <p>₹700 coupons <Link>Claim Now</Link></p>
                        </div>
                        <hr></hr>
                        <div>
                            <h3>Purchase Details</h3>
                            <p>Protection with  assured </p>
                        </div>
                        <div>
                            <h3><FaShippingFast /> Shipping</h3>
                            <p>Contact supplier to negotiate shipping details</p>
                            <p>Enjoy On-time Dispatch Guarantee</p>
                        </div>
                        <div>
                            <h3><IoShieldCheckmarkOutline /> Payments</h3>
                            <p>Enjoy encrypted and secure payments View details</p>
                        </div>
                        <div>
                            <h3><GrReturn /> Returns & Refunds</h3>
                            <p>Eligible for refunds within 30 days of receiving products.<Link>View details</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Image;

