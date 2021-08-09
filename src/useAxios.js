import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = (bUrl) => {
    const [cards, setCards] = useState([]);
    const [baseUrl] = useState(bUrl);
    const addCard = async endPoint => {
        if (typeof endPoint !== 'string') endPoint = null;
        const response = await axios.get(
            (endPoint) ? baseUrl + endPoint : baseUrl
        );
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };
    return [cards, addCard]
}

export default useAxios;