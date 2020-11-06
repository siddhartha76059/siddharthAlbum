import React from "react";

const Card = (props) => {


    return (
        <>
        <div className="col-md-2 col-10 mx-auto">
            <div className="container">
                <div className="card" style={{ width: "13rem" }} className="box">
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.artist}</p>
                        <a href={props.url} target="_blank" className="btn btn-primary">Open</a>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Card;