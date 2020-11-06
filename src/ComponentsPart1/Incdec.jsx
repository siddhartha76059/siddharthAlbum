import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const Incdec = () => {
    const [inc, setInc] = useState(0);

    const IncOne =() => {
        setInc (inc+1); 
    };

    const DecOne = () => {

        if(inc <= 0) {
            alert(" Reach zero limit");
        } else {
            setInc(inc-1);
        }
        
    }


    return (
        <>
        <div>
        <h1>Increment and Decrement</h1>
        <div><h1>{inc}</h1></div>
        <div>

            <Button onClick={IncOne}  color="primary"> <AddIcon/> </Button>
            <Button onClick={DecOne}  color="secondary"> <DeleteIcon/> </Button>
        </div>
        </div>
        
        </>
    );
};

export default Incdec;