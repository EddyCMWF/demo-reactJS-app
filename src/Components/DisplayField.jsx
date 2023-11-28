export const DisplayField = (props) => {
    return (
        <div className={props.cstyle}>
            {props.label} {props.value}
        </div>
    )
}