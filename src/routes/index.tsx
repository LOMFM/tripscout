import * as React from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/home.layout";
import HomePage from '../pages/home/home';
import TripsPage from '../pages/trips/list';

const Navigator = () => {
    const element = useRoutes([
        {
            path: '',
            element: <HomeLayout />,
            children: [
                {
                    path: '',
                    element: <HomePage />
                },
                {
                    path: '/destination/:keyword',
                    element: <TripsPage />
                }
            ]
        },
    ]);

    return element;
}

export default Navigator;