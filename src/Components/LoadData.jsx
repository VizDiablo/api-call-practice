import React, { useState, useEffect } from 'react';
import UniversityTile from './UniversityTile';

function LoadData() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const url = "http://universities.hipolabs.com/search?country=United+States";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .then(console.log(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className='university-area-div'>
            {data.map((university, index) => (
                < UniversityTile university={university} key={index} />
            ))}
        </div>
    );
}

export default LoadData;