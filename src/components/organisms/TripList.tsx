import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LocationItem from "./LocationItem";
import { ITrip } from '../../types/interface';
import { fetchTrips } from '../../services/trips';

const COUNT = 5;

const TripList: React.FC = () => {
    const { t } = useTranslation();

    let { keyword } = useParams();
    const [ trips, setTrips ] = useState<ITrip[]>([]);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ hasMore, setHasMore ] = useState<boolean>(true);

    const fetch = async (refresh: boolean = false) => {
        if (refresh) {
            setTrips([]);
        }
        setLoading(true);
        const skipCount = refresh ? 0 : trips.length;
        const data = await fetchTrips(skipCount, COUNT, keyword)
        setTrips(refresh ? data : [...trips, ...data]);
        setLoading(false);
        if (data.length < COUNT) {
            setHasMore(false);
        } else {
            setHasMore(true);
        }
    }

    const handleScroll = () => {
        if (Math.abs(window.innerHeight + document.documentElement.scrollTop - document.documentElement.offsetHeight) > 1) return;
        if (!hasMore || loading) return;
        fetch();
    };

    useEffect(() => {
        window.removeEventListener('scroll', handleScroll)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [trips]);

    useEffect(() => {
       fetch(true);
    }, [keyword]);

    return (
        <div className="trip-list">
            {
                trips.map((location: ITrip) => (
                    <LocationItem location={location} key={'location_' + location.id} />
                ))
            }
            { loading ? (
                <div className="loader">
                    <h4>{t(trips.length ? 'loading_more' : 'loading')}</h4>
                </div>
            ) : !hasMore ? (
                <div className="loader">
                    <h4>{t(trips.length ? 'no_content_more' : 'no_content')}</h4>
                </div>
            ) : null }
        </div>
    )
}

export default TripList;