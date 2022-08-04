import { ITrip } from "../../types/interface";

interface Prop {
    location: ITrip
};
const LocationItem: React.FC<Prop> = ({location}: Prop) => {
    return (
        <div className="location">
            <div className="location-address">
                {location.location}
            </div>
            <h3 className="location-title">{location.title}</h3>
            <div className="location-preview">
                <img src={location.preview} alt="location" />
            </div>
            <div className="location-description">
                {location.description}
            </div>
        </div>
    )
}

export default LocationItem;