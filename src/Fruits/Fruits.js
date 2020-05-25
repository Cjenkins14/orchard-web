import React, { Component } from 'react'
import fruits from '../STORE'


class Fruits extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fruit: fruits
        }
    }

    
   

    render() {
        console.log(this.state.fruit.Peach)
        let state = this.state.fruit;
    return (
        <div className='contact'>
            <h1>Fruits</h1>
            <ul>
            {state.Peach.map(item => {
                let variety = item.variety;
                return <li>{variety}</li>
            })}
            </ul>
            
        </div>
    )
}
}
export default Fruits;