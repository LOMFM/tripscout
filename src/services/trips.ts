import { ITrip } from "../types/interface";

export const fetchTrips = async (skip = 0, count = 5, keyword = ''): Promise<ITrip[]> => {
    return new Promise<ITrip[]>((resolve) => {
        setTimeout(() => {
            var data = require('../data/trips.json');
            const filtered = keyword ? data.filter((e: ITrip) => e.location.includes(keyword)) : data;
            const result = filtered.slice(skip, skip + count);
            resolve(result);
        }, 3000);
    });
}