import React, { useState, useEffect } from 'react';
import UniversityTile from './UniversityTile';
import NavigationButton from './NavigationButton';
import '../ComponentsCSS/UniversityDetailedView.css';

function UniversityDetailedView(props) {
    const universityName = String(props.universityName).replace('%20', ' ');
    console.log(universityName);
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(4);
    const url = "http://universities.hipolabs.com/search?country=United+States";

    //ideally we would filter out data in the request but I can't figure out how to with this api
    const dataToRender = data.filter((data) => data.name === universityName);

    //empty array passed in for second parameter makes it so useEffect is only called once
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .then(console.log(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className='university-detail-area'>
            <div >
                {dataToRender.map((university, index) => (
                    <div className='university-detail-area'>
                        < UniversityTile university={university} key={index} id={index} learnMore={false} />
                        <div className='more-university-info'>
                            <p>
                                What more is there to say about {universityName} other than that it is a university in the country of {university.country}.<br /><br />
                                This entire area could be full of data if the practice api I'm using gave me more than just the tiniest bit. <br /><br />
                                Also more than likely this text will also be imported so it's not hard coded in the jsx file.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default UniversityDetailedView;