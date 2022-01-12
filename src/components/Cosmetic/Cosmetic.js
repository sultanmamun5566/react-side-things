import React from 'react';
import { addToDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const {name,balance,gender,_id}=props.cosmetic;
    const handlePurchase=id =>{
        console.log(id)
        addToDb(id);
    }
    
    return (
        <div>
            <h2>name: {name}</h2>
            <p>{_id}</p>
            <p>price: {balance}</p>
            <p><small>gender:{gender}</small></p>
            <button onClick={()=> handlePurchase(_id)}>purchase</button>
        </div>
    );
};

export default Cosmetic;