import { findByLabelText } from '@testing-library/react';
import React, { useState } from 'react';
import '../ComponentsCSS/UniversityTile.css'

function UniversityTile(props) {
    //const [university, setUniversity] = useState("");
    const universityName = props.university.name;
    //const universityState = props.university.state - province;
    const university = props.university;
    const universityImageURL = "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg";
    console.log(props);

    return <div className='university-div'>
        <h2 className='university-name'>{universityName} </h2>
        <div className='university-info'>
            <div>
                <img className='university-image' src={universityImageURL} width='10px'></img>
            </div>
            <div>
                <h3 className='university-info-text'>State: {university["state-province"] != null ? university["state-province"] : "N/A"}</h3>
                <h3 className='university-info-text'>Country: {university.country != null ? university.country : "N/A"}</h3>
                <a href={university["web_pages"][0]} className='university-info-text'>{university.name}</a>
            </div>

        </div>
    </div>
}

export default UniversityTile;