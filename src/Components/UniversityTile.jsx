import { findByLabelText } from '@testing-library/react';
import React, { useState } from 'react';

function UniversityTile(props) {
    //const [university, setUniversity] = useState("");
    const universityName = props.university.name;
    //const universityState = props.university.state - province;
    const university = props.university;
    const universityImageURL = "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg";
    console.log(props);

    return <div className='university-div'>
        <h2>{universityName} </h2>
        <div className='university-info'>
            <img className='university-image' src={universityImageURL} width='10px'></img>
            <div>
                <h3>State: {university["state-province"] != null ? university["state-province"] : "N/A"}</h3>
                <h3>Country: {university.country != null ? university.country : "N/A"}</h3>
                <a href={university["web_pages"][0]}>{university.name}</a>
            </div>

        </div>
    </div>
}

export default UniversityTile;