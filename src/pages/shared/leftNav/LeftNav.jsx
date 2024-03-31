// import React from 'react';

import { useEffect, useState } from "react";

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/categories")
        .then(res =>res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    },[])

    return (
        <div>
            <h2>Left nav</h2>
        </div>
    );
};

export default LeftNav;