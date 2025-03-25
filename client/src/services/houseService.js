import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/houses'; 

export default {
    async getAll() {
        
        const result = await request.get(baseUrl);

        const houses = Object.values(result);     
        
        return houses;
    },
    getOne(houseId) {
        return request.get(`${baseUrl}/${houseId}`);
    },
    create(houseData) {
        return request.post(baseUrl, houseData);
    },
    edit(houseId, houseData) {
        return request.put(`${baseUrl}/${houseId}`, { ...houseData, _id: houseId });
    },
    delete(houseId) {
        return request.delete(`${baseUrl}/${houseId}`);
    },
};
