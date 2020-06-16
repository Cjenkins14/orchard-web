import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import './Purchase.css'

class Buy extends Component {
    render() {
    return (
        <div className='purchase'>
            <h1>Purchasing</h1>
            <p>We allow our customers to pick their own fruit at our farm, our prices are listed below:</p>

            <h2>Blackberries</h2>
            <ul>
                <li>Half gallon: $</li>
                <li>Gallon: $</li>
                <li>Peck: $</li>
            </ul>
            <select className='buyBB' >
                <option>1/2 Gallon</option>
                <option>Gallon</option>
                <option>Peck</option>
            </select>
            <button>
                <Link to='/payment'>Buy Now</Link>
            </button>

            <h2>Peaches</h2>
            <ul>
                <li>Half bushel: $</li>
                <li>Gallon: $</li>
                <li>Peck: $</li>
            </ul>
            <select className='buyP'>
                <option>1/2 Bushel</option>
                <option>Gallon</option>
                <option>Peck</option>
            </select>
            <button>
                <Link to='/payment'>Buy Now</Link>
            </button>
            
            <p>Plums</p>
            <ul>
                <li>Half bushel: $</li>
                <li>Gallon: $</li>
                <li>Peck: $</li>
            </ul>
            <select className='buyBB'>
                <option>1/2 Gallon</option>
                <option>Gallon</option>
                <option>Peck</option>
            </select>
            <button>
                <Link to='/payment'>Buy Now</Link>
            </button>
        </div>
    )}
}
export default Buy;