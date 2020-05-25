import React from 'react'
import { Link } from 'react-router-dom' 


function Buy() {
    return (
        <div className='purchase'>
            <h1>Purchasing</h1>
            <p>We offer two types of services. You can pick your own fruit or we can pick it for you and
                you can pick it up at the farm.
            </p>
            <h2>Pricing:</h2>
            <p>Blackberries</p>
            <ul>
                <li>Half gallon: $</li>
                <li>Gallon: $</li>
                <li>Peck: $</li>
            </ul>
            <p>Peaches</p>
            <ul>
                <li>Half bushel: $</li>
                <li>Gallon: $</li>
                <li>Peck: $</li>
            </ul>
            <p>Plums</p>
            <ul>
                <li>Half bushel: $</li>
                <li>Gallon: $</li>
                <li>Peck: $</li>
            </ul>
            <Link to='/payment'>Pay Here</Link>
        </div>
    )
}
export default Buy;