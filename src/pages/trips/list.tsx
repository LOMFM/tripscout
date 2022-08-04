import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/organisms/Breadcrumb";
import FeedHero from "../../components/organisms/FeedHero";
import TripList from "../../components/organisms/TripList";

const parentPages = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'destination',
        path: '/'
    }
]

const TripsPage: React.FC = () => {
    let { keyword } = useParams();

    return (
        <>
            <div className="container">
                <BreadCrumb parents={parentPages} current={keyword || ''} />
                <FeedHero city={keyword || ''} country={'United States'} thumbnail={'https://public-microservices.tripscout.co/image-resizer/eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoid2ViX3Byb2R1Y3Rpb24iLCJ1cmwiOiJodHRwczovL3RyaXBzY291dC1wcm9kLnMzLmFtYXpvbmF3cy5jb20vdXBsb2Fkcy9jdXJhdGlvbi9jdXJhdGVkX2ltYWdlLzMyMy9waG90by0xNjE4MDIwMjk4OTE5LTUwZjlkMTZmNjdiOC5qcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDAwLCJoZWlnaHQiOjEwMDB9fQ.sK0ZRucC3xqthaFW2tMD4qr0sJfyu-zlb99FisvQyeQ'} />
            </div>
            <TripList />
        </>
    )    
}

export default TripsPage;