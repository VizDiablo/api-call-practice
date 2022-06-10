import React, { useState, useEffect } from 'react';
import UniversityTile from './UniversityTile';
import NavigationButton from './NavigationButton';
import '../ComponentsCSS/UniversityDetailedView.css';

function UniversityDetailedView(props) {
    const universityName = String(props.universityName);
    console.log(universityName);
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(4);
    const url = "http://universities.hipolabs.com/search?country=United+States";

    //ideally we would filter out data in the request but I can't figure out how to with this api
    const dataToRender = data.filter((data) => data.name === universityName.replace('%20', ' '));


    //empty array passed in for second parameter makes it so useEffect is only called once
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .then(console.log(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div >
            <div >
                {dataToRender.map((university, index) => (
                    <div >< UniversityTile university={university} key={index} id={index} /> </div>
                ))}
            </div>
        </div>
    );
}

export default UniversityDetailedView;