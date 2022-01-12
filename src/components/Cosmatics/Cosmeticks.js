import React, { useEffect, useState } from 'react';
import { add, multiuply } from '../../utilities/storages';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmeticks = () => {
 const [cosmetics,setCosmetics]=useState([])
useEffect(() => {
   fetch('./cosmatics.json')
   .then(res => res.json())
   .then(data =>setCosmetics(data))
}, [])
    return (
        <div>
            <h2>Shop my Cosmetiks</h2>
            {
                cosmetics.map(cosmetic =><Cosmetic
                     cosmetic={cosmetic}
                     key={cosmetic._id}
                     ></Cosmetic> )
            }
        </div>
    );
};

export default Cosmeticks;