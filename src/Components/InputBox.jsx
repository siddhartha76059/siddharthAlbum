import React from "react";

const InputBox = (props) => {
    return (
        <>
            <div className="form-group">
                
                <input type={props.type}
                    class="form-control"
                    className={props.class}
                    placeholder={props.placeholder}
                    name={props.name}
                    required
                     />
            </div>
        </>
    );
}

export default InputBox;