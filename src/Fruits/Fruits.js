import React, { Component } from 'react'
import fruits from '../STORE'


class Fruits extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peach: fruits.Peach,
            plum: fruits.Plum,
            bb: fruits.Blackberry
        }
    }
    
    renderPeach = () => {
        let peach = this.state.peach
        
    }

    render() {
        let {peach, plum, bb} = this.state
    return (
        <div className='contact'>
            <h1>Fruits</h1>
            <h2>Peaches</h2>
            {peach.map(item => {
            let variety = item.variety;
            let dsc = item.description;
            let img = item.image;
            return (
            <ul>
                <li>{img}</li>
                <li>{variety}</li>
                <li>{dsc}</li>
            </ul>
            )
            })}

            <h2>Plums</h2>
            {plum.map(item => {
             let variety = item.variety;
             let dsc = item.description;
             let img = item.image;
             return (
             <ul>
                 <li>{img}</li>
                 <li>{variety}</li>
                 <li>{dsc}</li>
             </ul>
             )   
            })}

            <h2>Blackberry</h2>
            {bb.map(item => {
             let variety = item.variety;
             let dsc = item.description;
             let img = item.image;
             return (
             <ul>
                 <li>{img}</li>
                 <li>{variety}</li>
                 <li>{dsc}</li>
             </ul>
             )   
            })}
        </div>
    )
}
}
export default Fruits;