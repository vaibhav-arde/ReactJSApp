import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                {/* <div className="card" style={{ width: '18rem' }}> */}
                <div className="card">
                    <img src={props.srcImage} className="card-img-top" alt={props.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.cardPara}</p>
                        <NavLink to="/contact" className="btn btn-primary">Contact Us</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;