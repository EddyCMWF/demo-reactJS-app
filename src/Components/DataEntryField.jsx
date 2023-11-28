const DataEntryField = (props) => {
    return (
        <div>
            {props.label.concat(': ')}
            <input
                type="number" id="lname" name="lname"
                value={props.value}
                onChange={(event)=>{props.handleValueChanged(+event.target.value)}}
            input/>
        </div>
    );
}
 
export default DataEntryField;