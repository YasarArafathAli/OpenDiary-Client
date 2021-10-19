import React from 'react';
import { Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import image from '../4565326.jpg';
import '../App.css'
function Landing() {
    return (
        <div>
            <div className="banner">
                <Image src ={image} fluid/>
                <div  className='banner-info'>
                    <h1>
                        <span className='top'>TIME TO BE</span>
                        <br />
                        <span className='bottom theme'>SOCIAL</span>
                    </h1>
                    <div className="btn-group">
                    <Link className='btn' to="/login">Login</Link>
                    <Link className='btn' to="/register">Register</Link>

                    </div>
                </div>
            {/* <img src={image} width='600' alt="" srcset="" /> */}
            </div>
        </div>  
    )
}

export default Landing
