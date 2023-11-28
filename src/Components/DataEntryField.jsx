// import React from "react";



const DataEntryField = (props) => {
    return (
        <div>
            {props.label.concat(': ')}
            <input type="number" id="lname" name="lname" input/>
        </div>
    );
}
 
export default DataEntryField;

