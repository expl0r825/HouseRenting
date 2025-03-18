import "./houseItem.css";

export default function HouseItem({
    name,
    address,
    imageUrl,
    price,
    _id
}) {

    return (
        <div className="house-card">
            <img className="house-image" src={imageUrl} alt={name} />
            <div className="house-info">
                <h2 className="house-title">{name}</h2>
                <p className="house-address">{address}</p>
                <div className="house-footer">
                    <span className="house-price">${price}</span>
                    <button className="house-button">Rent</button>
                </div>
            </div>
        </div>
    );
};