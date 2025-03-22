import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/houses';

export const useHouses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setHouses)
    }, []);

    return { houses };
};

export const useHouse = (houseId) => {
    const [house, setHouse] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${houseId}`)
            .then(setHouse);
    }, [houseId])

    return {
        house,
    };
};

export const useCreateHouse = () => {
    const { request } = useAuth();

    const create = (houseData) =>
        request.post(baseUrl, houseData);

    return {
        create,
    }
};

export const useEditHouse = () => {
    const { request } = useAuth();

    const edit = (houseId, houseData) =>
        request.put(`${baseUrl}/${houseId}`, { ...houseData, _id: houseId });

    return {
        edit,
    }
};

export const useDeleteHouse = () => {
    const { request } = useAuth();

    const deleteHouse = (houseId) =>
        request.delete(`${baseUrl}/${houseId}`);

    return {
        deleteHouse,
    }
};