import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import UniversityDetailedView from '../Components/UniversityDetailedView';

function LearnMorePage() {
    let navigate = useNavigate();
    let { universityName } = useParams();


    return (
        <UniversityDetailedView universityName={universityName} />
    )
}

export default LearnMorePage