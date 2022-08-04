type FeedHeroProps = {
    city: string
    country: string
    thumbnail: string
}

const FeedHero: React.FC<FeedHeroProps> = ({country, city, thumbnail}) => {
    
    return (
        <div className="feed-hero">
            <div className="feed-title">
                <h2>{city}</h2>
                <div className="country">{country}</div>
            </div>
            <div className="feed-thumbnail">
                <img src={thumbnail} alt={`${city}, ${country}`} />
            </div>
        </div>
    )
}

export default FeedHero;