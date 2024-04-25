import { useContext, useEffect, useState } from "react"
import { context } from "../Reducer/Reducer"
import { useNavigate } from "react-router-dom"
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import "./Style.css"


const Grocery = () => {
    const { state, dispatch } = useContext(context)
    const [grocery, setGrocery] = useState([])
    // console.log(shoes)
    useEffect(() => {
        const groc = state.List.filter((a) => {
            return a.product === "mobile"
        })
        setGrocery(groc)
        // console.log(Shoes)
    }, [])
    const navigate = useNavigate()
    const handleNavigate = (grocery) => {
        navigate(`/groc/?id=${grocery.name}`)
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

            <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "70px", position: "absolute", marginTop: "150px" }}>
                {grocery.map((a) => (
                    <div style={{ width: "23%", margin: "10px" }}>
                        <img style={{ height: "300px", width: "300px" }} src={a.image} onClick={() => handleNavigate(a)} alt='img'></img>
                        <h3 className='mensbrand' style={{ marginLeft: "20px" }}>{a.brand}</h3>
                        <h3 className='mensname' style={{ marginLeft: "20px" }}>{a.name}</h3>
                        <h3 className='mensprice' style={{ marginLeft: "20px" }}><span style={{ textDecoration: "line-through" }}>{a.price}</span>{a.discount}<span></span> </h3>
                        <h3 style={{ marginLeft: "20px" }}>{a.quantity}</h3>

                    </div>


                ))}
            </div>
        </div>
    )
}
export default Grocery