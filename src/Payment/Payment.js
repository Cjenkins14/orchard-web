import React, { Component } from 'react';
import PaymentForm from './Payment-form';

class Payment extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className='pay-form'>
                <PaymentForm />
            </div>
        )
    }
}

export default Payment;