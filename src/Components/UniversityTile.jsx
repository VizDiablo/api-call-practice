import { findByLabelText } from '@testing-library/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ComponentsCSS/UniversityTile.css';
import NavigationButton from './NavigationButton';

function UniversityTile(props) {
    const universityName = props.university.name;
    const university = props.university;
    const universityImageURL = "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg";
    //console.log(props);

    let navigate = useNavigate();

    return (
        <div className='university-div'>
            <h2 className='university-name'>{universityName} </h2>
            <div className='university-info'>
                <div>
                    <img className='university-image' src={universityImageURL} width='10px'></img>
                </div>
                <div>
                    <h3 className='university-info-text'>State: {university["state-province"] != null ? university["state-province"] : "N/A"}</h3>
                    <h3 className='university-info-text'>Country: {university.country != null ? university.country : "N/A"}</h3>
                    <a href={university["web_pages"][0]} className='university-info-text'>{university.name}</a>
                    <NavigationButton text='Learn More' onButtonClick={() => { navigate("/learn-more-page/" + universityName) }} />
                </div>
            </div>
        </div>
    )
}

export default UniversityTile;