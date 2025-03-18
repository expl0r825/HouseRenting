import { useEffect, useState } from "react";

import HouseItem from "./HouseItem";
import houseService from "../../services/houseService";

import './allHouses.css';

export default function AllHouses() {
    const [houses, SetHouses] = useState([]);

    useEffect(() => {
        houseService.getAll()
            .then(SetHouses)

    }, []);

    return (
        <section id="catalog-page">
            <h1>All Houses</h1>

            {houses.length > 0 ? (
                <div className="house-list">
                    {houses.map(house => <HouseItem key={house._id} {...house} />)}
                </div>)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
}
