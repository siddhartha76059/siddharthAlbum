import React, { useState } from "react";
import InputBox from "./InputBox";


const SignUp = () => {
    const [user, setUser] = useState({
        fullname: "",
        password: "",
        re_password: "",
        gmail: "",
        mob_no: "",
        profile_img: "",
    });

    const changeInput = (event) => {
        const { value, name } = event.target;

        console.log(event.target.value);
        console.log(event.target.name);

        setUser((act) => {

            return {
                ...act,
                [name]: value,
            };
        })

    }

    const submitForm = (event) => {

        setUser(user);

    }


    return (
        <>
            <div className="text-center">
                <div className="my-5">
                    <h1 className="text-center"> Create Account </h1>
                    <p className="text-center">Welcome to the worls of music</p> <hr/>   
                </div>

                <div className="container-fluid ">
                    <div className="row justify-content-center">
                        <div className="col-4 col-sm-6 col-md-3">
                            <form>
                                <InputBox type="text" className="form-control" placeholder="Enter Full  Name" name="fullname" onChange={changeInput} value={user.fullname} />
                                <InputBox type="password" className="form-control" placeholder="Enter password" name="password" onChange={changeInput} value={user.password} />
                                <InputBox type="password" className="form-control" placeholder="Re-Enter password" name="password" onChange={changeInput} value={user.re_password} />
                                <InputBox type="gmail" className="form-control" placeholder="Enter gmail" name="gmail" onChange={changeInput} value={user.gmail} />
                                <InputBox type="number" className="form-control" placeholder="Enter Mobile No." name="mob_no" onChange={changeInput} value={user.mob_no} />
                                <InputBox type="file" className="form-control" placeholder="Select Image" name="profile_img" onChange={changeInput} value={user.profile_img} />

                                <button onClick={submitForm} className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;