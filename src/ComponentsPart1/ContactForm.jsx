import React, { useState } from "react";


const ContactForm = () => {
   const [user, setUser]=useState({
       fname:"",
       lname:"",
       gmail:"",
       mob_no:"",
   });

   const changeInput = (event) => {
       const {value, name} = event.target;

        console.log(event.target.value);
        console.log(event.target.name);
       
        setUser((act)=>{

            return {
                ...act,
                [name]: value, 
            };
            // if(name === "fname") {
            //     return {
            //     fname: value,
            //     lname: act.lname,
            //     gmail: act.gmail,
            //     mob_no: act.mob_no,
            //     }; 
            // } else if(name === "lname") {
            //     return {
            //     fname: act.fname,
            //     lname: value,
            //     gmail: act.gmail,
            //     mob_no: act.mob_no,
            //     }; 
            // } else if(name === "gmail") {
            //     return {
            //     fname: act.fname,
            //     lname: act.lname,
            //     gmail: value,
            //     mob_no: act.mob_no,
            //     }; 
            // } else if(name === "mob_no") {
            //     return {
            //     fname: act.fname,
            //     lname: act.lname,
            //     gmail: act.gmail,
            //     mob_no: value,
            //     }; 
            // }  
        })

   }

    const submitForm = (event) => {
        event.preventDefault();
        alert(
        "form submitted with above data"
        );
        setUser(user);

    }


    return (
        <>
            <h1>Registration Form </h1>
            <form>

                <input type="text"
                    placeholder="Enter your fname"
                    name="fname"
                    onChange={changeInput}
                    value={user.fname}
                /><br />
                <input type="text"
                    placeholder="Enter your lname"
                    name="lname"
                    onChange={changeInput}
                    value={user.lname}
                /><br />
                <input type="email"
                    placeholder="Enter your gmail"
                    name="gmail"
                    onChange={changeInput}
                    value={user.gmail}
                /><br />
                <input type="number"
                    placeholder="Enter your Mobile_No"
                    name="mob_no"
                    onChange={changeInput}
                    value={user.mob_no}
                /><br />
                <button onClick={submitForm}>Submit</button>
            </form>

            <p>{user.fname}<br /> {user.lname} <br /> {user.gmail} <br /> {user.mob_no}<br /></p>
        </>
    );
};

export default ContactForm;