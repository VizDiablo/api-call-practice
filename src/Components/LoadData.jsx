import React, { useState, useEffect } from 'react';
import UniversityTile from './UniversityTile';
import NavigationButton from './NavigationButton';
import * as FaIcons from 'react-icons/fa';
import '../ComponentsCSS/LoadData.css'

function LoadData() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(4);
    const url = "http://universities.hipolabs.com/search?country=United+States";
    const dataToRender = data.slice(index - 4, index);

    //empty array passed in for second parameter makes it so useEffect is only called once
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .then(console.log(data))
            .catch((error) => console.log(error));
    }, []);

    function RenderNextUniversities() {
        setIndex(index + 4);
    }

    //< UniversityTile university={university} key={index} />
    //<FaIcons.FaArrowAltCircleRight size={50} onClick={RenderNextUniversities} className='next-button' />

    return (
        <div className='university-area-div'>
            <div className='university-block-div'>
                {dataToRender.map((university, index) => (
                    <div>< UniversityTile university={university} key={index} /> </div>
                ))}
            </div>
            <div className='nav-area'>
                <NavigationButton text='Next' onButtonClick={() => setIndex(index + 4)} />
                <NavigationButton text='Previous' onButtonClick={() => setIndex(index - 4)} />

            </div>

        </div>
    );
}

export default LoadData;