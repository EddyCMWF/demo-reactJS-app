import { Link } from "react-router-dom"

export const SalesHeader = () =>
{
    return (
        <>
            <h2>Sales History</h2>
            <p><Link to='/'>Close sales history</Link></p>
        </>
    )
}