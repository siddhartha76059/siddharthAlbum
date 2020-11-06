import React, {useState} from "react";


const form = () => {
    const {currInput, updatedState}= useState({
        fname: "",
    });

    

    const changeInput=(any) => {
        const value = any.target.value;
        console.log(any.target.value);
        updatedState(any.target.value)
    }


    return (
        <>
        <h1>Registration Form</h1>
        <form>
            
            <input type="text" 
                   placeholder="Enter your fname" 
                   name="fname"
                   onChange={changeInput}
                   value={value}
                   />
        </form>
        </>
    );
};

export default form;