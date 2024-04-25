import React from 'react'
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Sign.css'


export const Sign = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const usersData = [
        { username: 'Pavithran', password: '1234567' },
        { username: 'Ajay', password: '4567890' },
        { username: 'Jacky', password: '0987654' }
    ];

    const onSubmit = (data) => {

        const user = usersData.find(
            (user) => user.username === data.username && user.password === data.password
        );

        if (user) {
            navigate("/Login")
        } else {
            alert("Invalid Credentials")
        }
    };
    const navigate = useNavigate()
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

            <div className='sii'>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Username : </label>
                        <input {...register('username', { required: 'Username is required' })} />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>
                    <br></br>
                    <div>
                        <label>Password : </label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long',
                                },
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <br></br>
                    <button type="submit">Sign In</button>
                </form>
            </div>





        </div>
    )
}



