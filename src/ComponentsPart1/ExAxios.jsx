import React, { useEffect, useState } from "react";
import axios from "axios";


const ExAxios = () => {

    const [num, setNum] = useState();
    const [title, setTitle] = useState();


    useEffect(() => {
        //alert(`${num} Is selected...`);

        async function getEmpData() {
            const res = await axios.get(` https://jsonplaceholder.typicode.com/todos/${num}`);
            console.log(res);
            setTitle(res.data.title);
        }
        
       // https://jsonplaceholder.typicode.com/todos/${num}
        // http://dummy.restapiexample.com/api/v1/employee/${num}
        getEmpData();
    });

    return (
        <>
        
    <h1>(Axios Data) Title is </h1>
     <h3>"- {title} -"</h3> 

        <h1> Enter Id: {num} </h1>
        
        <select value={num} onChange={(event)=> {
            setNum(event.target.value)
        }}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>

        </>
    );
}

export default ExAxios;