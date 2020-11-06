import React from 'react';
import "C:/My project/NodeProject/node-project/node_modules/bootstrap/dist/css/bootstrap.min.css";

const ExBtstrp = () => {
    return <>
        <h1 className="text-center text-danger text-capitalize my-5"> THIS IS AWASOME</h1>
        <div className="container">
            <div className="row">
                <div className="col-sm my-2">
                    <div className="card" >
                        <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height="200px" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="col-sm my-2">
                    <div className="card" >
                        <img src="https://picsum.photos/201/300" className="card-img-top" alt="..." height="200px"  />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className="col-sm my-2">
                    <div className="card" >
                        <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px" width=""/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>;
}


export default ExBtstrp;