import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mob, setMob] = useState();
    const [image, setImage] = useState();

    const ProfileData = async () => {

        try {
            const res = await axios.get("https://randomuser.me/api/");
            setMob(res.data.results[0].cell);
            setEmail(res.data.results[0].email);
            setImage(res.data.results[0].picture.large);
            setName(
                `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
            );
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        ProfileData();
    }, [])



    return (

        <>
            <div className="my-5">
                <h1 className="text-center"> My Profile </h1>
                <hr/>
            </div>

            

            <div className="col-md-4 col-6 mx-auto my-4">
                <div className="container">
                    <div className="card" style={{ width: "18rem" }} className="box">


                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-6  mx-auto">
                                    {
                                        image?
                                         <img src={image} />
                                         :
                                         <div class="d-flex justify-content-center">
                                        <div class="spinner-border" role="status">
                                          <span class="sr-only">Loading...</span>
                                        </div>
                                      </div>
                                    }
                                    
                                </div>
                                <div className="col-6 mx-auto ">
                                    <h1>{name}</h1>
                                    <p className="title">{email}</p>
                                    <p>{mob}</p>
                                </div>
                                {/* <button>Contact</button> */}
                            </div>
                        </div>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Profile;